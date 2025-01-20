import React from "react";

const ResumeCard = ({ title, subTitle, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-full bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 ">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl text-[#d1b7de] md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-[#2dceff] group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-[#1d1332] group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
