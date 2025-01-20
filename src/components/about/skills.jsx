import React from "react";
import Title from "../layouts/Title"; // Ensure the correct path to the SkillCard component
import "./skills.css";
import { skills } from "../../data/skills"; // Ensure the correct path to the skills data
import SkillCard from "./skillCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
const Skills = () => {
  return (
    <section id="experience" className="mt-10">
      {" "}
      <Title title="" des="My Skills" />{" "}
      <div className="container experience__container">
        {" "}
        {skills.map((skillCategory, i) => (
          <SkillCard
            key={i}
            title={skillCategory.title}
            skill={skillCategory.skill}
          />
        ))}{" "}
        {/* End of frontend part */}{" "}
      </div>{" "}
    </section>
  );
};
export default Skills;
