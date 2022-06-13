import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaBookOpen, FaDeezer } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed text-white inset-0 justify-center left-1/4 p-8 backdrop-blur-lg bg-black/40 md:hidden gap-8"
          : "hidden"
      }
    >
      <IoMdClose onClick={showMenu} className="cursor-pointer scale-150" />

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
  );
};

export default MenuItems;
