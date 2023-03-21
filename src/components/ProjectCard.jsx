import parse from "html-react-parser";
import React, { useState } from "react";

const ProjectCard = ({ reverse, image, title, text, url }) => {
  const [showMore, setshowMore] = useState(false);
  const arrow = () => {
    return (
      <svg
        width="80"
        height="15"
        viewBox="0 0 108 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M107.061 13.0607C107.646 12.4749 107.646 11.5251 107.061 10.9393L97.5147 1.3934C96.9289 0.807611 95.9792 0.807611 95.3934 1.3934C94.8076 1.97918 94.8076 2.92893 95.3934 3.51472L103.879 12L95.3934 20.4853C94.8076 21.0711 94.8076 22.0208 95.3934 22.6066C95.9792 23.1924 96.9289 23.1924 97.5147 22.6066L107.061 13.0607ZM106 10.5L7.76053e-06 10.5L7.49826e-06 13.5L106 13.5L106 10.5Z"
          fill="#0EE6B7"
        />
      </svg>
    );
  };
  return (
    <div
      className={`w-full flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } max-md:flex-wrap my-6`}
    >
      <div className="w-full md:w-[50%] md:p-4 p-2">
        <div className="w-full h-[270px] border-pry-color border-[1px] rounded-md">
          <img src={image} alt={title} className="w-full h-full rounded-lg" />
        </div>
      </div>
      <div className="w-full md:w-[50%] md:p-4 p-2 flex flex-col justify-center md:gap-6 gap-4">
        <div className="text-2xl max-md:text-xl font-white font-bold text-white">
          {title}
        </div>
        <div className="text-[#cccccc]">
          {showMore ? parse(text) : parse(text.substring(0, 300))}
          <span
            className="text-sm text-pry-color pl-4 cursor-pointer"
            onClick={() => setshowMore(!showMore)}
          >
            Show {showMore ? "Less" : "More"}
          </span>
        </div>

        <a
          className="cursor-pointer flex gap-2 items-center text-white text-lg"
          href={url}
        >
          View Project {arrow()}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
