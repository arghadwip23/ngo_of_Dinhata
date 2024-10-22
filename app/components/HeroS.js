'use client'

import React from 'react'
import { IKImage } from 'imagekitio-next';
import localFont from 'next/font/local';
import Image from 'next/image';

const bengali = localFont({
  src: "./fonts/just.ttf",
  variable: "--font-bengali"
  
});



export default function HeroS() {

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    // <section className={`flex pt-10 px-2 flex-col md:flex-row  lg:px-20 ${myFont.variable} `}>
    //     <div className='space-y-3 text-lrft p-4 md:w-2/3  md:text-left md:flex md:flex-col md:justify-center md:ps-10 lg:pe-10'>
    //         <h1 className="font-bold text-orange-500 text-5xl text-black md:text-7xl"  >এ কারণে আমরা অনেকেই জানি না</h1>
    //         <p className='text-gray-700 md:text-1.5xl '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum numquam ipsam minus perferendis quod? Dolorum veritatis iure quis nostrum consequatur voluptates natus. Fugit accusantium error nulla deleniti molestias? Esse, architecto sed.</p>
    //         <button className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:flex-none">
    //       Get Started
    //     </button>
    //     </div>
    //     <div className='hidden md:block'>
    //     <IKImage urlEndpoint={urlEndpoint} path="hero.png"  alt="Alt text" height={600} width={600} className='w-full h-auto' />
    //     </div>
    // </section>
    //আশার আলো ছড়ান সমাজে
    <section className={`bg-gray-100 text-gray-800 border ${bengali.variable} `}>
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between border">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left border">
			<h1 className={`text-5xl leading-none sm:text-6xl font-bengalifont`}> আশার <span className='text-yellow-500'>আলো</span> ছড়ান সমাজে
			</h1>
			<p className={`mt-6 mb-8 text-2xl sm:mb-12 font-basundhara`}>মানবতার সেবায় আপনার সহযোগিতা দরিদ্রদের জীবন বদলাতে পারে।


				<br  className="hidden md:inline lg:hidden" />শিক্ষা ও সাহায্যের মাধ্যমে দুর্দশাগ্রস্ত মানুষের জীবন পাল্টাতে সাহায্য করুন।
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-yellow-500 text-gray-900"> দান করুন</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded text-yellow-500 border-yellow-500">যুক্ত হোন</a>
			</div>
		</div>
		<div className=" hidden  border items-center justify-center   mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:block">
    {/* <IKImage urlEndpoint={urlEndpoint} path="hero.png"  alt="Alt text" height={400} width={400} className='w-full h-auto' /> */}
    {/* <Image src="/hero.svg" width={700} height={700} ></Image> */}
    <img src="/hero.svg" className='' width={700} alt="" />
    
  
		</div>
	</div>
</section>
  )
}
