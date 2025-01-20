import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base text-[#263d4c]  uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a target="#" href="https://github.com/Bhumika2006-hue">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            target="#"
            href="https://www.instagram.com/im_stbhumika?igsh=cHJ3bGNkNWtheGI5"
          >
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a
            target="#"
            href="https://www.linkedin.com/in/bhumika-tewari-21294027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
