import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex align-middle flex-row group bg-[#955ee399] hover:bg-gradient-to-b hover:from-[#751bb94f] hover:gray-900 transition-colors duration-1000">
      <div className="w-[50%] mr-6 h-[90%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col justify-start gap-6 relative">
       
          <div>
          <h3 className="text-base uppercase hover:text-[#fff] text-slate-800 font-bold">
              {title}
            </h3>
            <p className="text-sm tracking-wide mt-3 text-[#000] hover:text-slate-700 duration-300">
            {des}
          </p>
          </div>
          
          
           
            <div className="flex gap-2 absolute right-4 bottom-3">
              
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </span>
           
          </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
