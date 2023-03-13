import React from "react";
import ProjectCard from "../components/ProjectCard";
const Works = () => {
  return (
    <section id="works" className="w-full flex flex-wrap justify-center">
      <div className="flex items-center gap-2 w-full">
        <div className="text-white font-semibold text-3xl">
          <span className="text-[#0EE6B7]">#</span>
          works
        </div>
        <div className="w-[260px] h-[2px] bg-pry-color"></div>
      </div>
      <br />

      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
      <ProjectCard reverse={false} />
    </section>
  );
};

export default Works;
