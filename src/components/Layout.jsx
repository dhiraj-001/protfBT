import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import FooterBottom from './footer/FooterBottom'

function Layout() {
  return (
    <>
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
     
     <Navbar />
     <div className="max-w-screen-xl mx-auto">
       <Outlet />
       <Footer />
       <FooterBottom/>
     </div>
   </div>
    </>
  )
}

export default Layout