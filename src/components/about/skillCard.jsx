import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./skills.css";
import { motion } from "framer-motion";
import img1 from "../../assets/images/pngwing.com.png";
function SkillCard({ title, skill }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 1.5, type: "spring" } }}
      className="experience__frontend w-[90%] cursor-pointer rounded-md bg-slate-400"
      onClick={() => setOpen(!isOpen)}
    >
      <motion.h3
        className="text-[#ededed] font-titleFont font-bold text-xl m-4 pt-3"
        layout="position"
      >
        {title}
      </motion.h3>
      {/* {!isOpen && (
        <img
          src={img1}
          alt=""
          className="h-52 flex justify-center align-middle"
        />
      )} */}
      {isOpen && (
        <motion.div
          className="experience__content"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {skill.map((skil, i) => (
            <article className="experience__details " key={i}>
              <BsFillPatchCheckFill values={{color:"blue"}} className="experience__details-icon" />
              <div>
                <h4 className="text-[#321e39] font-bodyFont font-bold text-lg">{skil}</h4>
              </div>
            </article>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default SkillCard;
