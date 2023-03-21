import React, { useRef, useState } from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const logo = "</>";
  const [active, setactive] = useState(false);
  const navRef = useRef();
  const logoRef = useRef();

  const showNav = () => {
    if (navRef.current && logoRef.current) {
      if (
        navRef.current.classList.contains("max-sm:hidden") &&
        !logoRef.current.classList.contains("rotate-180")
      ) {
        navRef.current.classList.remove("max-sm:hidden");
        setactive(true);
      } else {
        navRef.current.classList.add("max-sm:hidden");
        setactive(true);
      }
    }
  };

  return (
    <div className="w-full bg-[#282c33] flex justify-between items-center fixed max-w-[1024px] max-md:max-w-[92%] py-8">
      <div className="font-bold text-white max-sm:text-sm">{logo} CERMUEL</div>
      <div
        className="sm:hidden w-8 h-8 rounded-full bg-[grey] flex items-center justify-center animate-spin"
        ref={logoRef}
        onClick={() => showNav()}
      >
        <img src={Logo} alt="" className="w-6" />
      </div>
      <div
        className="flex gap-4 transition-all flex-col text-sm md:hidden max-sm:hidden w-[140px] absolute top-16 bg-[grey] right-[-50px]"
        ref={navRef}
        style={{
          transitionProperty: "all",
          transitionDuration: "1s",
          transitionDelay: "1s",
        }}
      >
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
