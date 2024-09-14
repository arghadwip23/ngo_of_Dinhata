'use client'

import React from 'react'
import { IKImage } from 'imagekitio-next';

export default function HeroS() {

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <section className='flex pt-10 px-2 flex-col md:flex-row  lg:px-20'>
        <div className='space-y-3 text-center p-4 md:w-2/3  md:text-left md:flex md:flex-col md:justify-center md:ps-10'>
            <h1 className='font-bold text-5xl text-black md:text-7xl'>Lorem ipsum dolor sit amet</h1>
            <p className='text-gray-700 md:text-2xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a aliquid at esse provident ipsum libero architecto quo sed possimus ullam, et nostrum neque incidunt, quibusdam quaerat assumenda quidem quam vero culpa?</p>
            <button className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:flex-none">
          Get Started
        </button>
        </div>
        <div className=''>
        <IKImage urlEndpoint={urlEndpoint} path="hero.png"  alt="Alt text" height={600} width={600} className='w-full h-auto' />
        </div>
    </section>
  )
}
