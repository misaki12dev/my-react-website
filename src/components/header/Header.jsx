import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaHome,
  FaBookOpen,
  FaDeezer,
} from "react-icons/fa";

import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Wantedly from "../../assets/wantedly_icon.png";

import { useState } from "react";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="flex flex-col fixed right-10 top-10 max-w-max rounded-full py-5 px-3">
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FaBookOpen />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaDeezer />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <HiOutlineMail />
      </a>
    </nav>
  );
};

export default Header;
