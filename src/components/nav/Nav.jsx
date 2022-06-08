import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Wantedly from "../../assets/wantedly_icon.png";

const Nav = () => {
  return (
    <div className="sns">
      <a href="#home">
        <FaGithub />
      </a>
      <a href="#home">
        <FaTwitter />
      </a>
      <a href="#home">
        <img className="w-[25px]" src={Wantedly} alt="" />
      </a>
    </div>
  );
};

export default Nav;
