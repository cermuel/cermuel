import { experience } from "./data/xp.data";
import { BsArrowRight, BsFileEarmarkArrowDown } from "react-icons/bs";
import { links } from "./data/links.data";
import { HiSun } from "react-icons/hi";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { Project, project } from "./data/project.data";
import { IoClose } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { GoLink } from "react-icons/go";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";
  const [Project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.transition = "background-color 0.5s";
  }, [isDark]);

  useEffect(() => {
    if (Project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [Project]);

  return (
    <main
      className={`w-screen flex items-center flex-col justify-center pt-14 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-500`}
    >
      {Project && (
        <div className="w-screen h-dvh  p-2 sm:p-5 fixed top-0 left-0 bg-black/50 z-10">
          <div
            className={`w-full h-full rounded-2xl flex flex-col items-center relative ${
              isDark ? "bg-[#1A1A1A] text-white" : "bg-[#E5E5E5] text-black"
            } transition-colors duration-300`}
          >
            <button
              onClick={() => setProject(null)}
              className={`p-2 sm:text-xl md:text-2xl hover:scale-105 transition-all duration-300 ${
                isDark ? "bg-[#222]" : "bg-[#EEE]"
              } absolute sm:top-10 sm:right-10  rounded-full cursor-pointer top-5 right-5`}
            >
              <IoClose />
            </button>
            <div className="w-full overflow-y-scroll max-w-4xl p-5 py-12 text-center flex flex-col items-center gap-4">
              <h1 className="font-bold text-4xl flex items-center">
                {Project.name}{" "}
              </h1>
              <ul className="flex items-center justify-center gap-1">
                {Project.sector.map((p) => (
                  <li
                    className={`border ${
                      isDark ? "border-[#333]" : "border-[#CCC]"
                    } rounded-full text-sm font-medium py-0.5 px-2`}
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={Project.url}
                target="_blank"
                className={`p-2 px-4 hover:gap-4 transition-all duration-300 flex gap-2 items-center rounded-full !text-xs ${
                  isDark ? "bg-[#222] text-white" : "bg-white text-black"
                }`}
              >
                View Project <GoLink size={12} />
              </a>
              <img src={Project.image} className="w-full rounded-xl" alt="" />
              <p
                dangerouslySetInnerHTML={{
                  __html: Project.description.replace(/\n/g, "<br />"),
                }}
                className={`max-w-xl mt-2 text-left font-light ${
                  isDark ? "text-[#BBB]" : "text-[#444]"
                }`}
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed rounded-full flex sm:flex-col gap-2 items-center justify-center sm:top-1/2 sm:right-5 max-sm:left-1/2 max-sm:bottom-5 max-sm:-translate-x-1/2  sm:-translate-y-1/2 border-2 ${
          isDark ? "border-[#222] bg-[#111]" : "border-[#DDD] bg-[#EEE]"
        } p-2 transition-colors duration-300`}
      >
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              className={`rounded-full p-2 ${
                isDark ? "hover:bg-[#222]" : "hover:bg-[#DDD]"
              } transition-all duration-300`}
            >
              <Icon />
            </a>
          );
        })}
      </div>

      <section className="w-full mb-20 flex flex-col max-w-4xl  px-4 sm:px-8">
        <nav className="flex w-full justify-between items-center h-10">
          <div className="flex items-center gap-1">
            <img
              src="/icon.png"
              className="rounded-full aspect-square w-8 max-sm:w-10"
              alt=""
            />
            <h1 className="text-[15px] ">{`samuel ngene`}</h1>
          </div>
          <div
            className={`flex items-center ${
              isDark ? "bg-[#111]" : "bg-[#EEE]"
            } p-1 gap-1 rounded-full transition-colors duration-300`}
          >
            <button
              onClick={() => setTheme("light")}
              className={`cursor-pointer ${
                theme === "light" ? (isDark ? "bg-[#222]" : "bg-[#DDD]") : ""
              } p-1.5 rounded-full transition-all duration-300`}
            >
              <HiSun />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`cursor-pointer ${
                theme === "dark" ? (isDark ? "bg-[#222]" : "bg-[#DDD]") : ""
              } p-1.5 rounded-full transition-all duration-300`}
            >
              <MdDarkMode />
            </button>
          </div>
        </nav>

        <p
          className={`${
            isDark ? "text-[#CCC]" : "text-[#333]"
          } lg:text-lg font-medium mt-8 transition-colors duration-300`}
        >
          a bit more about myself
        </p>
        <ul
          className={`list-disc text-sm max-lg:text-xs ${
            isDark ? "text-[#888]" : "text-[#777]"
          } pl-4 space-y-1 my-4 transition-colors duration-300`}
          style={{ listStyleType: "disc", listStylePosition: "outside" }}
        >
          <li>abuja / nigeria</li>
          <li>
            i'm a <strong>software engineer</strong> with focus on{" "}
            <strong>frontend</strong>
          </li>
          <li>i enjoy making things look and feel just right.</li>
          <li>
            when i'm not coding, i'm probably <strong>playing games</strong>
          </li>
          <li>
            in a past life, i worked in{" "}
            <strong>it support and networking</strong>
          </li>
          <li>
            one of my quiet passions? <strong>football — playing.</strong>, not
            just watching
          </li>
        </ul>
        <a
          href="/files/SAMUEL NGENE resume.pdf"
          download
          className={`rounded-md border-2 ${
            isDark
              ? "border-[#EEE] bg-white text-black hover:bg-black hover:text-white hover:border-[#111]"
              : "border-[#111] bg-black text-white hover:bg-white hover:text-black hover:border-[#EEE]"
          } px-3 py-1.5 text-sm w-max flex items-center gap-2 cursor-pointer transition-all duration-500 hover:translate-x-1`}
        >
          Download Resume
          <BsFileEarmarkArrowDown />
        </a>
      </section>

      <section className="w-full  flex flex-col max-w-4xl py-8  px-4 sm:px-8">
        <h1
          className={`lg:text-lg ${
            isDark ? "text-[#CCC]" : "text-[#333]"
          } transition-colors duration-300`}
        >
          fun <strong>projects</strong> and <strong>works</strong> that created
          impact
        </h1>
        <ul className="md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4 grid my-5">
          {project.projects.map((project) => (
            <li
              className={`border p-4 rounded-[10px] col-span-1 cursor-pointer  flex flex-col gap-4 ${
                isDark ? "border-[#333]" : "border-[#DDD]"
              } transition-colors duration-300`}
            >
              <div>
                <h1 className="font-semibold uppercase sm:text-lg">
                  {project.name}
                </h1>
                <p
                  className={`text-sm max-sm:text-xs lowercase mt-2 ${
                    isDark ? "text-[#CCC]" : "text-[#333]"
                  } transition-colors duration-300`}
                >
                  {project.shortDescription}
                </p>
              </div>
              <button
                onClick={() => setProject(project)}
                className={`w-max mt-auto rounded-2xl flex items-center px-5 py-3.5  gap-2 hover:gap-4 transition-all duration-300 ${
                  isDark ? "bg-white text-black" : "bg-[#111] text-white"
                }`}
              >
                View Project
                <BiChevronRight />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="my-20 max-w-5xl px-4 sm:px-8">
        <h1
          className={`lg:text-lg ${
            isDark ? "text-[#CCC]" : "text-[#333]"
          } transition-colors duration-300`}
        >
          cool web <strong>animations</strong> i made
        </h1>
        <ul className="md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4 grid my-5">
          <video
            src="https://video.twimg.com/amplify_video/1943014976299401216/vid/avc1/1152x720/mOcp9eV7BDcyO-qV.mp4"
            className={`border col-span-1 rounded-lg object-cover ${
              isDark ? "border-[#333]" : "border-[#CCC]"
            }`}
            autoPlay
            muted
            loop
          ></video>
          <video
            src=" https://video.twimg.com/amplify_video/1944726662316195840/vid/avc1/1152x720/-ajAO6Dy481kpaiW.mp4
    "
            className={`border col-span-1 rounded-lg object-cover ${
              isDark ? "border-[#333]" : "border-[#CCC]"
            }`}
            autoPlay
            muted
            loop
          ></video>
        </ul>

        <a
          target="_blank"
          href="https://x.com/yrn_cermuel/status/1949256643591471442"
          className="text-[#737cde] font-semibold underline"
        >
          View the full thread
        </a>
      </section>
      <section className="w-full lg:min-h-screen flex flex-col max-w-4xl py-14 lg:py-8  px-4 sm:px-8">
        <h1
          className={`lg:text-lg ${
            isDark ? "text-[#CCC]" : "text-[#333]"
          } transition-colors duration-300`}
        >
          my dev journey, one{" "}
          <strong className="text-[#737cde]">{"<component />"}</strong> at a
          time!
        </h1>
        <ul className="lg:hidden space-y-5 mt-6 lg:mt-12">
          {experience.map((xp) => (
            <li key={xp.link} className={`flex items-start gap-5 lg:gap-10`}>
              <div className="aspect-square rounded-full w-10 lg:w-20">
                <img src={xp.logo} className="rounded-full" alt="" />
                <div className="w-full flex items-center justify-center relative ml-2 lg:ml-4">
                  <img
                    src="https://framerusercontent.com/images/PtvwleFSorGr3pDObFulHZkj8Rc.png?width=63&amp;height=86"
                    alt=""
                    className="w-1/2"
                  />
                </div>
              </div>
              <div className="mt-1.5 space-y-1">
                <div className="flex items-center gap-2">
                  <a
                    href={xp.link}
                    target="_blank"
                    className={`max-lg:text-[13px] ${
                      isDark ? "text-[#AAA]" : "text-[#555]"
                    } underline transition-colors duration-300`}
                  >
                    {xp.name}
                  </a>
                  <div
                    className={`${
                      isDark ? "bg-[#0F0F0F]" : "bg-[#F0F0F0]"
                    } p-1 px-2 rounded-sm lg:text-sm text-xs ${
                      xp.sector === "Health"
                        ? "text-[#737CDE]"
                        : xp.sector === "FinTech"
                        ? "text-[#FE5200]"
                        : isDark
                        ? "text-[#AAA] font-medium"
                        : "text-[#555] font-medium"
                    } transition-colors duration-300`}
                  >
                    {xp.sector}
                  </div>
                </div>
                <p
                  className={`font-medium text-lg max-lg:text-sm ${
                    isDark ? "text-[#CCC]" : "text-[#333]"
                  } transition-colors duration-300`}
                >
                  {xp.role}
                </p>
                <p
                  className={`text-sm max-lg:text-xs ${
                    isDark ? "text-[#CCC]" : "text-[#333]"
                  } transition-colors duration-300`}
                >
                  {xp.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="max-lg:hidden space-y-10 mt-6 lg:mt-12">
          {experience.map((xp) => (
            <li key={xp.link} className={`flex items-start gap-10`}>
              <p
                className={`text-sm max-lg:text-xs ${
                  isDark ? "text-[#99A]" : "text-[#665]"
                } w-48 font-light transition-colors duration-300`}
              >
                {xp.duration}
              </p>
              <div className="space-y-1 -mt-1 w-[500px]">
                <a
                  href={xp.link}
                  target="_blank"
                  className={`flex items-center ${
                    isDark ? "text-[#EEE]" : "text-[#111]"
                  } font-medium text-[15px] hover:underline transition-colors duration-300`}
                >
                  {xp.role} at{" "}
                  <img
                    src={xp.logo}
                    alt=""
                    className="w-6 h-6 rounded-sm mx-2"
                  />
                  {xp.name}
                </a>
                <p
                  className={`${
                    isDark ? "text-[#888]" : "text-[#777]"
                  } text-sm transition-colors duration-300`}
                >
                  {xp.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`w-full flex flex-col items-center justify-center gap-7  px-4 sm:px-8 max-sm:pt-10 py-20 border-t ${
          isDark ? "border-[#333]" : "border-[#CCC]"
        } transition-colors duration-300`}
      >
        <h1 className="font-bold lg:text-4xl text-2xl">Let's work together</h1>
        <p
          className={`text-center lg:text-lg font-medium ${
            isDark ? "text-[#CCC]" : "text-[#333]"
          } transition-colors duration-300`}
        >
          Have a project in mind? Let's create something amazing.
        </p>
        <a
          href="mailto:samuelobasi2005@gmail.com"
          className={`flex items-center border-2 ${
            isDark ? "border-[#222]" : "border-[#ddd]"
          } rounded-full py-2 px-4 gap-2 cursor-pointer hover:-translate-y-0.5 hover:scale-105 duration-500 transition-all`}
        >
          Get in touch <BsArrowRight />{" "}
        </a>
      </section>
    </main>
  );
}

export default App;
