import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { ABOUT_ITEMS, PROFILE } from "../../constants/profile.constants";
import { useTheme } from "../../hooks/useTheme";
import { TopNav } from "../layout/TopNav";

export function AboutSection() {
  const { isDark } = useTheme();

  return (
    <section className="mb-20 flex w-full max-w-4xl flex-col px-4 sm:px-8">
      <TopNav />
      <p
        className={`${
          isDark ? "text-[#D4D4D8]" : "text-[#374151]"
        } mt-8 font-medium transition-colors duration-300 lg:text-lg`}
      >
        a bit more about myself
      </p>
      <ul
        className={`list-disc space-y-1 pl-4 text-sm ${
          isDark ? "text-[#A1A1AA]" : "text-[#6B7280]"
        } my-4 transition-colors duration-300 max-lg:text-xs`}
        style={{ listStyleType: "disc", listStylePosition: "outside" }}
      >
        {ABOUT_ITEMS.map((item, index) => (
          <li key={index}>
            {"text" in item ? (
              item.text
            ) : (
              <>
                {item.prefix}
                <strong>{item.strong}</strong>
                {"middle" in item ? item.middle : null}
                {"strongSuffix" in item ? (
                  <strong>{item.strongSuffix}</strong>
                ) : null}
                {"suffix" in item ? item.suffix : null}
              </>
            )}
          </li>
        ))}
      </ul>
      <a
        href={PROFILE.resume}
        download
        className={`flex w-max cursor-pointer items-center gap-2 rounded-md border-2 ${
          isDark
            ? "border-[#F9FAFB] bg-[#F9FAFB] text-[#18181B] hover:border-[#2A2A2E] hover:bg-[#18181B] hover:text-[#F9FAFB]"
            : "border-[#111827] bg-[#111827] text-[#F9FAFB] hover:border-[#E5E7EB] hover:bg-[#F9FAFB] hover:text-[#111827]"
        } px-3 py-1.5 text-sm transition-all duration-500 hover:translate-x-1`}
      >
        Download Resume
        <BsFileEarmarkArrowDown />
      </a>
    </section>
  );
}
