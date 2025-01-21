import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Certi.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Title from "../layouts/Title";

import img1 from "../../assets/certi/1.png"
import img2 from "../../assets/certi/2.png"
import img3 from "../../assets/certi/3.png"
import img4 from "../../assets/certi/4.png"
import img5 from "../../assets/certi/5.png"
import img6 from "../../assets/certi/6.png"
import img7 from "../../assets/certi/7.png"
import img8 from "../../assets/certi/8.png"
import img9 from "../../assets/certi/9.png"


export default function Certi() {
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Certificates" />
      </div>

      <div className="flex items-end gap-9 flex-col">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper cursor-pointer"
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src=
            {img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} />
          </SwiperSlide>
          
        </Swiper>

        <NavLink to="../certifications">
          <button class="group/button cursor-pointer w-64 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
            <span class="text-lg">All Certificates</span>
            <FaArrowRight className="ml-5" />
            <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div class="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </NavLink>
      </div>
    </>
  );
}
