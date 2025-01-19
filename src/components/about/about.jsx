import React from "react";
import Title from "../layouts/Title";
import Skills from "./skills";

function About() {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="About" des="My Introduction" />
      
        <p className="text-base font-bodyFont leading-6 tracking-wide text-[#263d4c]">
          As a multifaceted professional, I bring together technical expertise,
          creative vision, and a drive for excellence to deliver high-impact
          solutions. With over 3 years of experience in content creation,
          software development, and research, I've authored three books,
          developed content for diverse audiences, and honed skills in
          full-stack development (MERN stack), cloud computing (AWS, GCP and
          Azure), data analysis (SQL, Power BI and Tableau) and cybersecurity.
          With a strong academic foundation in Information Technology (BTech
          IT), I'm committed to lifelong learning, driving innovation, and
          delivering impactful results that make a meaningful difference.
        </p>
        <Skills></Skills>
    
    </section>
  );
}

export default About;
