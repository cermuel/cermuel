import React from "react";
import skillsImage from "../assets/images/skills.svg";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full pt-60 h-screen  flex-col items-center justify-center"
    >
      <div className="w-full">
        <div className="flex items-center gap-2">
          <div className="text-white font-semibold text-3xl">
            <span className="text-[#0EE6B7]">#</span>
            skills
          </div>
          <div className="w-[260px] h-[2px] bg-pry-color"></div>
        </div>
        <br />
      </div>
      <div className="w-full flex">
        <div className="w-[50%] max-md:hidden">
          <img src={skillsImage} />
        </div>
        <div className="w-[50%] max-md:w-full relative">
          <div className="w-[180px] max-sm:w-[150px] border-2 border-pry-color py-1 flex-col flex">
            <div className="border-b-2 border-pry-color px-2 pb-1 text-[#dddddd] font-medium text-lg">
              Languages
            </div>
            <div className="text-[#bbbbbb] text-sm pt-1 px-2 tracking-widest [word-spacing:3px]">
              TypeScript, CSS, Javascript
            </div>
          </div>
          <div className="w-[180px] max-sm:w-[150px] border-2 border-pry-color py-1 flex-col flex absolute top-[180px] left-[200px]">
            <div className="border-b-2 border-pry-color px-2 pb-1 text-[#dddddd] font-medium text-lg">
              Others
            </div>
            <div className="text-[#bbbbbb] text-sm pt-1 px-2 tracking-widest [word-spacing:3px]">
              HTML, Git, Redux, REST
            </div>
          </div>
          <div className="w-[180px] max-sm:w-[150px] border-2 border-pry-color py-1 flex-col absolute flex top-[120px]">
            <div className="border-b-2 border-pry-color px-2 pb-1 text-[#dddddd] font-medium text-lg">
              Tools
            </div>
            <div className="text-[#bbbbbb] text-sm pt-1 px-2 tracking-widest [word-spacing:3px]">
              VSCode, Figma, ChatGPT, Stack Overflow, Google, Github Desktop
            </div>
          </div>
          <div className="w-[180px] max-sm:w-[150px] border-2 border-pry-color py-1 flex-col flex top-10 left-[200px] absolute">
            <div className="border-b-2 border-pry-color px-2 pb-1 text-[#dddddd] font-medium text-lg">
              Frameworks
            </div>
            <div className="text-[#bbbbbb] text-sm pt-1 px-2 tracking-widest [word-spacing:3px]">
              React, React Native, TailwindCSS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
