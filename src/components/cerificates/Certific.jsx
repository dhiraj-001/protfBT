import React from "react";
import Title from "../layouts/Title";
import AwardsCard from "./AwardsCard";
import { certi } from "../../data/certi";
function Certific() {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="" des="certifications " />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {certi.map((val, i) => {
          return(
             <AwardsCard key={i}
            title={val.head}
            des={val.des}
            time={val.issue}
            link={val.link}
          />
          )
         
        })}
      </div>
    </section>
  );
}

export default Certific;
