import Image from "next/image";
import { experience } from "../../data/xp.data";
import { useTheme } from "../../hooks/useTheme";

function getSectorClassName(sector: string, isDark: boolean) {
  if (sector === "Health") return "text-[#737CDE]";
  if (sector === "FinTech") return "text-[#FE5200]";
  return isDark ? "text-[#A1A1AA] font-medium" : "text-[#6B7280] font-medium";
}

export function ExperienceSection() {
  const { isDark } = useTheme();

  return (
    <section className="flex w-full max-w-4xl flex-col lg:justify-center px-4 py-14 sm:px-8 lg:min-h-screen lg:py-8">
      <h1
        className={`${
          isDark ? "text-[#D4D4D8]" : "text-[#374151]"
        } transition-colors duration-300 lg:text-lg`}
      >
        my dev journey, one{" "}
        <strong className="text-[#737cde]">{"<component />"}</strong> at a time!
      </h1>
      <ul className="mt-6 space-y-5 lg:mt-12 lg:hidden">
        {experience.map((xp) => (
          <li key={xp.link} className="flex items-start gap-5 lg:gap-10">
            <div className="aspect-square w-10 rounded-full lg:w-20">
              <Image
                src={xp.logo}
                className="rounded-full"
                alt=""
                width={40}
                height={40}
              />
              <div className="relative ml-2 flex w-full items-center justify-center lg:ml-4">
                <Image
                  src="https://framerusercontent.com/images/PtvwleFSorGr3pDObFulHZkj8Rc.png?width=63&amp;height=86"
                  alt=""
                  className="w-1/2"
                  width={32}
                  height={43}
                />
              </div>
            </div>
            <div className="mt-1.5 space-y-1">
              <div className="flex items-center gap-2">
                <a
                  href={xp.link}
                  target="_blank"
                  className={`${
                    isDark ? "text-[#A1A1AA]" : "text-[#6B7280]"
                  } underline transition-colors duration-300 max-lg:text-[13px]`}
                >
                  {xp.name}
                </a>
                <div
                  className={`${
                    isDark ? "bg-[#18181B]" : "bg-[#FFFFFF]"
                  } rounded-sm p-1 px-2 text-xs transition-colors duration-300 lg:text-sm ${getSectorClassName(
                    xp.sector,
                    isDark,
                  )}`}
                >
                  {xp.sector}
                </div>
              </div>
              <p
                className={`font-medium ${
                  isDark ? "text-[#D4D4D8]" : "text-[#374151]"
                } text-lg transition-colors duration-300 max-lg:text-sm`}
              >
                {xp.role}
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-[#C7C1B4]" : "text-[#4A4740]"
                } transition-colors duration-300 max-lg:text-xs`}
              >
                {xp.duration}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <ul className="mt-6 space-y-10 max-lg:hidden lg:mt-12">
        {experience.map((xp) => (
          <li key={xp.link} className="flex items-start gap-10">
            <p
              className={`w-48 text-sm font-light ${
                isDark ? "text-[#8F8A80]" : "text-[#6B7280]"
              } transition-colors duration-300 max-lg:text-xs`}
            >
              {xp.duration}
            </p>
            <div className="-mt-1 w-[500px] space-y-1">
              <a
                href={xp.link}
                target="_blank"
                className={`flex items-center ${
                  isDark ? "text-[#F9FAFB]" : "text-[#111827]"
                } text-[15px] font-medium transition-colors duration-300 hover:underline`}
              >
                {xp.role} at{" "}
                <Image
                  src={xp.logo}
                  alt=""
                  className="mx-2 rounded-sm"
                  width={24}
                  height={24}
                />
                {xp.name}
              </a>
              <p
                className={`${
                  isDark ? "text-[#A1A1AA]" : "text-[#6B7280]"
                } text-sm transition-colors duration-300`}
              >
                {xp.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
