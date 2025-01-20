import React from "react";
import { motion } from "framer-motion";
import ResumeCard2 from "./ResumeCard2";
import { exp1, exp2 } from "../../data/exp2";
import { exp3 } from "../../data/exp3";
import Title from "../layouts/Title";
const Experience = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My work Expriences" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-4xl text-[#263d4c] font-bold">
              Writing Experience
            </h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {exp1.map((exp, i) => {
              return (
                <ResumeCard2
                  title={exp.title}
                  subTitle={exp.subTitle}
                  result={exp.result}
                  des={exp.des}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-4xl text-[#263d4c] font-bold">
              Job Experience
            </h2>
          </div>
          <div className="mt-14 w-full h-[980px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {exp2.map((exp, i) => {
              return (
                <ResumeCard2
                  title={exp.title}
                  subTitle={exp.subTitle}
                  result={exp.result}
                  des={exp.des}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <div className="py-6 mt-20 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl text-[#263d4c] font-bold">Extracurricular Activites</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {exp3.map((exp, i) => {
            return (
              <ResumeCard2
                title={exp.title}
                subTitle={exp.subTitle}
                result={exp.result}
                des={exp.des}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
