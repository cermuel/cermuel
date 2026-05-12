import type { SocialLink } from "../types/link";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

export const links: SocialLink[] = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/ngene-samuel-obasi/" },
  { icon: FaGithub, url: "https://github.com/cermuel" },
  {
    icon: RiTwitterXFill,
    url: "https://x.com/yrn_cermuel",
  },
  { icon: IoMdMail, url: "mailto:samuelobasi2005@gmail.com" },
  { icon: BsFileEarmarkArrowDown, url: "/files/Ngene Samuel Obasi Resume.pdf" },
];
