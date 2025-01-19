import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [" Full Stack Developer, Content Writer, Data Analyst, Cloud Enthusiast "],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal text-[#263d4c]">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-[#263d4c]">
          Hi, I'm <span className="text-designColor capitalize">Bhumika Tewari 
          </span>
        </h1>
        <h2 className="text-3xl font-bold text-slate-500">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        {/**/}
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
