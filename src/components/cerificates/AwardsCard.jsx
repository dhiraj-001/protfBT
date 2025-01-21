import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

function AwardsCard({title, des, link , time}) {
  return (
    <div className="bg-[#d5a3e88b] transition duration-300 ease-in-out transform rounded-2xl p-6 flex flex-col items-start gap-2 md:w-96 justify-around w-full h-72 border-[#ffffff00] border-[1px] shadow-[#3673d6ac] shadow-2xl hover:bg-[#3f7ef2a6]">
      <div className="title text-2xl font-titleFont font-bold text-[#050c94]">
        {title}
      </div>
      <div className="text-[#091c75c8] font-titleFont">{time}</div>
      <div className="description text-[#000000] mb-5 font-titleFont">
        {des}
      </div>
      <a
        href={link}
        className="border-black cursor-pointer flex flex-row align-middle items-center gap-2 text-lg w-max px-5 py-2 rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 bg-[#d8ea65ad]  hover:bg-[#7fed54ad] shadow-sm  shadow-[#2a282888]"
    
      >
        <span className="text-[#430453] hidden sm:block">
          View Certificate{" "}
        </span>
        <BsArrowBarRight className="text-[#430453]" />
      </a>
    </div>
  );
}

export default AwardsCard;
