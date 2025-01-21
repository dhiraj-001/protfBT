import React from "react";
import Title from "../layouts/Title";
import Marquee from "react-fast-marquee";
import { books } from "../../data/books";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BookHome = () => {
  return (
    <section id="books" className="w-full flex gap-11 flex-col items-center py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-12">
        <Title title="Books" des="Published Books" />
      </div>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="mask-gradient-to-right"
      >
        {books.map((el, index) => (
          <div
            key={index}
            className="w-[300px] md:w-[400px] h-52 bg-opacity-20 border-2 bg-[#3665dc] border-[#91b0e68a] hover:bg-opacity-30 duration-300 rounded-lg shadow-shadowOne p-4 lgl:px-10 flex flex-col justify-start gap-5 lgl:gap-3 pt-9 mx-4"
          >
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <h3 className="text-xl text-designColor md:text-2xl font-semibold group-hover:text-white duration-300">
                  {el.title}
                </h3>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium text-[#1d1332] group-hover:text-gray-300 duration-300">
              {el.des}
            </p>
          </div>
        ))}
      </Marquee>
      <NavLink  to="../books">
           <button class="group/button cursor-pointer w-96 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
          <span class="text-lg">All Books</span>
          <FaArrowRight className="ml-5" />
          <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div class="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
        </NavLink>
    </section>
  );
};

export default BookHome;
