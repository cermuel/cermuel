"use client";

import { useState } from "react";
import { AnimationsSection } from "./components/sections/animations-section";
import { AboutSection } from "./components/sections/about-section";
import { ContactSection } from "./components/sections/contact-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { FloatingContact } from "./components/layout/floating-contact";
import { ProjectModal } from "./components/sections/project-modal";
import { ProjectsSection } from "./components/sections/projects-section";
import { ThemeProvider } from "./context/theme-context";
import { ThemeTransitionProvider } from "./context/theme-transition-context";
import { THEME_TRANSITION_ROOT_ID } from "./constants/theme-transition.constants";
import { useBodyBackground } from "./hooks/useBodyBackground";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import { useTheme } from "./hooks/useTheme";
import type { Project } from "./types/project";

function AppContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDark } = useTheme();

  useBodyBackground(isDark);
  useBodyScrollLock(Boolean(selectedProject));

  return (
    <main
      id={THEME_TRANSITION_ROOT_ID}
      className={`flex w-screen flex-col items-center justify-center pt-14 ${
        isDark ? "bg-[#101011] text-[#F9FAFB]" : "bg-[#F9FAFB] text-[#111827]"
      }`}
    >
      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
      <FloatingContact />
      <AboutSection />
      <ProjectsSection onSelectProject={setSelectedProject} />
      <AnimationsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeTransitionProvider>
        <AppContent />
      </ThemeTransitionProvider>
    </ThemeProvider>
  );
}

export default App;
