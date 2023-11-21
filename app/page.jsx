"use client";

import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email, 
        password,
        redirect: false,
      });

      if(res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("dashboard");

    } catch (error){
      console.log(error);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col text-align-center items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-700">Company</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-700 mb-2">Sign in to Account</h2>
              <div className="border-2 w-10 border-green-700 inline-block mb-2 "></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm " />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm " />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm " />
                </a>
              </div> 
              {/*social log in section*/}
              <p className="text-gray-400 my-3">or use your email account</p>
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"> 
                  <FaRegEnvelope className="text-gray-400 m-2"/>
                  {/* 
                  
                  */}
                  <input onChange={(e) => setEmail(e.target.value)}  type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
                {/* 
                
                */}
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"> 
                  <MdLockOutline className="text-gray-400 m-2"/>
                  {/* 
                  
                  */}
                  <input onChange={(e) => setPassword(e.target.value)}  type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                  {/* 
                  
                  */}
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs"><input type="checkbox" name= "remember" className="mr-1"/> Remember me</label>
                  <a href="#" className="text-xs">Forgot Password?</a>
                </div>
                {/* 
                
                
                */}
                <button className="border-2 border-green-600 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white">
                  Sign In
                </button>

                {error && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div> 
          {/* Sign in section */}
          <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"> 
            <h2 className="text-3xl font-bold mb-2 "> Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2 "></div>
            <p className="mb-10">Fill up personal information and start journey with us.</p>
            <Link href={"/register"} className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-700">
              Sign Up
            </Link>
          </div> 
          {/* Sign up */}
        </div>
      </main>
    </div>
  )
}
