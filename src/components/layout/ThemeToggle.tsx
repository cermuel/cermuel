import { HiSun } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";
import type { Theme } from "../../types/theme";

const THEME_OPTIONS: Array<{ theme: Theme; icon: typeof HiSun }> = [
  { theme: "light", icon: HiSun },
  { theme: "dark", icon: MdDarkMode },
];

export function ThemeToggle() {
  const { theme, isDark, setTheme } = useTheme();

  return (
    <div
      data-popover-keep-open
      className={`flex items-center ${
        isDark ? "bg-[#18181B]" : "bg-[#FFFFFF]"
      } gap-1 rounded-full p-1 transition-colors duration-300`}
    >
      {THEME_OPTIONS.map(({ theme: value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`cursor-pointer ${
            theme === value ? (isDark ? "bg-[#2A2A2E]" : "bg-[#F3F4F6]") : ""
          } rounded-full p-1.5 transition-all duration-300`}
          type="button"
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
