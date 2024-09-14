'use client'

import React from 'react'
import Image from 'next/image';
import { IKImage } from "imagekitio-next";


export default function Hero() {
 const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <section className="flex h-screen flex-wrap w-screen md:flex-nowrap    md:px-20 md:pt-0  md:h-2/3 bg-zinc-500  items-center    space-y-0 h-screen p-0 md:flex-row items-center p-0 justify-between">
      {/* Left Side: Text */}
      <div className="  p-10 m-0 md:w-1/2 p-0  w-full text-center md:text-left md:p-0 lg:p-4 bg-red-300">
        <h1 className="text-5xl pt-5 md:text-6xl font-bold text-gray-900 mb-4">
         Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-lg text-gray-700 mb-6 mt-7">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a aliquid at esse provident ipsum libero architecto quo sed possimus ullam, et nostrum neque incidunt, quibusdam quaerat assumenda quidem quam vero culpa?
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>

      {/* Right Side: Image (Hidden on small screens) */}
      <div className="flex justify-middle items-center bg-red-400 ">
      {/* <IKImage urlEndpoint={urlEndpoint} path="hero.png"  alt="Alt text" height={600} width={600} className='w-full h-auto' /> */}
      </div>
    </section>
  )
}
