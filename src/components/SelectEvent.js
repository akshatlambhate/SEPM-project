import React from "react";
import { event } from "./data";
import background from '../components/background.json'
import dancing from '../components/dancing.json'
import Lottie from 'lottie-react'

const SelectEvent = () => {
  return (
    <div className="mb-4">
    <div className='relative'>
    <div className="flex flex-col ">
      <div
        id="text"
        className="mb-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center items-center px-2 py-6 "
      >
        <h1 className="font-extrabold text-white text-3xl ">Select an Event</h1>
      </div>
      <div className=" flex justify-center flex-col items-center">
        {event.map((data) => (
          <div className=" w-96 h-10 p-10 flex items-center justify-center mx-20 my-3
           bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-black 
           shadow-md shadow-zinc-400 font-extrabold font-mono text-2xl hover:text-orange-600 hover: cursor-pointer">
            <h1>{data.title}</h1>
          </div>
        ))}
       
      </div>
    </div>
        </div>
      <div className=' absolute -top-12 left-20 w-72'>
      <Lottie animationData={background} >
      </Lottie>
      </div> 
       <div className=' absolute top-72 right-0 w-96'>
      <Lottie animationData={dancing} >
      </Lottie>
      </div>
    </div>
   
  );
};

export default SelectEvent;
