import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Exp.css";
import {exp} from "../../data/exp"
// import required modules
import { EffectCards } from "swiper/modules";
import ResumeCard from "./ResumeCard";
import Title from "../layouts/Title";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Exp() {
  return (
    <div className="py-20 border-b-[1px] border-b-black" id="experience">
      <div className="mt-11">
        <Title title="" des="Work Exprience" />
      </div>
      <div className="flex flex-col items-end gap-16">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper mt-20 w-[300px] mdl:w-[600px] lg-[900px]"
        >
          {
            exp.map((exp,i)=>{
              return(
                <SwiperSlide className="bg-b1" >
                {" "}
                <ResumeCard
                  title={exp.title}
                  subTitle={exp.subTitle}
                  des={exp.des}
                />
                 </SwiperSlide>
              )
            })
          }
         
         
         
        </Swiper>
        <NavLink to="../experience">
           <button class="group/button cursor-pointer w-72 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
          <span class="text-lg">All Expriences</span>
          <FaArrowRight className="ml-5" />
          <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div class="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
        </NavLink>
       
      </div>
    </div>
  );
}
