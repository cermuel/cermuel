import { links } from "../../data/links.data";
import { useTheme } from "../../hooks/useTheme";

interface SocialDockProps {
  className?: string;
}

export function SocialDock({ className = "" }: SocialDockProps) {
  const { isDark } = useTheme();

  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-full border ${
        isDark
          ? "border-[#2A2A2E] bg-[#18181B]"
          : "border-[#E5E7EB] bg-white"
      } p-2 transition-colors duration-300 ${className}`}
    >
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            className={`grid size-9 place-items-center rounded-full transition-colors duration-300 ${
              isDark
                ? "text-[#F9FAFB] hover:bg-[#2A2A2E]"
                : "text-[#111827] hover:bg-[#F3F4F6]"
            }`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
