'use client'
import React, { useState , useEffect } from "react";
import Link from "next/link";


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [userstatus , setUserstatus] = useState(false);

  useEffect(()=>{
    async function checkverifucation() {
      const response = await fetch('/api/verify');
      const data = await response.json();
      setUserstatus(data.verified);
    }
    checkverifucation();

  },[])

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <a href="#" className="text-gray-800"><img src="https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/Mask%20group.png" alt="" className="h-10"/></a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/ " className="text-gray-500 hover:text-yellow-500">Home</Link>
          <Link href="/about" className="text-gray-500 hover:text-yellow-500">About Us</Link>
          <Link href="/team" className="text-gray-500 hover:text-yellow-500">Our Team</Link>
          <Link href="/gallery" className="text-gray-500 hover:text-yellow-500">Gallery</Link>
          <Link href="/blogs" className="text-gray-500 hover:text-yellow-500">Blog</Link>
          {userstatus?(
            <Link href="/dashboard" className="text-gray-500 hover:text-yellow-500">Dash Board</Link>
          ):(
            <Link href='/signup' className="text-gray-500 hover:text-yellow-500">Log in</Link>
          )}
          <a href="#" className="text-gray-500 hover:text-yellow-500"></a>
          <Link href="/donate" className="px-4 py-2 bg-yellow-500 text-white rounded hover:scale-105 transition-all duration-300">Donate Us</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 w-64 h-full bg-white z-50 p-6 space-y-6 shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <Link href="/" className="block text-gray-500 hover:text-yellow-500">Home</Link>
            <Link href="/about" className="block text-gray-500 hover:text-yellow-500">About Us</Link>
            <Link href="/team" className="block text-gray-500 hover:text-yellow-500">Our Team</Link>
            <Link href="/gallery" className="block text-gray-500 hover:text-yellow-500">Gallery</Link>
            <Link href="/blogs" className="block text-gray-500 hover:text-yellow-500">Blog</Link>
            {userstatus?(
              <Link href="/dashboard" className="block text-gray-500 hover:text-yellow-500">Dash Board</Link>
            ):(
              <Link href="/signup" className="block text-gray-500 hover:text-yellow-500">Log in</Link>
            )}
            <Link href="/donate" className="block text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-500">Donate Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
