import { useEffect } from "react";
import { BODY_BACKGROUND } from "../constants/theme.constants";

export function useBodyBackground(isDark: boolean) {
  useEffect(() => {
    document.body.style.backgroundColor = isDark
      ? BODY_BACKGROUND.dark
      : BODY_BACKGROUND.light;
    document.body.style.transition = "background-color 0.5s";
  }, [isDark]);
}
