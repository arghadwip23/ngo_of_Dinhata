'use client';
import React, { useState, useEffect } from 'react';



export default function GalleryDetails({ params }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchImage = async () => {
        try {
            const res = await fetch(`/api/folder/getimages`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id:params.id}),
            });
            const data = await res.json();
            await console.log(data);
            
            if (res.ok) {
                setImage(data.data);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    fetchImage();
  },[]);

  


  return (
    <section className="container mx-auto p-4">
    {loading && (
      <div className="flex justify-center items-center">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    )}
  
    {error && (
      <div className="text-center text-red-500 font-semibold">
        Error: {error}
      </div>
    )}
  
    {image.length > 0 ? (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {image.map((img) => (
          <div
            key={img._id}
            className="bg-white p-2 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={img.image_url}
              alt={img.foldername}
              className="w-full h-60 object-contain rounded-md"
            />
            <p className="text-center text-sm font-medium text-gray-700 mt-2">
              {img.foldername}
            </p>
          </div>
        ))}
      </div>
    ) : (
      !loading && (
        <div className="text-center text-gray-600 font-semibold">
          No images found
        </div>
      )
    )}
  </section>
  
  );
}