'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
// Initialize Supabase client
const supabase = createClient("https://ztmiuwqaannhjkbpxfue.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bWl1d3FhYW5uaGprYnB4ZnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Mzc3MDcsImV4cCI6MjA0NjExMzcwN30._L4MTIdEsMfi085VpQV8dA-sjUutK1jN5eewJMNiQRA");

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

    // Function to get signed URL for each image
    const getSignedUrl = async (fileName) => {
        try {
            const { data, error } = await supabase
                .storage
                .from('gallery')
                .createSignedUrl(`gallery/${fileName}`, 120);
            if (error) throw error;
            return data.signedUrl;
        } catch (error) {
            setError(error.message);
            return null;
        }
    };

    // Fetch the list of images and retrieve signed URLs
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data, error } = await supabase
                    .storage
                    .from("gallery")
                    .list("gallery", {
                        limit: 100,
                        offset: 0,
                        sortBy: { column: 'name', order: 'asc' },
                    });

                if (error) throw error;
                if (data) {
                    // Map each image name to its signed URL
                    const imageUrls = await Promise.all(
                        data.map(async (file) => await getSignedUrl(file.name))
                    );
                    setImages(imageUrls.filter(Boolean)); // Filter out any nulls in case of errors
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <div className='text-black'>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 masonry ">
                {
                images.map((url, index) => (
                    <div key={index} className=''>
              <Link href={`/gallery/`}>
              <img
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className=" transition-transform duration-300 hover:scale-105 rounded p-3 w-full h-80 object-contain bg-white "
              /> 
              <div className="p-2 bg-white shadow-inner">
                <p className="text-gray-700 font-semibold ">hi</p>
                <p className="text-gray-500 text-xs ">
                 hello
                </p>
              </div> 
              </Link>
              </div>
                )
                )}
                </div>
            )}
        </div>
    );
}
