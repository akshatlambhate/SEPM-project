import React, { useState } from 'react'
import {auth} from '../components/data'

const Authentication = (e) => {
let [user,setUser] = useState('');
let [password,setPassword] = useState('');
    const verify = ()=>{
      if(auth.username === user && auth.password === password){
         console.log(user , password); }
         else{
          console.log('error')
         }
     
  
  }
  return (
    <div className='flex flex-col'>
    <div id='text' className='my-5 bg-black px-2 py-2 rounded-md'> <h1 className='font-extrabold text-white text-3xl '>please Login for Happy-Eve</h1></div>
    <div id='maindiv' className='bg-white'>
      <div className='border-2 border-black px-10 py-6'>
        <div id='username' className='py-2'>
            <label className='pr-4 text-xl font-semibold font-mono'> username</label>
            <input type= 'text' className='border-2 border-black py-2 px-4 rounded-md focus:outline-none ' value={user} onChange={(e) => {setUser(e.target.value)}}></input>
        </div>
        <div id='password' className='py-2'>
            <label className='pr-4 text-xl font-semibold font-mono'> password</label>
            <input type= 'password' className='border-2 border-black py-2 px-4 rounded-md focus:outline-none ' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
        </div>
        <button type='submit' className='mt-5 px-4 py-2 border-slate-600 border-2 rounded-md bg-black text-white hover:bg-slate-900 ' onClick={verify}>Submit</button>
      </div>
    </div>
    </div>
  )

}

export default Authentication
