import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { ANIMATION_REELS, PROFILE } from "../../constants/profile.constants";
import { useTheme } from "../../hooks/useTheme";

export function AnimationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDark } = useTheme();
  const activeReel = ANIMATION_REELS[activeIndex];

  return (
    <motion.section
      className="my-20 w-full max-w-5xl px-4 sm:px-8"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p
            className={`text-xs font-medium uppercase tracking-[0.18em] ${
              isDark ? "text-white/45" : "text-black/45"
            }`}
          >
            motion studies
          </p>
          <h1 className="mt-2 max-w-xl text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
            small experiments I played with
          </h1>
        </div>
        <a
          target="_blank"
          href={PROFILE.threadUrl}
          className={`flex w-max items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            isDark
              ? "border-white/10 text-[#F9FAFB] hover:border-white/25"
              : "border-black/10 text-[#111827] hover:border-black/25"
          }`}
        >
          Full thread
          <GoArrowUpRight />
        </a>
      </div>

      <div
        className={`overflow-hidden rounded-[24px] border ${
          isDark ? "border-white/10 bg-[#18181B]" : "border-black/10 bg-white"
        }`}
      >
        <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
          <div
            className={`relative aspect-[16/11] overflow-hidden ${
              isDark ? "bg-[#101011]" : "bg-[#F9FAFB]"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReel.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <video
                  src={activeReel.src}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 text-white"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.28 }}
                >
                  <p className="text-lg font-semibold tracking-[-0.02em]">
                    {activeReel.title}
                  </p>
                  <p className="mt-1 max-w-md text-sm text-white/75">
                    {activeReel.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className={`flex flex-col border-t lg:border-l lg:border-t-0 ${
              isDark ? "border-white/10" : "border-black/10"
            }`}
          >
            {ANIMATION_REELS.map((reel, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={reel.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex flex-1 items-center gap-3 overflow-hidden border-b px-4 py-4 text-left last:border-b-0 ${
                    isDark ? "border-white/10" : "border-black/10"
                  }`}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="activeAnimationReel"
                      className={`absolute inset-0 ${
                        isDark ? "bg-white/[0.06]" : "bg-black/[0.035]"
                      }`}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                  <motion.span
                    animate={{ scale: isActive ? 1.06 : 1 }}
                    className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-medium ${
                      isActive
                        ? isDark
                          ? "bg-[#F9FAFB] text-[#101011]"
                          : "bg-[#111827] text-white"
                        : isDark
                          ? "border border-white/10 text-white/45"
                          : "border border-black/10 text-black/45"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  <span className="relative">
                    <span
                      className={`block text-sm font-medium ${
                        isActive
                          ? isDark
                            ? "text-[#F9FAFB]"
                            : "text-[#111827]"
                          : isDark
                            ? "text-white/60 group-hover:text-white"
                            : "text-black/60 group-hover:text-black"
                      }`}
                    >
                      {reel.title}
                    </span>
                    <span
                      className={`mt-1 block text-xs leading-4 ${
                        isDark ? "text-white/35" : "text-black/40"
                      }`}
                    >
                      {reel.description}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
