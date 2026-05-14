import { useTheme } from "../../hooks/useTheme";
import { SocialDock } from "../layout/social-dock";

export function ContactSection() {
  const { isDark } = useTheme();

  return (
    <section
      className={`flex w-full flex-col items-center justify-center gap-7 border-t ${
        isDark ? "border-[#2A2A2E]" : "border-[#E5E7EB]"
      } px-4 py-20 transition-colors duration-300 max-sm:pt-10 sm:px-8`}
    >
      <h1 className="text-2xl font-bold lg:text-4xl">
        Let&apos;s work together
      </h1>
      <p
        className={`text-center font-medium ${
          isDark ? "text-[#D4D4D8]" : "text-[#374151]"
        } transition-colors duration-300 lg:text-lg`}
      >
        Have a project in mind? Let&apos;s create something amazing.
      </p>
      <SocialDock />
    </section>
  );
}
