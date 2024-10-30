'use client';
import React, { useState, useEffect } from 'react';
import { getStorage, getMetadata, ref, getDownloadURL } from 'firebase/storage';
import app from '@/util/firebase';

export default function GalleryDetails({ params }) {
  const [imgLink, setImgLink] = useState(null);
  const [metadata, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function removeURLEncoding(url) {
    return decodeURIComponent(url);
  }

  const fileName = removeURLEncoding(params.id);
  const storage = getStorage(app);
  const fileref = ref(storage, `gallery/${fileName}`);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const link = await getDownloadURL(fileref);
        const info = await getMetadata(fileref);
        setImgLink(link);
        setMeta(info);
      } catch (err) {
        setError('Failed to load image or metadata');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInfo();
  }, [fileName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 p-10">
      <div className="border text-center">
        {imgLink ? (
          <img src={imgLink} alt="Gallery item" className="w-360 h-360 object-contain mx-auto" />
        ) : (
          <p>Image not available</p>
        )}
      </div>
      <div className="text-black">
        <h2 className="text-2xl">
          {metadata?.customMetadata?.caption || 'No caption available'}
        </h2>
      </div>
    </section>
  );
}
