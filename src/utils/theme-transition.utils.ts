import {
  THEME_TRANSITION_COLORS,
  THEME_TRANSITION_DURATIONS,
  THEME_TRANSITION_OPTIONS,
  THEME_TRANSITION_ROOT_ID,
} from "../constants/theme-transition.constants";
import type {
  ThemeTransitionRunner,
  ThemeTransitionRunnerOptions,
  ThemeTransitionStyle,
} from "../types/theme-transition";

const EASE_SMOOTH = "cubic-bezier(0.65, 0, 0.35, 1)";
const VALID_THEME_TRANSITIONS = new Set(
  THEME_TRANSITION_OPTIONS.map((option) => option.id),
);

function getRoot(rootSelector?: string) {
  return document.querySelector<HTMLElement>(
    rootSelector ?? `#${THEME_TRANSITION_ROOT_ID}`,
  );
}

function createOverlay(background: string) {
  const overlay = document.createElement("div");

  Object.assign(overlay.style, {
    background,
    inset: "0",
    pointerEvents: "none",
    position: "fixed",
    transform: "translateZ(0)",
    zIndex: "9999",
  });

  document.body.appendChild(overlay);
  return overlay;
}

function cloneRootForOverlay(root: HTMLElement) {
  const rect = root.getBoundingClientRect();
  const overlay = document.createElement("div");
  const clone = root.cloneNode(true) as HTMLElement;

  clone.removeAttribute("id");
  Object.assign(clone.style, {
    margin: "0",
    minHeight: `${rect.height}px`,
    pointerEvents: "none",
    transform: "none",
    width: `${rect.width}px`,
  });

  Object.assign(overlay.style, {
    background: getComputedStyle(document.body).backgroundColor,
    height: `${rect.height}px`,
    left: `${rect.left}px`,
    overflow: "hidden",
    pointerEvents: "none",
    position: "fixed",
    top: `${rect.top}px`,
    transform: "translateZ(0)",
    width: `${rect.width}px`,
    willChange: "transform",
    zIndex: "9999",
  });

  overlay.appendChild(clone);
  document.body.appendChild(overlay);
  return overlay;
}

function resetRoot(root: HTMLElement | null) {
  if (!root) return;

  root.style.filter = "";
  root.style.opacity = "";
  root.style.transform = "";
  root.style.willChange = "";
}

function midpointApply(options: ThemeTransitionRunnerOptions, delay: number) {
  let applied = false;
  const timeout = window.setTimeout(() => {
    applied = true;
    options.applyTheme();
  }, delay);

  return {
    applyNow: () => {
      if (applied) return;
      applied = true;
      window.clearTimeout(timeout);
      options.applyTheme();
    },
    cancel: () => window.clearTimeout(timeout),
  };
}

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function isThemeTransitionStyle(
  value: string | null,
): value is ThemeTransitionStyle {
  return Boolean(
    value && VALID_THEME_TRANSITIONS.has(value as ThemeTransitionStyle),
  );
}

function runDefault(options: ThemeTransitionRunnerOptions) {
  const root = getRoot(options.rootSelector);

  if (root) {
    root.classList.add("transition-colors", "duration-500");
  }

  options.applyTheme();

  const timeout = window.setTimeout(() => {
    root?.classList.remove("transition-colors", "duration-500");
  }, THEME_TRANSITION_DURATIONS.default);

  return () => {
    window.clearTimeout(timeout);
    root?.classList.remove("transition-colors", "duration-500");
  };
}

function runRipple(options: ThemeTransitionRunnerOptions) {
  const color = THEME_TRANSITION_COLORS[options.fromTheme];
  const origin = options.origin ?? {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  let frameId = 0;
  const duration = THEME_TRANSITION_DURATIONS.ripple;
  const maxRadius =
    Math.hypot(
      Math.max(origin.x, window.innerWidth - origin.x),
      Math.max(origin.y, window.innerHeight - origin.y),
    ) * 1.12;

  if (!context) {
    options.applyTheme();
    return () => undefined;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  Object.assign(canvas.style, {
    inset: "0",
    pointerEvents: "none",
    position: "fixed",
    transform: "translateZ(0)",
    zIndex: "9999",
  });
  document.body.appendChild(canvas);

  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "destination-out";
  options.applyTheme();

  const start = performance.now();

  const draw = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const radius = easeOutCubic(progress) * maxRadius;

    context.beginPath();
    context.arc(origin.x, origin.y, radius, 0, Math.PI * 2);
    context.fill();

    if (progress < 1) {
      frameId = requestAnimationFrame(draw);
      return;
    }

    canvas.remove();
  };

  frameId = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(frameId);
    canvas.remove();
  };
}

