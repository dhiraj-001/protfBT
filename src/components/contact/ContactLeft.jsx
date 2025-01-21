import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import contactImg from "../../assets/images/contact/contactImg.png" 
const ContactLeft = () => {
  return (
    <div className="w-full mb-4 lgl:w-[35%] h-full bg-gradient-to-r from-[#a864b8] to-[#8558d2] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white font-bodyFont">Bhumika Tewari</h3>
        <p className="text-lg font-normal text-[#dec5ec]">
        Full Stack Developer, Content Writer, Data Analyst, Cloud Enthusiast 

        </p>
        <p className="text-base  tracking-wide text-[#1d0728]">
        As a multifaceted professional, I bring together technical expertise, creative vision, and a drive for excellence to deliver high-impact solutions with over 3 years of experience
        </p>
        <p className="text-base text-gray-300 flex items-center font-bodyFont gap-2">
          Phone: <span className="text-gray-100 font-titleFont">+91 8420399560</span>
        </p>
        <p className="text-base text-gray-300 flex items-center font-bodyFont gap-2">
          Email: <span className="text-gray-100 font-titleFont">bhumikatewariit@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base text-gray-100 uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a target="#" href="https://github.com/Bhumika2006-hue">
                      <span className="bannerIcon shadow-sm">
                        <FaGithub />
                      </span>
                    </a>
         <a
                     target="#"
                     href="https://www.instagram.com/im_stbhumika?igsh=cHJ3bGNkNWtheGI5"
                   >
                     <span className="bannerIcon shadow-none">
                       <FaInstagram />
                     </span>
                   </a>
          <a href="https://www.linkedin.com/in/bhumika-tewari-21294027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='#'>
              <span className="bannerIcon shadow-none">
            <FaLinkedinIn />
          </span>
          </a>
      
        </div>
      </div>
    </div>
  );
}

export default ContactLeft