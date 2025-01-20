import React from "react";
import Title from "../layouts/Title";
import ProjectsCardmain from "./ProjectsCardmain";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { mediaCov } from "../../data/Mediacov";
import img from "../../assets/images/article.png"
const MediacovMain = () => {
  return (
    <section
      id="media-coverage"
      className="w-full py-20 border-b-[1px] border-b-black flex flex-col items-end gap-9"
    >
      <div className="flex flex-col items-end gap-8">
        <div className="">
        <div className="flex justify-center items-center text-center">
          <Title title="" des="Media Coverages" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
{
  mediaCov.map((cov,i) =>{
    return(
      <ProjectsCardmain
      title={cov.headline}
      des={cov.des}
      src={cov.img ? cov.img : img}
      link={cov.link}
    />
    )
  })
}

         
        </div>
        </div>
      
      </div>
      
      
    </section>
  );
};

export default MediacovMain;
