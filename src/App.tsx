"use client";

import { useState } from "react";
import { AnimationsSection } from "./components/sections/AnimationsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { FloatingContact } from "./components/layout/FloatingContact";
import { ProjectModal } from "./components/sections/ProjectModal";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ThemeProvider } from "./context/ThemeContext";
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
      className={`flex w-screen flex-col items-center justify-center pt-14 ${
        isDark ? "bg-[#101011] text-[#F9FAFB]" : "bg-[#F9FAFB] text-[#111827]"
      } transition-colors duration-500`}
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
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
