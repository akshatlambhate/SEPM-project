import React, { useState } from "react";

const ManageCurrent = (e) => {
  const initialValue = {
    name: "",
    contact: "",
    guest: "",
    details: "",
    cusines: "",
    team: "",
    timing: "",
    venue: "",
  };
  const [value, setValue] = useState(initialValue);

  const handleEvent = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };
  return (
    <div className="flex flex-col mb-4 ">
      <h1 className=" text-white text-3xl bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 flex justify-center items-center py-8 ">Details of a function</h1>
      <h1 className="text-red-600 bg-white mb-4 ml-4">
       note: all the changes are directly reflected in database
      </h1>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-white w-72 flex justify-center items-center px-10 py-2 text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">Name of Organizer</h1>
        <input
          className=" w-72 py-4  focus: outline-none shadow-lg mb-2 "
          type="text"
          name="name"
          value={value.name}
          onChange={handleEvent}
        ></input>
        <h1 className="text-white w-72  flex justify-center items-center px-10 py-2 text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">Contact Details</h1>
        <input
          className=" w-72 py-4 focus: outline-none shadow-lg mb-2 "
          type="text"
          name="contact"
          value={value.contact}
          onChange={handleEvent}
        ></input>
        <h1 className="text-white w-72 flex justify-center items-center px-10 py-2  text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">number of guest</h1>
        <input
          className=" w-72 py-4 focus: outline-none shadow-lg mb-2 "
          type="text"
          name="guest"
          value={value.guest}
          onChange={handleEvent}
        ></input>
        <h1 className="text-white w-72 flex justify-center items-center px-10 py-2 text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">Details of Event</h1>
        <input
          className=" w-72 py-4 focus: outline-none shadow-lg mb-2 "
          type="text"
          name="details"
          value={value.details}
          onChange={handleEvent}
        ></input>
        <h1 className="text-white w-72 flex justify-center items-center px-10 py-2  text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">Cusines</h1>
        <input
          className=" w-72 py-4 focus: outline-none shadow-lg mb-2 "
          type="text"
          name="cusines"
          value={value.cusines}
          onChange={handleEvent}
        ></input>
        <h1 className="text-white w-72 flex justify-center items-center px-10 py-2 text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">Required Team</h1>
        <input
          className=" w-72 py-4 focus: outline-none shadow-lg mb-2 "
          type="text"
          name="team"
          value={value.team}
          onChange={handleEvent}
        ></input>
        <h1 className="text-white w-72 flex justify-center items-center px-10 py-2  text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          Timing of function
        </h1>
        <input
          className=" w-72 py-4 focus: outline-none shadow-lg mb-2 "
          type="text"
          name="timing"
          value={value.timing}
          onChange={handleEvent}
        ></input>
        <h1 className="text-white w-72 flex justify-center items-center px-10 py-2  text-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black">venue</h1>
        <input
          className=" w-72 py-4 focus: outline-none shadow-lg mb-2 "
          type="text"
          name="venue"
          value={value.venue}
          onChange={handleEvent}
        ></input>
      </div>
    </div>
  );
};

export default ManageCurrent;
