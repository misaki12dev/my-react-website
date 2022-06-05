import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-zinc-900 mr-6">
        <span className="font-semibold text-xl tracking-tight">Misaki K</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black-200 border-teal-400 hover:text-teal-200 hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#experience"
            className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:text-white mr-4"
          >
            Experience
          </a>
          <a
            href="#portfolio"
            className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:text-white mr-4"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:text-teal-200"
          >
            Contact
          </a>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
