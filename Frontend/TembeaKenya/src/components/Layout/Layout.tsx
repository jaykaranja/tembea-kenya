import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar';


const Layout = () => {
  return (
    <div className='flex flex-col h-screen w-screen bg-black' id='home-bg'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout