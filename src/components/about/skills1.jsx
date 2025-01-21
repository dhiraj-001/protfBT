import React from "react";
import styled, { keyframes, css } from "styled-components";
import "./skills1.css";
import html from "../../assets/imgsskill/html.png";
import css1 from "../../assets/imgsskill/css.png";
import js from "../../assets/imgsskill/js.png";
import cpp from "../../assets/imgsskill/cpp.png";
import c from "../../assets/imgsskill/c.png";
import angular from "../../assets/imgsskill/angular.png";
import aws from "../../assets/imgsskill/aws.png";
import mongodb from "../../assets/imgsskill/mongodb.png";
import sql from "../../assets/imgsskill/sql.png";
import python from "../../assets/imgsskill/python.png";
import java from "../../assets/imgsskill/java.png";
import jquery from "../../assets/imgsskill/jquery.png";
import bootstrap from "../../assets/imgsskill/bootstrap.png";
import docker from "../../assets/imgsskill/docker.png";
import postman from "../../assets/imgsskill/postman.png";
import Title from "../layouts/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Skill1() {
  const row1 = [html, css1, js, cpp, c, angular, bootstrap];

  const row2 = [aws, mongodb, sql, python, java, jquery, docker, postman];

  return (
    <div className="flex items-center overflow-hidden mdl:items-end gap-14 flex-col" id="skills">
      <AppContainer className=" lg:flex w-[100vw] mdl:w-auto mt-24">
        <Wrapper className=" overflow-hidden">
          <Title title="" des="My Skills" />

          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>
      <NavLink to="../skills">
      <button class=" group/button cursor-pointer w-[90vw] md:w-52 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#9478ebba] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#263d4c] font-titleFont transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
        <span class="text-lg">All Skills</span>
        <FaArrowRight className="ml-5" />
        <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div class="relative h-full w-10 bg-white/30"></div>
        </div>
      </button>
      </NavLink>
      
    </div>
  );
}

export default Skill1;

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
  width: 1200px;
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
  white-space: nowrap;
  width: 100%;
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
