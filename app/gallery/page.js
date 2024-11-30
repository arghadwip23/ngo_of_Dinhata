'use client';
import React, { useState, useEffect } from 'react';
//import supabase from '@/util/supabase';
import Link from 'next/link';


// Initialize Supabase client


export default function Page() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);
    const [totalPages , setTotalPages] = useState(1);

    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 15;

    // Fetch image data from Supabase database table
    useEffect(() => {
        const fetchImages = async () => {
            try {
                // const { data, error } = await supabase
                //     .from("images")
                //     .select("*")
                //     .order("upload_date", { ascending: false });
                let a = await fetch("/api/sendphoto",{
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body : JSON.stringify({
                        pageNum:currentPage,
                        limit:10
                    })
                   });
                let result= await a.json();
                if(result.ok){
                    setImages(result.photos);
                    setTotalPages(result.totalPage);

                }else{

                }
                    
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [currentPage]);

    // Calculate total pages and get images for current page
    

    // Handle pagination
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="text-black p-6 bg-gray-100 min-h-screen">
            {loading ? (
                <p className="text-center text-yellow-500 font-semibold">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">Error: {error}</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                        {images.map((image, index) => (
                            <div key={index} className="bg-yellow-100 border border-yellow-300 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <Link href={`/gallery/${image._id}`}>
                                    <img
                                        src={image.image_url}
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-60 object-contain hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                                <div className="p-4 bg-yellow-50">
                                    <h2 className="text-lg font-semibold text-yellow-700 truncate">{image.caption}</h2>
                                    <p className="text-sm text-yellow-600">Uploaded by {image.uploader_name}</p>
                                    <p className="text-xs text-yellow-500">
                                        {image.uploaded_at}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination controls */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg font-semibold ${currentPage === 1 ? 'bg-yellow-300 text-gray-500 cursor-not-allowed' : 'bg-yellow-500 text-white hover:bg-yellow-600'} transition-colors duration-200`}
                        >
                            Previous
                        </button>
                        <span className="text-yellow-700 font-semibold">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg font-semibold ${currentPage === totalPages ? 'bg-yellow-300 text-gray-500 cursor-not-allowed' : 'bg-yellow-500 text-white hover:bg-yellow-600'} transition-colors duration-200`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
