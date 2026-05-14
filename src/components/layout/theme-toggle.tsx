import { useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  Moon02Icon,
  Sun01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { THEME_TRANSITION_OPTIONS } from "../../constants/theme-transition.constants";
import { useTheme } from "../../hooks/useTheme";
import { useThemeTransition } from "../../hooks/useThemeTransition";
import type { Theme } from "../../types/theme";
import { Popover } from "../ui/popover";

const THEME_OPTIONS: Array<{ theme: Theme; icon: IconSvgElement }> = [
  { theme: "light", icon: Sun01Icon },
  { theme: "dark", icon: Moon02Icon },
];

export function ThemeToggle() {
  const { theme, isDark } = useTheme();
  const {
    isTransitioning,
    runThemeTransition,
    selectedTransition,
    setSelectedTransition,
  } = useThemeTransition();
  const [open, setOpen] = useState(false);

  const handleThemeClick = (
    nextTheme: Theme,
    event: ReactMouseEvent<HTMLButtonElement>,
  ) => {
    if (nextTheme === theme && !isTransitioning) return;

    const rect = event.currentTarget.getBoundingClientRect();
    runThemeTransition(nextTheme, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <Popover
      className="relative flex items-center gap-1"
      contentClassName="bottom-auto! top-[calc(100%+10px)]! w-64 rounded-[18px]! p-1.5!"
      onOpenChange={setOpen}
      open={open}
      trigger={({ toggle }) => (
        <>
          <div
            data-popover-keep-open
            className={`flex items-center ${
              isDark ? "bg-[#18181B]" : "bg-[#FFFFFF]"
            } gap-1 rounded-full p-1 transition-colors duration-300`}
          >
            {THEME_OPTIONS.map(({ theme: value, icon }) => (
              <button
                key={value}
                aria-label={`Switch to ${value} mode`}
                aria-pressed={theme === value}
                onClick={(event) => handleThemeClick(value, event)}
                className={`cursor-pointer ${
                  theme === value
                    ? isDark
                      ? "bg-[#2A2A2E]"
                      : "bg-[#F3F4F6]"
                    : ""
                } rounded-full p-1.5 transition-all duration-300`}
                type="button"
              >
                <HugeiconsIcon icon={icon} size={16} strokeWidth={2} />
              </button>
            ))}
          </div>
          <button
            aria-expanded={open}
            aria-label="Choose theme transition"
            onClick={toggle}
            className={`grid size-6 place-items-center rounded-full border text-[11px] transition-all duration-300 hover:opacity-100 ${
              open
                ? isDark
                  ? "border-white/15 bg-white/10 opacity-100"
                  : "border-black/15 bg-black/5 opacity-100"
                : isDark
                  ? "border-white/10 bg-[#18181B] opacity-55"
                  : "border-black/10 bg-white opacity-55"
            }`}
            type="button"
          >
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              size={13}
              strokeWidth={2}
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}
    >
      {THEME_TRANSITION_OPTIONS.map((option) => {
        const selected = selectedTransition === option.id;

        return (
          <button
            className={`my-1.5 flex w-full items-start gap-3 rounded-[14px] px-3 py-2.5 text-left transition-colors ${
              selected
                ? isDark
                  ? "bg-white/10"
                  : "bg-black/[0.04]"
                : isDark
                  ? "hover:bg-white/[0.06]"
                  : "hover:bg-black/[0.035]"
            }`}
            key={option.id}
            onClick={() => {
              setSelectedTransition(option.id);
              setOpen(false);
            }}
            type="button"
          >
            <span
              className={`mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full border ${
                selected
                  ? isDark
                    ? "border-white/20 bg-white text-[#101011]"
                    : "border-black/15 bg-[#111827] text-white"
                  : isDark
                    ? "border-white/10"
                    : "border-black/10"
              }`}
            >
              {selected ? (
                <HugeiconsIcon icon={Tick02Icon} size={12} strokeWidth={2} />
              ) : null}
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-medium leading-4">
                {option.label}
              </span>
              <span
                className={`mt-1 block text-[11px] leading-4 ${
                  isDark ? "text-white/50" : "text-black/50"
                }`}
              >
                {option.description}
              </span>
            </span>
          </button>
        );
      })}
    </Popover>
  );
}
