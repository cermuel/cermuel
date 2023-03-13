import React from "react";

const Navbar = () => {
  const logo = "</>";
  return (
    <div className="w-full bg-[#282c33] flex justify-between fixed max-w-[1024px] max-md:max-w-[92%] py-8">
      <div className="font-bold text-white max-sm:text-sm">{logo} CERMUEL</div>
      <div className="flex gap-4 max-sm:gap-1 max-sm:text-xs max-md:text-sm max-sm:hidden">
        <div className="text-[#ABB2BF] hover:text-white cursor-pointer">
          <span className="text-[#0EE6B7]">#</span>
          <a href="#home">home</a>
        </div>
        <div className="text-[#ABB2BF] hover:text-white cursor-pointer">
          <span className="text-[#0EE6B7]">#</span>
          <a href="#aboutMe">aboutMe</a>
        </div>{" "}
        <div className="text-[#ABB2BF] hover:text-white cursor-pointer">
          <span className="text-[#0EE6B7]">#</span>
          <a href="#skills">skills</a>
        </div>
        <div className="text-[#ABB2BF] hover:text-white cursor-pointer">
          <span className="text-[#0EE6B7]">#</span>
          <a href="#works">works</a>
        </div>
        <div className="text-[#ABB2BF] hover:text-white cursor-pointer">
          <span className="text-[#0EE6B7]">#</span>
          <a href="#contact">contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
