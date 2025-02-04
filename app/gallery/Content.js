'use client';
import React, { useState, useEffect } from 'react';
//import supabase from '@/util/supabase';
import Link from 'next/link';


// Initialize Supabase client


export default function Content(tost) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

   
  
    useEffect(() => {
        const fetchImages = async () => {
            try {
               
                let a = await fetch("/api/folder/getfolder");
                let result= await a.json();
                if(result.ok){
                    setImages(result.data);   

                }else{
                    tost.error(result.message);

                }
                    
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    // Calculate total pages and get images for current page
    

    return (
        <div className="text-black p-6 bg-gray-50 min-h-screen">
          {loading ? (
            <p className="text-center text-yellow-500 font-semibold text-lg animate-pulse">
              Loading...
            </p>
          ) : error ? (
            <p className="text-center text-red-500 font-semibold text-lg">
              Error: {error}
            </p>
          ) : (
            <div className="max-w-6xl mx-auto p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {images.map((image) => (
                  <Link key={image._id} href={`/gallery/${image.foldername}`} className="group">
                    <div className="p-4 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
                      <img
                        src="/folder.png"
                        alt="Folder Icon"
                        className="w-16 h-16 mx-auto"
                      />
                      <h2 className="text-lg font-semibold text-gray-800 text-center mt-2">
                        {image.foldername}
                      </h2>
                      <p className="text-sm text-gray-600 text-center mt-1">
                        {image.folderdescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
}
