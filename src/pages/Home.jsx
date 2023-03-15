import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full max-md:mt-20 h-screen flex flex-wrap items-center"
    >
      <div className="flex flex-col gap-4 w-[50%] max-md:w-full">
        <div className="text-pry-color text-6xl max-md:text-4xl">Hello!</div>
        <div className="font-bold text-6xl text-white max-md:text-4xl">
          I'm Samuel Ngene,
        </div>
        <div className="outline-title text-5xl font-bold max-md:text-3xl">
          frontend developer
        </div>
      </div>
      <div className="w-[50%] max-md:w-full px-8 max-md:px-2">
        <pre className="opacity-80 bg-[#171A1B] py-5 px-8 border-[1px] border-[#4A4A4A] w-full">
          <span className="text-[#7000FF]">{".aboutMe"}</span>
          <span className="text-white">{"{"}</span>
          <br />
          <br />
          <span className="text-pry-color"> {"   Profession:"}</span>
          <span className="text-white"> Developer</span>
          <br />
          <span className="text-pry-color"> {"   Languages:"}</span>
          <span className="text-white"> JS, CSS, TS</span>
          <br />
          <br />
          <span className="text-white">{"}"}</span>
          <br />
          <br />
          <span className="text-[#7000FF]">{".education"}</span>
          <span className="text-white">{"{"}</span>
          <br />
          <br />
          <span className="text-pry-color"> {"   javaScript:"}</span>
          <span className="text-white"> YouTubeVideos</span>
          <br />
          <span className="text-pry-color"> {"   css:"}</span>
          <span className="text-white"> FreeCodeCamp</span>
          <br />
          <br />
          <span className="text-white">{"}"}</span>
        </pre>
      </div>
    </section>
  );
};

export default Home;
