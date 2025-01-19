import React from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Features from "./components/features/Features";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import About from "./components/about/about";
import Mediacov from "./components/media/Projects";
import Book from "./components/Books/Book";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
     
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About/>
        <Features /> 
       <Book />
       <Resume />
       {/* <Testimonial /> */}
       <Mediacov/>
        <Contact />
        <Footer />
        <FooterBottom /> 
      </div>
    </div>
  );
}

export default App;
