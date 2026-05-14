import { useContext } from "react";
import { ThemeTransitionContext } from "../context/theme-transition-context";
import type { ThemeTransitionContextValue } from "../types/theme-transition";

export function useThemeTransition(): ThemeTransitionContextValue {
  const context = useContext(ThemeTransitionContext);

  if (!context) {
    throw new Error(
      "useThemeTransition must be used within ThemeTransitionProvider",
    );
  }

  return context;
}
