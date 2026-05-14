import { HugeiconsIcon } from "@hugeicons/react";
import { SentIcon } from "@hugeicons/core-free-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SendIconProps {
  active: boolean;
}

export function SendIcon({ active }: SendIconProps) {
  const [iconKey, setIconKey] = useState(0);

  useEffect(() => {
    if (!active) {
      setIconKey(0);
      return;
    }

    const interval = window.setInterval(() => {
      setIconKey((prev) => prev + 1);
    }, 1500);

    return () => window.clearInterval(interval);
  }, [active]);

  if (!active) {
    return (
      <span className="relative grid size-6 place-items-center overflow-hidden">
        <HugeiconsIcon icon={SentIcon} size={22} strokeWidth={2} />
      </span>
    );
  }

  return (
    <span className="relative grid size-6 place-items-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={iconKey}
          animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
          className="absolute grid place-items-center"
          exit={{ x: 28, y: -18, opacity: 0, rotate: 25, scale: 0.8 }}
          initial={{ x: -24, y: 16, opacity: 0, rotate: -25, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <HugeiconsIcon icon={SentIcon} size={22} strokeWidth={2} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
