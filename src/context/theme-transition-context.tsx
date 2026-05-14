import { createContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { flushSync } from "react-dom";
import {
  THEME_TRANSITION_DURATIONS,
  THEME_TRANSITION_ROOT_ID,
  THEME_TRANSITION_STORAGE_KEY,
} from "../constants/theme-transition.constants";
import { useTheme } from "../hooks/useTheme";
import type {
  ThemeTransitionCleanup,
  ThemeTransitionContextValue,
  ThemeTransitionOrigin,
  ThemeTransitionStyle,
} from "../types/theme-transition";
import type { Theme } from "../types/theme";
import {
  getThemeTransitionRunner,
  isThemeTransitionStyle,
} from "../utils/theme-transition.utils";

export const ThemeTransitionContext =
  createContext<ThemeTransitionContextValue | null>(null);

interface ThemeTransitionProviderProps {
  children: ReactNode;
}

export function ThemeTransitionProvider({
  children,
}: ThemeTransitionProviderProps) {
  const { setTheme, theme } = useTheme();
  const [selectedTransition, setSelectedTransitionState] =
    useState<ThemeTransitionStyle>(() => {
      if (typeof window === "undefined") return "default";

      const storedTransition = window.localStorage.getItem(
        THEME_TRANSITION_STORAGE_KEY,
      );

      return isThemeTransitionStyle(storedTransition)
        ? storedTransition
        : "default";
    });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cleanupRef = useRef<ThemeTransitionCleanup | null>(null);
  const failsafeTimeoutRef = useRef<number | null>(null);
  const settleTimeoutRef = useRef<number | null>(null);
  const targetThemeRef = useRef<Theme>(theme);

  useEffect(() => {
    if (!isTransitioning) {
      targetThemeRef.current = theme;
    }
  }, [isTransitioning, theme]);

  const value = useMemo<ThemeTransitionContextValue>(() => {
    const setSelectedTransition = (style: ThemeTransitionStyle) => {
      setSelectedTransitionState(style);
      window.localStorage.setItem(THEME_TRANSITION_STORAGE_KEY, style);
    };

    const clearTimers = () => {
      if (failsafeTimeoutRef.current) {
        window.clearTimeout(failsafeTimeoutRef.current);
        failsafeTimeoutRef.current = null;
      }

      if (settleTimeoutRef.current) {
        window.clearTimeout(settleTimeoutRef.current);
        settleTimeoutRef.current = null;
      }
    };

    const runThemeTransition = (
      nextTheme: Theme,
      origin?: ThemeTransitionOrigin,
    ) => {
      if (nextTheme === targetThemeRef.current && isTransitioning) return;

      clearTimers();
      cleanupRef.current?.();
      cleanupRef.current = null;
      targetThemeRef.current = nextTheme;
      setIsTransitioning(true);

      const runner = getThemeTransitionRunner(selectedTransition);
      let didFinish = false;

      cleanupRef.current = runner({
        applyTheme: () => {
          flushSync(() => {
            setTheme(nextTheme);
          });
          didFinish = true;

          settleTimeoutRef.current = window.setTimeout(() => {
            if (targetThemeRef.current === nextTheme) {
              setIsTransitioning(false);
              cleanupRef.current = null;
            }
          }, THEME_TRANSITION_DURATIONS[selectedTransition] + 80);
        },
        fromTheme: theme,
        origin,
        rootSelector: `#${THEME_TRANSITION_ROOT_ID}`,
        toTheme: nextTheme,
      });

      failsafeTimeoutRef.current = window.setTimeout(() => {
        if (!didFinish && targetThemeRef.current === nextTheme) {
          flushSync(() => {
            setTheme(nextTheme);
          });
          setIsTransitioning(false);
          cleanupRef.current = null;
        }
      }, THEME_TRANSITION_DURATIONS[selectedTransition] + 700);
    };

    return {
      isTransitioning,
      runThemeTransition,
      selectedTransition,
      setSelectedTransition,
    };
  }, [isTransitioning, selectedTransition, setTheme, theme]);

  return (
    <ThemeTransitionContext.Provider value={value}>
      {children}
    </ThemeTransitionContext.Provider>
  );
}
