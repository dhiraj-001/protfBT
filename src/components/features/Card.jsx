import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon,link } }) => {
  return (
    <div className="w-full px-12 h-96 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-[#ced6e8] to-[#9684ce] group transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[#263d4c]">
              {title}
            </h2>
            <p className="base text-slate-600">{des}</p>
            <a target='#' href={link}>
              <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
