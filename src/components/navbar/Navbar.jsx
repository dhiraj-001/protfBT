import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {

  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import { navLinksdata } from "../../constants/index";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-transparent xl:bg-bodyColor mx-auto flex xl:justify-around justify-end items-center font-titleFont xl:border-b-[1px] xl:border-b-gray-600">
      <div>
        <ul className="hidden xl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-navtxt tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <NavLink
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl xl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        <div
          className={`w-[80%] h-screen overflow-scroll absolute top-0 left-[-20px] bg-gray-900 p-4 scrollbar-hide transition-transform duration-500 ease-in-out ${
            showMenu ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <span className="w-32 text-bodyColor font-bold text-lg">
                Bhumika Tewari
              </span>
              <p className="text-sm text-gray-400 mt-2">
                As a multifaceted professional, I bring together technical
                expertise, creative vision, and a drive for excellence to
                deliver high-impact solutions.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <NavLink
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <a target="#" href="https://github.com/Bhumika2006-hue">
                  <span className="bannerIcon shadow-sm">
                    <FaGithub />
                  </span>
                </a>
                <a
                  target="#"
                  href="https://www.instagram.com/im_stbhumika?igsh=cHJ3bGNkNWtheGI5"
                >
                  <span className="bannerIcon shadow-sm">
                    <FaInstagram />
                  </span>
                </a>
                <a
                  target="#"
                  href="https://www.linkedin.com/in/bhumika-tewari-21294027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <span className="bannerIcon shadow-lg">
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
