import React from "react";
import ProjectCard from "../components/ProjectCard";
import Rickipedia from "../assets/images/rickipedia.png";
import Portfolio from "../assets/images/portfolio.png";
import Soundseek from "../assets/images/soundseek.png";
import { portfolio, rickipedia, soundseek } from "../utils/works";
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

      <ProjectCard
        reverse={false}
        image={Rickipedia}
        title="Rickipedia"
        text={rickipedia}
      />
      <ProjectCard
        reverse={true}
        image={Soundseek}
        title="Soundseek"
        text={soundseek}
      />
      <ProjectCard
        reverse={false}
        image={Portfolio}
        title="Portfolio"
        text={portfolio}
      />
    </section>
  );
};

export default Works;
