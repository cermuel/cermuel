import type { ThemeTransitionOption } from "../types/theme-transition";

export const THEME_TRANSITION_ROOT_ID = "app-root";

export const THEME_TRANSITION_COLORS = {
  dark: "#101011",
  light: "#F9FAFB",
};

export const THEME_TRANSITION_STORAGE_KEY = "cermuel-theme-transition";

export const THEME_TRANSITION_DURATIONS = {
  curtain: 1180,
  default: 540,
  "fade-blur": 1240,
  "pixel-dissolve": 2100,
  ripple: 1050,
};

export const THEME_TRANSITION_OPTIONS: ThemeTransitionOption[] = [
  {
    id: "default",
    label: "Default",
    description: "Simple color transition.",
  },
  {
    id: "pixel-dissolve",
    label: "Pixel dissolve",
    description: "Canvas tiles reveal the next theme.",
  },
  {
    id: "ripple",
    label: "Ripple",
    description: "Expands from the toggle position.",
  },
  {
    id: "curtain",
    label: "Curtain",
    description: "Slides the next theme across the screen.",
  },
  {
    id: "fade-blur",
    label: "Fade blur",
    description: "Softly defocuses before the theme changes.",
  },
];
