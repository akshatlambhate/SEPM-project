import React from "react";
import { event } from "./data";
import ChooseCurrent from "./ChooseCurrent";

const SelectEvent = () => {
  const checkEvent = (id) => {
      return(
          <div>
              <ChooseCurrent id={id} />
              {console.log("Clicked!!")}
          </div>
      )
  }
  return (
    <div className="flex flex-col">
      <div id="text" className="my-5 bg-black px-2 py-2 rounded-md">
        {" "}
        <h1 className="font-extrabold text-white text-3xl ">
          Select the Event
        </h1>
      </div>
      <div className="flex w-96 flex-wrap">
        {event.map((data) => (
          <div className=" w-28 h-20 p-10 flex items-center justify-center mx-10 my-5 bg-black text-white font-semibold text-xl border-2 border-white hover:bg-slate-900 cursor-pointer" onClick={()=> (checkEvent(data.id))}>
            <h1>{data.title}</h1>
          </div>
        ))}

        {/* <div className=" w-36 h-20 flex items-center justify-center mx-10 my-5 bg-black text-white font-semibold text-xl border-2 border-white hover:bg-slate-900">
            <h1>Anniversary</h1>
          </div>
        </div>
        <div>
          <div className=" w-36 h-20 p-10  flex items-center justify-center mx-10 my-5 bg-black text-white font-semibold text-xl border-2 border-white hover:bg-slate-900 ">
            <h1>Merriage</h1>
          </div>
          <div className=" w-36 h-20  p-10 flex items-center justify-center mx-10 my-5 bg-black text-white font-semibold text-xl border-2 border-white hover:bg-slate-900">
            <h1>Get-to-gethers</h1>
          </div> */}
      </div>
    </div>
  );
};

export default SelectEvent;
