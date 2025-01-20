import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Exp.css";

// import required modules
import { EffectCards } from "swiper/modules";
import ResumeCard from "./ResumeCard";
import Title from "../layouts/Title";
import { FaArrowRight } from "react-icons/fa";

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
          className="mySwiper mt-20"
        >
          <SwiperSlide className="bg-b1">
            {" "}
            <ResumeCard
              title="Gym Instructor"
              subTitle="Rainbow Gym Center (2015 - 2020)"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
          </SwiperSlide>
          <SwiperSlide className="bg-b2">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-b3">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-b4">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-b5">Slide 5</SwiperSlide>
        </Swiper>
        <button class="group/button cursor-pointer w-72 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
          <span class="text-lg">All Expriences</span>
          <FaArrowRight className="ml-5" />
          <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div class="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
