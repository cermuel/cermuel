import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { works } from "../utils/works";
import { RiShareBoxLine } from "react-icons/ri";
const Works = () => {
  const [workCategories, setworkCategories] = useState([
    { name: "All", work: "" },
    { name: "Web App", work: "Web App" },
    { name: "Website", work: "Website" },
    { name: "Mobile App", work: "Mobile App" },
    { name: "ThreeJS", work: "ThreeJS" },
  ]);
  const [currentWorkCategory, setcurrentWorkCategory] = useState("");
  const filteredWorks = works.filter((work) => {
    return work.type.includes(currentWorkCategory);
  });
  const [sliced, setsliced] = useState(3);
  const boy = true;
  return (
    <section
      id="works"
      className="w-full flex flex-wrap justify-center max-md:mt-4 mb-20"
    >
      <div className="flex items-center gap-2 w-full">
        <div className="text-white font-semibold text-3xl">
          <span className="text-pry-color">#</span>
          works
        </div>
        <div className="w-[260px] h-[2px] bg-pry-color"></div>
      </div>
      <br />
      <div className="w-full flex my-4 mt-6">
        {workCategories.map((work) => {
          const activeCategory = work.work == currentWorkCategory;
          return (
            <button
              onClick={() => {
                setcurrentWorkCategory(work.work);
              }}
              className={`${
                activeCategory ? "border-b-pry-color" : "border-transparent"
              } w-[20%] max-sm:text-xs max-sm:mx-1 justify-center text-center md:text-lg border-b-4 text-white font-medium`}
            >
              {work.name}
            </button>
          );
        })}
      </div>
      <br />
      <h1 className="text-xl font-semibold text-pry-color sm:hidden">
        {currentWorkCategory == "" ? "All" : currentWorkCategory}
      </h1>
      <br />
      {filteredWorks.slice(0, sliced).map((work) => {
        return (
          <ProjectCard
            reverse={work.reverse}
            image={work.image}
            title={work.title}
            text={work.text}
            url={work.url}
          />
        );
      })}

      <div className="w-full flex items-center">
        {sliced == 3 ? (
          <button
            onClick={() => setsliced(Infinity)}
            className="flex w-[120px] max-sm:w-[120px] max-sm:text-xs max-sm:px-1 mr-auto font-medium text-white justify-center items-center gap-3 bg-[#4c4c4c] opacity-100 py-3 px-4 rounded-lg"
          >
            See more
          </button>
        ) : (
          <button
            onClick={() => setsliced(4)}
            className="flex w-[120px] max-sm:w-[120px] max-sm:text-xs max-sm:px-1 mr-auto font-medium text-white justify-center items-center gap-3 bg-[#4c4c4c] opacity-100 py-3 px-4 rounded-lg"
          >
            See Less
          </button>
        )}
        <button className="flex w-[200px] max-sm:w-[120px] max-sm:text-xs max-sm:px-1 ml-auto font-medium text-white justify-center items-center gap-3 bg-[#4c4c4c] opacity-100 py-3 px-4 rounded-lg">
          <a
            href="https://github.com/cermuel"
            className="flex items-center gap-2"
          >
            Github for more
            <RiShareBoxLine className="sm:text-lg font-extrabold" />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Works;
