import React from "react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaHome,
  FaBookOpen,
  FaDeezer,
  FaGithub,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Wantedly from "../../assets/wantedly_icon.png";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full flex justify-between p-4 items-center z-10">
      <div className="text-2xl font-bold text-center">
        <h1>Portfolio</h1>
      </div>
      <nav className="flex">
        <div className="absolute right-6 md:hidden top-4 scale-150">
          <BiMenuAltRight
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>
        <ul className="hidden md:flex p-6 gap-8 pr-20">
          <li>
            <a href="#home">
              <FaHome className="mx-auto" />
              HOME
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FaBookOpen className="mx-auto" />
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#experience">
              <FaDeezer className="mx-auto" />
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#about">
              <AiOutlineUser className="mx-auto" />
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact">
              <HiOutlineMail className="mx-auto" />
              CONTACT
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-3 ">
          <a href="#home">
            <FaGithub />
          </a>
          <a href="#home">
            <img className="w-[25px]" src={Wantedly} alt="" />
          </a>
        </div>
        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Header;
