import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from '../resume/ResumeCard';
import Navbar from '../navbar/Navbar';

const Education = () => {
  const firstTextVariant = {
    initial: {
      opacity : 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  return (


    <motion.div 
    id='education'
    variants={firstTextVariant}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl text-[#263d4c] font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
     

      
    </motion.div>

  );
}

export default Education