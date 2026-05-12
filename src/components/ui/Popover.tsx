import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { PopoverProps } from "../../types/popover";
import { useTheme } from "../../hooks/useTheme";

export function Popover({
  children,
  className = "",
  contentClassName = "",
  onOpenChange,
  open,
  trigger,
}: PopoverProps) {
  const { isDark } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const shouldKeepOpen = target.closest("[data-popover-keep-open]");

      if (!ref.current?.contains(target) && !shouldKeepOpen) {
        onOpenChange(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onOpenChange, open]);

  return (
    <div className={className || "relative"} ref={ref}>
      {trigger({ open, toggle: () => onOpenChange(!open) })}

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={`absolute bottom-[calc(100%+12px)] right-0 z-50 rounded-[24px] border p-2 shadow-[0px_18px_80px_0px_#00000026] backdrop-blur-xl ${
              isDark
                ? "border-[#2A2A2E] bg-[#18181B]/95 text-[#F9FAFB]"
                : "border-[#E5E7EB] bg-white/95 text-[#111827]"
            } ${contentClassName}`}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
