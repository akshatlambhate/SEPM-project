import React from 'react'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-around bg-gradient-to-b from-gray-900 to-gray-600  pt-10'>
      <div className='w-72'><img src={logo}></img></div>

      <div><div className=' flex flex-col gap-7 pt-5 text-white items-center justify-center text-xl curser-pointer'> 
        <div className='hover:text-[#cdb4db]'>Home</div>
        <div className='hover:text-[#ffc8dd]'>Event</div>
        <div className='hover:text-[#bde0fe]'>Profile</div>
        <div className='hover:text-[#ffafcc]'>About</div>
      </div>
      </div>
      <div className='font-bold text-4xl flex gap-3 h-20 items-center text-white cursor-pointer'>
      <FaFacebook />
      <FaInstagram />
      <FaYoutube />
      <FaLinkedin />
      </div>

      <div>    <div>
        <div className="bg-darkblue text-center px-12 pt-4 pb-8 lg:text-left">
            <div className="font-main text-white font-bold tracking-widest">
                Get Updated Via Mails
            </div>
            <div className="text-white pt-4 pb-8">
                Enjoy your Events by Subscribing to our GoodEVEs
            </div>
            <div>
                <input type="text" placeholder="Enter your email" className="outline-none border-none px-6 py-4 text-darkblue shadow-lg" />
            </div>
            <button className=" mt-8 px-4 py-2 text-xl text-amber-400  font-semibold hover:text-red-500">Subscribe</button>
        </div>
    </div></div>
    </div>
  )
}

export default Footer
