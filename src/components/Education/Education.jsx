import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from '../resume/ResumeCard';
import Navbar from '../navbar/Navbar';
import { education } from '../../data/edu';
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
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {
education.map((edu,i)=>{
  return(
    <ResumeCard
    key={i}
    title={edu.title}
    subTitle={edu.subTitle}
    result={edu.result}
    des={edu.des}
  />
  )
})
          }
          
         
        
        </div>
      </div>
     

      
    </motion.div>

  );
}

export default Education