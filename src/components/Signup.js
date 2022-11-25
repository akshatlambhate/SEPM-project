import React, { useState } from "react";
import Axios from 'axios';
import { useEffect } from "react";
// import signimg from ''
import { SignupData } from "./SignupData";
// import { axiosInstance } from "../../utils/apiFetch";
import { Link } from "react-router-dom";
const Signup = (e) => {
      // const initialState = {
      //    fullname:'',
      //    email:'',
      //    contact:'', 
      //    password:'',
      // }
      const [fullname,setFullname]=useState('');
      const [email,setEmail]=useState('');
      const [contact,setContact]=useState('');
      const [password,setPassword]=useState('');
      const register = async (e) =>{
        e.preventDefault();
        // let role = "user";
        // let fullname =value.fullname;
        // let contact = value.contact;
        // let email = value.email;
        // let password = value.password;
        // let item = {fullname,contact,email,password,role}
        console.log(fullname,email,contact,password);
         Axios.post('http://localhost:3010/register',{
          fullname:fullname,
          email:email,
          contact:contact,
          password:password,
         }).then((response)=>{
          console.log(response);
         });
        // let result = await fetch("https://dp-backend-e-comm.herokuapp.com/api/auth/register",{
        //   method:'POST',
        //   body:JSON.stringify(item),
        //   headers:{
        //     "Content-Type":"application/json",
        //     "Accept":"application/json"
        //   }
        // })
        // result = await result.json();
        // console.log(result)
        // const response = await axiosInstance.post('/auth/register',item);
        // console.log(response.config.data);
        // localStorage.setItem("myObject",JSON.stringify(response.config.data));
        
      }


  
  // const handleChange=(e)=>{
  //   setValue({...value,[e.target.name]:e.target.value})
  //   // console.log(value)
  // }
  return (<>
    <div className="lg:flex lg:flex-row mx-auto mt-5 shadow-2xl shadow-slate-500  bg-gray-50 w-fit 
    xs:flex xs:flex-col">
    <div  className="shadow-2xl flex flex-col align-middle w-fit px-10 py-5">
        <div className="py-3">
            <h1 className="font-bold text-3xl font-serif">Sign Up for Electric Nest</h1>
        </div>
        <form className="flex flex-col ">
          <label className="text-lg font-mono text-slate-800 font-semibold "> FullName </label>
          <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type='text'
          name='fullname'
          value={fullname}
          autoComplete="null"
        placeholder='Enter Name'
          onChange={(e)=>{
            setFullname(e.target.value)
            
          }}   
        />
          <label className="text-lg font-mono text-slate-800 font-semibold "> Email </label>
          <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type='text'
          name='email'
          value={email}
          autoComplete="null"
        placeholder="Enter Email"
          onChange={(e)=>{
            setEmail(e.target.value)
            
          }}   
        />
          <label className="text-lg font-mono text-slate-800 font-semibold "> Contact Number </label>
          <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type='number'
          name='contact'
          value={contact}
          autoComplete="null"
        placeholder='Enter Mobile number'
          onChange={(e)=>{
            setContact(e.target.value)
            
          }}      
        />
          <label className="text-lg font-mono text-slate-800 font-semibold "> Password </label>
          <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type='password'
          name='password'
          value={password}
          autoComplete="null"
        placeholder='Set Password'
          onChange={(e)=>{
            setPassword(e.target.value)
            
          }}     
        />
          
  
        

        <button onClick={register} className="bg-gray-900 py-3 w-fit px-10 mt-5 shadow-md shadow-slate-700 text-white hover:bg-buttonhover hover:text-black"> 
        Submit
        </button>
        </form>
        
        <h1
          className="mt-4 hover:text-red-600"><a href="">Already have an account? please <Link to='/'>Login</Link> </a></h1>
        </div>
    {/* <div className="">
      <img src={signimg} className="w-signup" />
    </div> */}
    </div>
  </>

  );

}

export default Signup
