import React from "react";
import {
  FaHome,
  FaBookOpen,
  FaDeezer,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="flex fixed w-full justify-start z-10">
        <ul class="flex">
          <li className="">
            <a
              href="#home"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              <FaHome />
              HOME
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setActiveNav("#portfolio")}
              className={activeNav === "#portfolio" ? "active" : ""}
            >
              <FaBookOpen />
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setActiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
            >
              <span className="mx-auto">
                <FaDeezer />
              </span>
              EXPEREINCES
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              <AiOutlineUser />
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              <HiOutlineMail />
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* <div className="sns ">
        <ul className="flex w-full jusitfy-end">
          <li><a href="#home"><FaGithub/></a></li>
          <li><a href="#home"><FaTwitter/></a></li>
          <li><a href="#home"><img src={Wantedly} alt="" /></a></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
