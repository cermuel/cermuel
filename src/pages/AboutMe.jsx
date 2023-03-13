import React from "react";
import { about } from "../utils/about";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="w-full max-md:mt-20 h-screen flex items-center justify-center"
    >
      <div>
        <div className="flex items-center gap-2">
          <div className="text-white font-semibold text-3xl">
            <span className="text-[#0EE6B7]">#</span>
            aboutMe
          </div>
          <div className="w-[170px] h-[2px] bg-pry-color"></div>
        </div>
        <br />
        <div className="text-[#ABB2BF] text-lg font-medium">
          Hello, I’m Samuel! I’m a self-taught front-end developer based in
          Abuja, Nigeria.
          <br /> <br /> I can develop responsive websites from scratch and raise
          them into modern user-friendly web experiences. Transforming my
          creativity and knowledge into a websites has been my passion for over
          3 years. <br /> <br /> I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
