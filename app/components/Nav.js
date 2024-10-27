'use client'
import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <a href="#" className="text-gray-800">YourLogo</a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Gallery</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
          <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Donate Us</a>
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
            <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Gallery</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Login</a>
            <a href="#" className="block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Donate Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
