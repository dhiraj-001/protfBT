import React from "react";
import Title from "../layouts/Title";
import { HiArrowRight } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Features1 = ({ icon }) => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-end flex-col gap-14">
        
        <div className="">
        <Title title="Features" des="Featured articles" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
            <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-[#ced6e8] to-[#9684ce] group transition-colors duration-100 group">
              <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-8 flex flex-col justify-between">
                    {icon ? (
                      <span className="text-5xl text-designColor">{icon}</span>
                    ) : (
                      <>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[#263d4c]">
                      abc
                    </h2>
                    <p className="base text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error voluptatem et eveniet voluptatibus vitae dolor
                      obcaecati facilis? Eius amet illum commodi quia aperiam!
                    </p>
                    <span className="text-2xl text-designColor">
                      <HiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-[#ced6e8] to-[#9684ce] group transition-colors duration-100 group">
              <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-8 flex flex-col justify-between">
                    {false == true ? (
                      <span className="text-5xl text-designColor">xyz</span>
                    ) : (
                      <>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[#263d4c]">
                      abc
                    </h2>
                    <p className="base text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error voluptatem et eveniet voluptatibus vitae dolor
                      obcaecati facilis? Eius amet illum commodi quia aperiam!
                    </p>
                    <span className="text-2xl text-designColor">
                      <HiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-[#ced6e8] to-[#9684ce] group transition-colors duration-100 group">
              <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-8 flex flex-col justify-between">
                    {icon ? (
                      <span className="text-5xl text-designColor">{icon}</span>
                    ) : (
                      <>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[#263d4c]">
                      abc
                    </h2>
                    <p className="base text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error voluptatem et eveniet voluptatibus vitae dolor
                      obcaecati facilis? Eius amet illum commodi quia aperiam!
                    </p>
                    <span className="text-2xl text-designColor">
                      <HiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavLink
        to="features"
        >
             <button class="group/button cursor-pointer w-72 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                      <span class="text-lg">All Articles</span>
                      <FaArrowRight className="ml-5" />
                      <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                        <div class="relative h-full w-10 bg-white/30"></div>
                      </div>
                    </button>
        </NavLink>
         
      </div>
    </section>
  );
};

export default Features1;
