import React from "react";
import Title from "../layouts/Title"
import Card from "./Card";
import { articles } from "../../data/articles";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  const limit = articles.slice(0,3)
  return (
    <section id="features" className="w-full py-20 border-b-[1px] flex flex-col items-end gap-9 border-b-black">
      <div>
         <Title title="Features" des="Featured articles" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {limit.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      </div>
     
        <NavLink to="../features">
            <button class="group/button cursor-pointer w-52 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
              <span class="text-lg">All Articles</span>
              <FaArrowRight className="ml-5" />
              <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div class="relative h-full w-10 bg-white/30"></div>
              </div>
            </button>
            </NavLink>
    </section>
  );
};

export default Features;
