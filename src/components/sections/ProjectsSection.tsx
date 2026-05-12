import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { project } from "../../data/project.data";
import { useTheme } from "../../hooks/useTheme";
import type { Project } from "../../types/project";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

function preloadProjectMedia(projects: Project[]) {
  const links = projects.map((item) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = item.image;
    link.as = item.isVideo ? "video" : "image";
    document.head.appendChild(link);
    return link;
  });

  const media = projects.map((item) => {
    if (item.isVideo) {
      const video = document.createElement("video");
      video.muted = true;
      video.preload = "auto";
      video.src = item.image;
      video.load();
      return video;
    }

    const image = new Image();
    image.src = item.image;
    void image.decode?.().catch(() => null);
    return image;
  });

  return () => {
    links.forEach((link) => link.remove());
    media.forEach((item) => {
      if (item instanceof HTMLVideoElement) {
        item.removeAttribute("src");
        item.load();
      }
    });
  };
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();
  const visibleProjects = showAll
    ? project.projects
    : project.projects.slice(0, 3);

  useEffect(() => preloadProjectMedia(project.projects), []);

  return (
    <motion.section
      className="flex w-full max-w-4xl flex-col px-4 py-12 sm:px-8"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h1 className="mb-2 text-xs font-semibold uppercase tracking-[0.24em]">
        PROJECTS
      </h1>

      <motion.ul
        layout
        className={`divide-y ${isDark ? "divide-white/10" : "divide-black/10"}`}
      >
        <AnimatePresence initial={false}>
          {visibleProjects.map((item, index) => (
            <motion.li
              key={item.url}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: index * 0.125,
                duration: 0.3,
                ease: "easeOut",
              }}
              layout
            >
              <button
                type="button"
                onClick={() => onSelectProject(item)}
                className="group flex w-full items-center justify-between gap-5 py-5 text-left"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base font-semibold uppercase tracking-[-0.01em]">
                      {item.name}
                    </h2>
                    {item.sector.slice(0, 2).map((sector) => (
                      <span
                        key={sector}
                        className={`rounded-full border px-2 py-0.5 text-[11px] ${
                          isDark
                            ? "border-white/10 text-white/40"
                            : "border-black/10 text-black/40"
                        }`}
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
                    isDark
                      ? "bg-white/5 text-white/55 group-hover:bg-white group-hover:text-[#101011]"
                      : "bg-black/5 text-black/55 group-hover:bg-[#111827] group-hover:text-white"
                  }`}
                >
                  <GoArrowUpRight />
                </span>
              </button>
            </motion.li>
          ))}
      {project.projects.length > 3 ? (
        <motion.button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className={`mt-4 w-max rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            isDark
              ? "border-white/10 text-white/70 hover:border-white/25 hover:text-white"
              : "border-black/10 text-black/70 hover:border-black/25 hover:text-black"
          }`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          layout
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={showAll ? "less" : "more"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="block"
            >
              {showAll ? "Show less" : "See more"}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      ) : null}
        </AnimatePresence>
      </motion.ul>
    </motion.section>
  );
}