function runCurtain(options: ThemeTransitionRunnerOptions) {
  const root = getRoot(options.rootSelector);
  const overlay = root
    ? cloneRootForOverlay(root)
    : createOverlay(THEME_TRANSITION_COLORS[options.fromTheme]);
  const exitX = options.toTheme === "dark" ? "-100%" : "100%";

  overlay.style.transform = "translateX(0%)";
  overlay.style.willChange = "transform";
  options.applyTheme();

  const animation = overlay.animate(
    [
      { transform: "translateX(0%)" },
      { transform: `translateX(${exitX})` },
    ],
    {
      duration: THEME_TRANSITION_DURATIONS.curtain,
      easing: EASE_SMOOTH,
      fill: "both",
    },
  );

  animation.onfinish = () => {
    overlay.remove();
  };

  return () => {
    animation.cancel();
    overlay.remove();
  };
}

function runFadeBlur(options: ThemeTransitionRunnerOptions) {
  const root = getRoot(options.rootSelector);
  const midpoint = midpointApply(options, 620);

  if (!root) {
    midpoint.applyNow();
    return () => midpoint.cancel();
  }

  root.style.willChange = "filter";

  const animation = root.animate(
    [
      { filter: "blur(0px)" },
      { filter: "blur(12px)", offset: 0.5 },
      { filter: "blur(0px)" },
    ],
    {
      duration: THEME_TRANSITION_DURATIONS["fade-blur"],
      easing: EASE_SMOOTH,
      fill: "both",
    },
  );

  animation.onfinish = () => {
    midpoint.applyNow();
    resetRoot(root);
  };

  return () => {
    midpoint.cancel();
    animation.cancel();
    resetRoot(root);
  };
}

function runPixelDissolve(options: ThemeTransitionRunnerOptions) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const tileSize = width < 640 ? 32 : 24;
  const color = THEME_TRANSITION_COLORS[options.fromTheme];
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  let frameId = 0;
  let revealedCount = 0;
  let removeFrameId = 0;
  const duration = THEME_TRANSITION_DURATIONS["pixel-dissolve"];

  if (!context) {
    options.applyTheme();
    return () => undefined;
  }

  canvas.width = width;
  canvas.height = height;
  Object.assign(canvas.style, {
    inset: "0",
    pointerEvents: "none",
    position: "fixed",
    transform: "translateZ(0)",
    zIndex: "9999",
  });
  document.body.appendChild(canvas);
  context.fillStyle = color;
  context.fillRect(0, 0, width, height);
  options.applyTheme();

  const cols = Math.ceil(width / tileSize);
  const rows = Math.ceil(height / tileSize);
  const tiles: Array<[number, number]> = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      tiles.push([col, row]);
    }
  }

  for (let index = tiles.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [tiles[index], tiles[swapIndex]] = [tiles[swapIndex], tiles[index]];
  }

  const start = performance.now();

  const draw = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutCubic(progress);
    const target = Math.min(tiles.length, Math.floor(eased * tiles.length));
    const maxTilesPerFrame = Math.max(10, Math.ceil(tiles.length / 180));
    const nextRevealed = Math.min(
      tiles.length,
      progress >= 1 ? tiles.length : target,
      revealedCount + maxTilesPerFrame,
    );

    for (let index = revealedCount; index < nextRevealed; index += 1) {
      const tile = tiles[index];
      if (!tile) continue;

      const [col, row] = tile;
      context.clearRect(col * tileSize, row * tileSize, tileSize, tileSize);
    }

    revealedCount = nextRevealed;

    if (revealedCount < tiles.length) {
      frameId = requestAnimationFrame(draw);
      return;
    }

    removeFrameId = requestAnimationFrame(() => canvas.remove());
  };

  frameId = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(frameId);
    cancelAnimationFrame(removeFrameId);
    canvas.remove();
  };
}

export const THEME_TRANSITION_RUNNERS: Record<
  ThemeTransitionStyle,
  ThemeTransitionRunner
> = {
  curtain: runCurtain,
  default: runDefault,
  "fade-blur": runFadeBlur,
  "pixel-dissolve": runPixelDissolve,
  ripple: runRipple,
};

export function getThemeTransitionRunner(style: ThemeTransitionStyle) {
  return THEME_TRANSITION_RUNNERS[style];
}
