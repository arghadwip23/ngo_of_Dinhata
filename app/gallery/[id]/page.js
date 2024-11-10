'use client';
import React, { useState, useEffect } from 'react';

import db from '@/util/firebase';
import { doc, getDoc } from "firebase/firestore";

export default function GalleryDetails({ params }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function removeURLEncoding(url) {
    return decodeURIComponent(url);
  }

  const uniqeId = removeURLEncoding(params.id);
  
  useEffect(() => {
    const fetchInfo = async () => {
      
      try {
        const docRef = doc(db,"gallery",uniqeId);
        const docsnap = await getDoc(docRef);
        if (docsnap.exists()){
          setImage(docsnap.data());
        }else{
          setError("document not found")
        }
      } catch (err) {
        setError('Failed to load image or metadata');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInfo();
  }, [uniqeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 p-10">
      <div className="border text-center">
        {image ? (
          <img src={image.image} alt="Gallery item" className="w-360 h-360 object-contain mx-auto" />
        ) : (
          <p>Image not available</p>
        )}
      </div>
      <div className="text-black">
        <h2 className="text-2xl">
          {image?.caption || 'No caption available'}
        </h2>
      </div>
    </section>
  );
}
