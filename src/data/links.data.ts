import { IconType } from "react-icons";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

export interface Link {
  icon: IconType;
  url: string;
}

export const links: Link[] = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/ngene-samuel-obasi/" },
  { icon: FaGithub, url: "https://github.com/cermuel" },
  {
    icon: RiTwitterXFill,
    url: "https://x.com/yrn_cermuel",
  },
  { icon: IoMdMail, url: "mailto:samuelobasi2005@gmail.com" },
  { icon: BsFileEarmarkArrowDown, url: "/files/Ngene Samuel Obasi Resume.pdf" },
];
