import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGift} from '@fortawesome/free-solid-svg-icons'
import { event } from './data'
import { getByTitle } from '@testing-library/react'


const ChooseCurrent = () => {
  return (
    <div className='flex flex-col gap-5 '>
    <div id='text' className='my-5 bg-black px-2 py-2 rounded-md'> <h1 className='font-extrabold text-white text-3xl '>Choose the Current event</h1></div>
    <div className='flex flex-col gap-3'>
      {event.map((data)=>(
        <div className='flex justify-between bg-[#4d194d] border-2 border-black'>
        <h1 className='text-white text-xl px-2 py-2'>{data.current}</h1> 
      <div className='bg-[#006466] flex text-2xl text-white px-2 hover:bg-white hover:text-[#006466]'>
      <button><FontAwesomeIcon icon={faGift} /></button>
     </div> </div>

      ))}
      
      {/* <div className='flex justify-between bg-[#4d194d] border-2 border-black'>
        <h1 className='text-white text-xl px-2 py-2'>Sharma Ji's Birthday Party</h1> 
      <div className='bg-[#006466] flex text-2xl text-white px-2 hover:bg-white hover:text-[#006466]'>
      <button><FontAwesomeIcon icon={faGift} /></button>
     </div> </div>
      <div className='flex justify-between bg-[#4d194d] border-2 border-black'>
        <h1 className='text-white text-xl px-2 py-2'>Sharma Ji's Birthday Party</h1> 
      <div className='bg-[#006466] flex text-2xl text-white px-2 hover:bg-white hover:text-[#006466]'>
      <button><FontAwesomeIcon icon={faGift} /></button>
     </div> </div> */}
    </div>
    
    </div>
  )
}

export default ChooseCurrent
