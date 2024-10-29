"use client"
import React, { useState } from "react";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from "@/util/firebase"; // Import your Firebase storage config

const ImageUploader = () => {
  const storage = getStorage(app)
  const [imageFile, setImageFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [userName, setUserName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!imageFile || !caption || !userName) {
      setMessage("Please fill in all fields before uploading.");
      return;
    }

    const storageRef = ref(storage, `gallery/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile, {
      customMetadata: {
        caption: caption,
        user: userName,
      },
    });

    setUploading(true);
    setMessage("");
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
        setMessage("Error uploading image.");
        setUploading(false);
      },
      () => {
        setMessage("Upload successful!");
        setUploading(false);
        setUploadProgress(0);
        setImageFile(null);
        setCaption("");
        setUserName("");
      }
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">
        ছবি আপলোড করুন
      </h2>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Uploader Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Caption</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Image caption"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Select Image</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        {uploading && (
          <div className="mb-4">
            <div className="h-4 relative max-w-full rounded bg-gray-300">
              <div
                style={{ width: `${uploadProgress}%` }}
                className="absolute h-full bg-green-500 rounded"
              ></div>
            </div>
            <p className="text-center text-sm text-gray-700 mt-2">
              Uploading: {Math.round(uploadProgress)}%
            </p>
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>

        {message && <p className="text-center mt-4 text-blue-700">{message}</p>}
      </div>
    </div>
  );
};

export default ImageUploader;
