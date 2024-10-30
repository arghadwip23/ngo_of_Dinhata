'use client'
import {React, useEffect, useState} from 'react'
import verify from '@/util/verify'
import { useRouter } from 'next/navigation'

export default function Signup() {

const [email,setEmail] = useState([]);
const [password , setPassword] = useState([]);
const router = useRouter();
 

const handleSubmit=async (event)=>{
   event.preventDefault();
   const data = {
    email : email,
    password : password,
    name : "hi hello ",
   }
   let a = await fetch("/api/signup",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body : JSON.stringify(data)
   });

   const respon = await a.json();
   if (respon.login){
    router.push('/gallery')
   }
   
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8  max-w-md w-full">
      <h2 className="text-2xl  font-semibold text-gray-800 text-center mb-2">
        Log in
      </h2>
      <p className='text-center text-gray-600  mb-6'>only for our team members </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
            User name
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-gray-700 focus:border-yellow-500"
            placeholder="Enter the username "
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
          secret key
          </label>
          <input
            type="password"
            id="password"
            value={password}
             onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border text-gray700 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 text-gray-700"
            placeholder="Enter secrety key"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Log in 
        </button>
      </form>
     
    </div>
  </div>
  )
}
