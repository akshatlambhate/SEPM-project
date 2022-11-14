import React, { useState } from "react";
import { auth } from "../components/data";
import login from "../components/login.jpg";
import dancing from "./dancing.json";
import Lottie from "lottie-react";
import background from "./background.json";
import Axios from "axios";

const Authentication = (e) => {
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  const verify = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      // setEmployeeList(response.data);
      console.log(response.data)
    });
    if (auth.username === user && auth.password === password) {
      console.log(user, password);
    } else {
      console.log("error");
    }
  };
  return (
    <>
      <div className="relative">
        <div className=" py-20">
          <div className="flex mx-auto shadow-2xl shadow-slate-500  bg-gray-50 w-fit">
            <div className="shadow-2xl flex flex-col align-middle w-fit px-10 py-5">
              <div className="py-3">
                <h1 className="font-bold text-3xl font-serif">
                  Login to Good Eve
                </h1>
              </div>
              <div className="px-10 py-6">
                <div id="username" className="py-2">
                  <label className="pr-4 text-xl font-semibold font-mono">
                    {" "}
                    username
                  </label>
                  <input
                    type="text"
                    className="shadow-sm shadow-slate-800 py-2 px-4 rounded-md focus:outline-none "
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                  ></input>
                </div>
                <div id="password" className="py-2">
                  <label className="pr-4 text-xl font-semibold font-mono">
                    {" "}
                    password
                  </label>
                  <input
                    type="password"
                    className="shadow-sm shadow-slate-800 py-2 px-4 rounded-md focus:outline-none "
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <button
                  type="submit"
                  className="mt-5 px-4 py-2 border-slate-600 border-2 rounded-md bg-black text-white hover:text-black hover:bg-gray-400 "
                  onClick={verify}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="">
              <img src={login} className="w-72" />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute -top-10 left-20 w-72">
        <Lottie animationData={background}></Lottie>
      </div>
      <div className=" absolute top-64  right-0 w-96">
        <Lottie animationData={dancing}></Lottie>
      </div>
    </>
  );
};

export default Authentication;
