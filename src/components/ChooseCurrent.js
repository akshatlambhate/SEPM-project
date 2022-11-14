import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { event } from "./data";
import { getByTitle } from "@testing-library/react";

const ChooseCurrent = () => {
  return (
    <div className="flex flex-col gap-5 mb-4">
      <div
        id="text"
        className=" flex justify-center items-center mt-2 mb-4 bg-gradient-to-r from-cyan-200 to-cyan-400 px-2 py-5 "
      >
        <h1 className="font-extrabold font-mono text-black text-3xl ">
          Choose the Current event
        </h1>
      </div>
      <div className="flex flex-col gap-3 mx-16 my-2">
        {event.map((data) => (
          <div className="flex  justify-between py- bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-sm">
            <h1 className="text-white text-xl px-2 py-6">{data.current}</h1>
            <div className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 
            flex  justify-center items-center text-4xl  px-5 hover:bg-white hover:text-black">
              <button>
                <FontAwesomeIcon icon={faGift} />
              </button>
            </div>{" "}
          </div>
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
  );
};

export default ChooseCurrent;
