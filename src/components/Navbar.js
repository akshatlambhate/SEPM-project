import React from 'react'
import logo from './logo.png'
import heading from './heading.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import add from './add.json'
import Lottie from 'lottie-react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className=' flex justify-around shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='w-28'><img src={logo}></img></div>
      <div className='w-44 flex justify-center items-center'><img src={heading}></img></div>
      <div className='flex gap-20 h-20 text-white items-center justify-center text-xl cursor-pointer '> 
        <Link className='hover:text-[#cdb4db]' to='/'>Home</Link>
        <Link className='hover:text-[#ffc8dd]' to='/SelectEvent'>Event</Link>
        <Link className='hover:text-[#bde0fe]' to='/ChooseCurrent'>List of Event</Link>
        <Link className='hover:text-[#ffafcc]' to='/ManageCurrent'>About</Link>
      </div>
      {/* <div className='text-3xl flex h-20 font-extrabold items-center text-white hover:text-[#a2d2ff]'> <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon></div> */}
      <div className='w-16 flex justify-center items-center cursor-pointer'><Lottie animationData={add}></Lottie></div>
    </div>
  )
}

export default Navbar
