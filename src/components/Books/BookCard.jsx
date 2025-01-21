import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const BookCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 py-10 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col group bg-[#ba8bd299] hover:bg-gradient-to-b hover:from-[#b16dd499] hover:gray-900 transition-colors duration-1000">
      
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl uppercase text-slate-700 font-bold">
              {title}
            </h3>
            <div className="flex gap-2">
              <a target='#' href={src}>
              <span className="text-lg ml-5 w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </span></a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-slate-600 hover:text-slate-700 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
