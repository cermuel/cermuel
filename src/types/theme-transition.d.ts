import type { Theme } from "./theme";

export type ThemeTransitionStyle =
  | "default"
  | "ripple"
  | "curtain"
  | "fade-blur"
  | "pixel-dissolve";

export interface ThemeTransitionOrigin {
  x: number;
  y: number;
}

export interface ThemeTransitionOption {
  id: ThemeTransitionStyle;
  label: string;
  description: string;
}

export interface ThemeTransitionRunnerOptions {
  applyTheme: () => void;
  fromTheme: Theme;
  origin?: ThemeTransitionOrigin;
  rootSelector?: string;
  toTheme: Theme;
}

export type ThemeTransitionCleanup = () => void;

export type ThemeTransitionRunner = (
  options: ThemeTransitionRunnerOptions,
) => ThemeTransitionCleanup;

export interface ThemeTransitionContextValue {
  isTransitioning: boolean;
  runThemeTransition: (theme: Theme, origin?: ThemeTransitionOrigin) => void;
  selectedTransition: ThemeTransitionStyle;
  setSelectedTransition: (style: ThemeTransitionStyle) => void;
}
