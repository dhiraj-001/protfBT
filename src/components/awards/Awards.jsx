import React from "react";
import Title from "../layouts/Title";

import AwardsCard from "./AwardsCard";
const Awards = () => {
  return (
    <section
      id="media-coverage"
      className="w-full py-20 border-b-[1px] border-b-black flex flex-col items-end gap-9"
    >
      <div className="flex flex-col items-end gap-8">
        <div className="">
        <div className="flex justify-center items-center text-center">
          <Title title="" des="Achivements" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
<AwardsCard/>
<AwardsCard/>
<AwardsCard/>

         
        </div>
        </div>
      
      </div>
      
      
    </section>
  );
};

export default Awards;
