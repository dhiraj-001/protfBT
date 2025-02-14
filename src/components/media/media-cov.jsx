import React from "react";
import Title from "../layouts/Title";
import projectOne from "../../assets/images/projects/projectOne.jpg";
import projectTwo from "../../assets/images/projects/projectTwo.jpg";
import projectThree from "../../assets/images/projects/projectThree.jpeg";
import ProjectsCard from "./ProjectsCard";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { mediaCov } from "../../data/Mediacov";
const Mediacov = () => {
  const limit = mediaCov.slice(0,3)
  return (
    <section
      id="media-coverage"
      className="w-full py-20 border-b-[1px] border-b-black flex flex-col xl:items-end gap-9"
    >
      <div className="flex flex-col items-end gap-8">
        <div className="">
        <div className="flex justify-center items-center text-center">
          <Title title="" des="Media Coverages" />
        </div>
        <div className="grid grid-cols-1 mdl:grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-14">
{
  limit.map((cov,i) =>{
    return(
      <ProjectsCard
      key={i}
      title={cov.headline}
      des={cov.des}
      src={cov.img}
      link={cov.link}
    />
    )
  })
}

         
        </div>
        </div>
        <NavLink to="../media-coverage">
          <button class="group/button cursor-pointer w-72 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
            <span class="text-lg">All Media Coverages</span>
            <FaArrowRight className="ml-5" />
            <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div class="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </NavLink>
      </div>
      
      
    </section>
  );
};

export default Mediacov;
