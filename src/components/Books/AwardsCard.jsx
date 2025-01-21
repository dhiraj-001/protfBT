import React from "react";
import "./Awards1.css"; 
import { FaGlobe, FaLink } from "react-icons/fa";

const AwardsCard = ({img,title, des,link }) => {
  return (
    <div
      id="curve"
      className="card bg-contain bg-[#d0d0fa]"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="footer">
        <a target="#" href={link}>
        <div className="connections cursor-pointer bg-transparent">
          <div className="connection facebook bg-transparent">
            <FaLink className="icon text-[#c685f2]"/>
          </div>
        </div>
        </a>
        <div className="info">
          <div className="name font-bodyFont text-lg text-white">{title}</div>
          <div className="job text-bold font-titleFont text-white">{des}</div>
        </div>
      </div>
      <div className="card-blur"></div>
    </div>
  );
};

export default AwardsCard;
