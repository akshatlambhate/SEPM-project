import React from 'react'
import logo from './logo.png'
import heading from './heading.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import add from './add.json'
import Lottie from 'lottie-react'
// import { Outlet, Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className=' flex justify-around shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='w-28'><img src={logo}></img></div>
      <div className='w-44 flex justify-center items-center'><img src={heading}></img></div>
      <div className='flex gap-20 h-20 text-white items-center justify-center text-xl cursor-pointer '> 
        <div className='hover:text-[#cdb4db]'>Home</div>
        <div className='hover:text-[#ffc8dd]'>Event</div>
        <div className='hover:text-[#bde0fe]'>List of Event</div>
        <div className='hover:text-[#ffafcc]'>About</div>
      </div>
      {/* <div className='text-3xl flex h-20 font-extrabold items-center text-white hover:text-[#a2d2ff]'> <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon></div> */}
      <div className='w-16 flex justify-center items-center cursor-pointer'><Lottie animationData={add}></Lottie></div>
    </div>
  )
}

export default Navbar
