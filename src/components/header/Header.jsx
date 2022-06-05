import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaHome,
  FaUserCircle,
  FaBookOpen,
  FaMailBulk,
  FaDeezer,
} from "react-icons/fa";
import Wantedly from "../../assets/wantedly_icon.png";

const Header = () => {
  return (
    <div className="header w-100 relative">
      <nav className="py-4  w-[50px]">
        <a href="#home">
          <FaHome />
        </a>
        <a href="">
          <FaBookOpen />
        </a>
        <a href="">
          <FaDeezer />
        </a>
        <a href="">
          <FaUserCircle />
        </a>
        <a href="" className="contact__icon">
          <FaMailBulk />
        </a>
      </nav>

      <div className="sns">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className="max-w-[24px]" src={Wantedly} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
