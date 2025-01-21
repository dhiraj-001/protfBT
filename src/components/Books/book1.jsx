import React from "react";
import styled, { keyframes, css } from "styled-components";

import Title from "../layouts/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { books } from "../../data/books";
function Book1() {
  return (
    <div className="flex items-end gap-14 flex-col" id="books">
      <AppContainer className=" lg:flex mdl:w-auto mt-24">
        <Wrapper className=" overflow-hidden">
          <Title title="" des="My Books" />

          <Marquee>
            <MarqueeGroup>
              {books.map((el, index) => (
                <div
                  key={index}
                  className="w-[400px] h-52 bg-opacity-20 border-2 bg-[#3665dc] border-[#91b0e68a] hover:bg-opacity-30 duration-300 rounded-lg shadow-shadowOne p-4 lgl:px-10 flex flex-col justify-start gap-5 lgl:gap-3 pt-9"
                >
                  <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                    <div>
                      <h3 className="text-xl text-designColor md:text-2xl font-semibold group-hover:text-white duration-300">
                        {el.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm  md:text-base font-medium text-[#1d1332] group-hover:text-gray-300 duration-300">
                    {el.des}
                  </p>
                </div>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
      <NavLink to="../books">
        <button class="group/button cursor-pointer w-52 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
          <span class="text-lg">All Books</span>
          <FaArrowRight className="ml-5" />
          <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div class="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
      </NavLink>
    </div>
  );
}

export default Book1;

const AppContainer = styled.div`
  color: #000000;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;

  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
  cursor: pointer;
  animation: ${scrollX} 25s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
