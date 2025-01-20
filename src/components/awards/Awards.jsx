import React from "react";
import Title from "../layouts/Title";

import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AwardsCard from "./AwardsCard";

const Awards = () => {
  return (
    
    <section
      id="media-coverage"
      className="w-full py-20 border-b-[1px] border-b-black flex items-center flex-col gap-9"
    >
      <div className="flex flex-col gap-8">
        <div className="">
        <div className="flex justify-center items-center text-center">
          <Title title="" des="Awards And Honors" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
         <AwardsCard/>
         <AwardsCard/>
         <AwardsCard/>
        </div>
        </div>
       
      </div>
      <NavLink to="../projects">
          <button class="group/button cursor-pointer w-72 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
            <span class="text-lg">All Awards</span>
            <FaArrowRight className="ml-5" />
            <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div class="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </NavLink>
      
    </section>
  );
};

export default Awards;
