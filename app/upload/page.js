"use client"
import React, { useState } from "react";
import db  from "@/util/firebase"; // Firebase config file
import { collection, addDoc } from "firebase/firestore";
//import { v4 as uuidv4 } from "uuid"; // for unique IDs

export default function ImageUpload(){
  const [image, setImage] = useState(null);
  const [uploaderName, setUploaderName] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Convert image to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle the upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image || !uploaderName || !caption) {
      setStatus("All fields are required.");
      return;
    }
    
    setLoading(true);
    setStatus("Uploading...");

    try {
      // Add document to Firestore
     const result =  await addDoc(collection(db, "gallery"), {
        
        image,
        uploaderName,
        caption,
        date: new Date().toISOString(),
      });
      await console.log(result);
      
      setStatus("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image: ", error);
      setStatus("Error uploading image.");
    }

    // Reset form
    setLoading(false);
    setImage(null);
    setUploaderName("");
    setCaption("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold text-yellow-500 mb-4">ছবি আপলোড করুন</h2>

      <form
        onSubmit={handleUpload}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block font-medium text-yellow-600 mb-2">আপলোডারের নাম</label>
          <input
            type="text"
            value={uploaderName}
            onChange={(e) => setUploaderName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block font-medium text-yellow-600 mb-2">ক্যাপশন</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block font-medium text-yellow-600 mb-2">ছবি নির্বাচন করুন</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
          />
        </div>

        {loading ? (
          <p className="text-center text-yellow-600 font-medium">Uploading...</p>
        ) : (
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 transition duration-200"
          >
            আপলোড করুন
          </button>
        )}
      </form>

      {status && <p className="mt-4 text-yellow-700 font-medium">{status}</p>}
    </div>
  );
};


