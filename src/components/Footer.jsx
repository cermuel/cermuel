import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full border-t-[1px] border-pry-color py-4 mt-20 mb-6">
      <div className="w-full flex justify-between">
        <div className="text-white max-sm:text-xs">
          <a href="mailto:samuelobasi2005@gmail.com">
            samuelobasi2005@gmail.com
          </a>
        </div>
        <div className="flex gap-4 max-md:gap-2">
          <FaGithub className="text-white text-xl hover:text-pry-color cursor-pointer" />
          <FaTwitter className="text-white text-xl hover:text-pry-color cursor-pointer" />
          <FaLinkedin className="text-white text-xl hover:text-pry-color cursor-pointer" />
        </div>
      </div>
      <div className="text-sm text-center font-light mt-4 w-full text-[#cccccc]">
        &copy; Copyright Cermuel {new Date().getFullYear}
      </div>
    </div>
  );
};

export default Footer;
