import React, { useState } from 'react'

const ManageCurrent = (e) => {
    const initialValue={
       name:'',
       contact:'',
       guest:'',
       details:'',
       cusines:'',
       team:'',
       timing:'',
       location:''
    }
    const[value , setValue]=useState(initialValue);

    const handleEvent=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
        // console.log(value);

    }
  return (
    <div className='flex flex-col'>
        <h1 className='text-white text-3xl bg-black'>Details of a function</h1>
        <h1 className='text-red-600 bg-white mb-4'>note: all the changes are directly reflected in database</h1>
        <div>
      <h1 className='text-white text-lg bg-black'>Name of Organizer</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='name' value={value.name} onChange={handleEvent}></input>
      <h1 className='text-white text-lg bg-black'>Contact Details</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='contact'  value={value.contact} onChange={handleEvent}></input>
      <h1 className='text-white text-lg bg-black'>number of guest</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='guest'  value={value.guest} onChange={handleEvent}></input>
      <h1 className='text-white text-lg bg-black'>Details of Event</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='details'  value={value.details}  onChange={handleEvent}></input>
      <h1 className='text-white text-lg bg-black'>Cusines</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='cusines'  value={value.cusines} onChange={handleEvent}></input>
      <h1 className='text-white text-lg bg-black'>Required Team</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='team'  value={value.team} onChange={handleEvent}></input>
      <h1 className='text-white text-lg bg-black'>Timing of function</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='timing'  value={value.timing} onChange={handleEvent}></input>
      <h1 className='text-white text-lg bg-black'>function Location</h1>
       <input className='focus: outline-none shadow-lg mb-2 px-24 py-2' type='text' name='location'  value={value.location} onChange={handleEvent}></input>
       </div>
    </div>
  )
}

export default ManageCurrent
