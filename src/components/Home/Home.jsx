import React from "react";
import Banner from "../banner/Banner";
import About from "../about/about";
import Mediacov from "../media/media-cov";
import Contact from "../contact/Contact";
import Exp from "../exprience/Exp";
import Features1 from "../features/showArticle";
import Book1 from "../Books/book1";
import Education from "../Education/Education";
import Certi from "../cerificates/Certi";
import Projectshow from "../projects/ProjectsShow";
import Awards from "../awards/Awards";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Exp/>
      <Education/>
      <Features1 />
      <Book1 />
      <Projectshow />
      <Certi/>
      <Mediacov />
      <Awards/>
      <Contact />
    </div>
  );
}

export default Home;
