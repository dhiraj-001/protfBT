import React from 'react';
import bannerImg from "../../assets/images/bannerImg.png"

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="Banner"
      />
      <div className="absolute bottom-0 w-[300px] h-[280px] lgl:w-[400px] lgl:h-[400px] bg-gradient-to-r from-[#ced6e8] to-[#9684ce] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
