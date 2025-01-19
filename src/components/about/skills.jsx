import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Title from "../layouts/Title";
import "./skills.css";
import { skills } from "../../data/skills"; // Ensure the correct path to the skills data
import SkillCard from "./skillCard";
import { motion } from "framer-motion";

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <motion.section id="experience"
    
    className="mt-10">
      <Title title="" des="My Skills" />

      <div className="container experience__container">
        {skills
          .slice(0, showAll ? skills.length : 2)
          .map((skillCategory, i) => (
            <SkillCard
              key={i}
              title={skillCategory.title}
              skill={skillCategory.skill}
            />
          ))}
        {/* End of frontend part */}
      </div>

      <button onClick={toggleShowAll} className="see-more-button">
        {showAll ? "See Less" : "All Skills"}
      </button>
    </motion.section>
  );
};

export default Skills;
