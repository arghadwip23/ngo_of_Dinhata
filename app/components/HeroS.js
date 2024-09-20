'use client'

import React from 'react'
import { IKImage } from 'imagekitio-next';
import localFont from 'next/font/local';

const myFont = localFont({
  src:[{
    path: '../../public/fonts/haider.ttf'
  }] 
    
  ,
  variable: '--font-my-custom-font'
});



export default function HeroS() {

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <section className={`flex pt-10 px-2 flex-col md:flex-row  lg:px-20 ${myFont.variable} `}>
        <div className='space-y-3 text-lrft p-4 md:w-2/3  md:text-left md:flex md:flex-col md:justify-center md:ps-10 lg:pe-10'>
            <h1 className="font-bold text-orange-500 text-5xl text-black md:text-7xl"  >এ কারণে আমরা অনেকেই জানি না</h1>
            <p className='text-gray-700 md:text-1.5xl '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum numquam ipsam minus perferendis quod? Dolorum veritatis iure quis nostrum consequatur voluptates natus. Fugit accusantium error nulla deleniti molestias? Esse, architecto sed.</p>
            <button className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:flex-none">
          Get Started
        </button>
        </div>
        <div className='hidden md:block'>
        <IKImage urlEndpoint={urlEndpoint} path="hero.png"  alt="Alt text" height={600} width={600} className='w-full h-auto' />
        </div>
    </section>
  )
}
