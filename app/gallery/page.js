'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
//import dayjs from 'dayjs'; // for date formatting

// Initialize Supabase client
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_API
);

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

    // Fetch image data from Supabase database table
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data, error } = await supabase
                    .from("images")
                    .select("*")
                    .order("upload_date", { ascending: false }); // Order by latest uploads

                if (error) throw error;
                setImages(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <div className="text-black p-6">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <Link href={`/gallery/${image.id}`}>
                                <img
                                    src={image.image_url}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-60 object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </Link>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 truncate">{image.caption}</h2>
                                <p className="text-sm text-gray-600">Uploaded by {image.uploader_name}</p>
                                <p className="text-xs text-gray-500">
                                    {image.upload_date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
