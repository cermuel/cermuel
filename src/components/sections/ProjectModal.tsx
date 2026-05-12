import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { PointerEvent, useState } from "react";
import { GoLink } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import type { Project } from "../../types/project";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

interface AnimatedTextProps {
  className?: string;
  mode?: "chars" | "words";
  text: string;
}

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedText({
  className = "",
  mode = "words",
  text,
}: AnimatedTextProps) {
  const pieces = mode === "chars" ? Array.from(text) : text.split(" ");

  return (
    <motion.span
      aria-label={text}
      className={className}
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {pieces.map((piece, index) => (
        <motion.span
          aria-hidden="true"
          className={`inline-block ${
            mode === "words" && index < pieces.length - 1 ? "mr-[0.25em]" : ""
          }`}
          transition={{ delay: 0.5 }}
          key={`${piece}-${index}`}
          variants={textItemVariants}
        >
          {mode === "words" ? piece : piece === " " ? "\u00A0" : piece}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [bannerHeight, setBannerHeight] = useState(260);
  const [mediaReady, setMediaReady] = useState(false);
  const { isDark } = useTheme();
  const paragraphs = project.description.split("\n\n");

  const resizeBanner = (event: PointerEvent<HTMLButtonElement>) => {
    const startY = event.clientY;
    const startHeight = bannerHeight;
    const maxHeight = Math.min(window.innerHeight * 0.8, 800);

    event.currentTarget.setPointerCapture(event.pointerId);

    const handleMove = (moveEvent: globalThis.PointerEvent) => {
      const nextHeight = startHeight + moveEvent.clientY - startY;
      setBannerHeight(Math.min(Math.max(nextHeight, 190), maxHeight));
    };

    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp, { once: true });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 grid h-dvh w-screen place-items-center bg-[#101011]/65 p-3 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.article
        className={`relative flex max-h-[80dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border shadow-[0_24px_90px_#0000004D] ${
          isDark
            ? "border-white/10 bg-[#151518] text-[#F9FAFB]"
            : "border-black/60 bg-white text-[#111827]"
        }`}
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className={`absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full border text-lg shadow-[0_10px_30px_#00000024] transition-transform duration-300 hover:scale-95 ${
            isDark
              ? "border-white/10 bg-[#18181B]/90 text-white"
              : "border-black/10 bg-white/90 text-[#111827]"
          }`}
          type="button"
        >
          <IoClose />
        </button>

        <div
          className="relative min-h-48 overflow-hidden bg-[#0F0F10]"
          style={{ height: bannerHeight }}
        >
          <motion.div
            className="absolute inset-0 animate-pulse bg-[linear-gradient(115deg,#18181B,#3F3F464D,#09090B)]"
            animate={{ opacity: mediaReady ? 0 : 1 }}
            transition={{ duration: 0.35 }}
          />
          {project.isVideo ? (
            <>
              <video
                src={project.image}
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              <video
                src={project.image}
                className={`relative h-full w-full object-contain p-3 transition-[filter,opacity,transform] duration-700 sm:p-4 ${
                  mediaReady
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-[1.02] opacity-55 blur-xl"
                }`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlay={() => setMediaReady(true)}
              />
            </>
          ) : (
            <>
              <Image
                src={project.image}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="scale-110 object-cover opacity-35 blur-2xl"
              />
              <Image
                src={project.image}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className={`object-contain p-3 transition-[filter,opacity,transform] duration-700 sm:p-4 ${
                  mediaReady
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-[1.02] opacity-55 blur-xl"
                }`}
                onLoadingComplete={() => setMediaReady(true)}
              />
            </>
          )}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
          <button
            type="button"
            aria-label="Resize project media"
            onPointerDown={resizeBanner}
            className="absolute inset-x-0 bottom-0 z-10 flex h-5 cursor-ns-resize items-end justify-center pb-1"
          >
            <span className="h-1 w-12 rounded-full bg-white/45 shadow-[0_1px_8px_#00000059] transition-colors hover:bg-white/75" />
          </button>
        </div>

        <div className="min-h-0 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.06, duration: 0.28 }}
          >
            <p
              className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                isDark ? "text-white/40" : "text-black/40"
              }`}
            >
              Project
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  <AnimatedText mode="chars" text={project.name} />
                </h1>
                <AnimatedText
                  text={project.shortDescription}
                  mode="chars"
                  className={`mt-3 block max-w-2xl text-sm leading-6 ${
                    isDark ? "text-white/60" : "text-black/58"
                  }`}
                />
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300 hover:gap-3 ${
                  isDark ? "bg-white text-[#101011]" : "bg-[#111827] text-white"
                }`}
              >
                View <GoLink size={14} />
              </a>
            </div>
          </motion.div>

          <motion.ul
            className="mt-5 flex flex-wrap gap-2"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.11, duration: 0.28 }}
            variants={contentVariants}
          >
            {project.sector.map((sector) => (
              <li
                key={sector}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white/60"
                    : "border-black/10 bg-black/[0.03] text-black/60"
                }`}
              >
                {sector}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className={`mt-6 space-y-4 border-t pt-5 text-sm leading-7 ${
              isDark
                ? "border-white/10 text-white/58"
                : "border-black/10 text-black/58"
            }`}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.16, duration: 0.28 }}
            variants={contentVariants}
          >
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
}
