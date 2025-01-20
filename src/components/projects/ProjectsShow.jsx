import React from 'react';
import Title from '../layouts/Title';
import projectOne from "../../assets/images/projects/projectOne.jpg";
import projectTwo from "../../assets/images/projects/projectTwo.jpg";
import projectThree from "../../assets/images/projects/projectThree.jpeg";
import ProjectsCard from './ProjectsCard';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Projectshow = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px]"
    >
      {/* <div className="flex justify-center items-center text-center">
        <Title
          title="Projects"
          des="My Projects"
        />
      </div>
     
       <div className="flex items-end flex-col gap-10">
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
       
      </div>
      <NavLink to="../projects">
      <button class="group/button cursor-pointer w-52 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
        <span class="text-lg">All Projects</span>
        <FaArrowRight className="ml-5" />
        <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div class="relative h-full w-10 bg-white/30"></div>
        </div>
      </button>
      </NavLink>
        </div> 
      */}
    </section>
  );
}

export default Projectshow;
