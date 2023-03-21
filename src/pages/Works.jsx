import React from "react";
import ProjectCard from "../components/ProjectCard";
import Rickipedia from "../assets/images/rickipedia.png";
import Portfolio from "../assets/images/portfolio.png";
import Soundseek from "../assets/images/soundseek.png";
import Netflix from "../assets/images/netflix.svg";
import { netflix, portfolio, rickipedia, soundseek } from "../utils/works";
import { RiShareBoxLine } from "react-icons/ri";
const Works = () => {
  return (
    <section
      id="works"
      className="w-full flex flex-wrap justify-center max-md:mt-4 mb-20"
    >
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
        image={Netflix}
        title="Netflix"
        text={netflix}
        url="https://expo.dev/@cermuel/netflix?serviceType=classic&distribution=expo-go"
      />
      <ProjectCard
        reverse={true}
        image={Rickipedia}
        title="Rickipedia"
        text={rickipedia}
        url="https://rickipedia-mu.vercel.app/"
      />
      <ProjectCard
        reverse={false}
        image={Soundseek}
        title="Soundseek"
        text={soundseek}
        url="https://soundseek-user.vercel.app/"
      />
      {/* <ProjectCard
        reverse={true}
        image={Portfolio}
        title="Portfolio"
        text={portfolio}
        url="https://cermuel.vercel.app/"
      /> */}
      <div className="w-full">
        <div className="flex w-[200px] font-medium text-white justify-center items-center gap-3 bg-[#4c4c4c] opacity-100 py-3 px-4 rounded-lg">
          <a
            href="https://github.com/cermuel"
            className="flex items-center gap-2"
          >
            Github for more
            <RiShareBoxLine className="text-lg font-extrabold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
