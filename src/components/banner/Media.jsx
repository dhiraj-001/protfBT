import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base text-[#263d4c]  uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="">
                <FaFacebookF />
              </a>
              
            </span>
            <a href=""></a>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <a target='#' href="https://www.linkedin.com/in/bhumika-tewari-21294027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
               <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            </a>
           
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
  )
}

export default Media