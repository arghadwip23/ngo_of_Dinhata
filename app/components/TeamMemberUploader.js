'use client'
import React, { useState } from "react";
import supabase from '@/util/supabase';

//const supabase = createClient("your-supabase-url", "your-anon-key");

export default function TeamMemberUploader() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [photo, setPhoto] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo) {
      setUploadStatus("Please select a photo.");
      return;
    }

    try {
      setUploadStatus("Uploading...");
      const fileName = `${Date.now()}-${photo.name}`;
      const { data, error } = await supabase.storage
        .from("gallery")
        .upload(`teamMembers/${fileName}`, photo);

      if (error) {
        setUploadStatus(`Upload failed: ${error.message}`);
        return;
      }

      // Get public URL of the uploaded image
      const { data: publicUrlData } = supabase.storage
        .from("gallery")
        .getPublicUrl(`teamMembers/${fileName}`);

      if (!publicUrlData) {
        setUploadStatus("Failed to retrieve public URL.");
        return;
      }

      const imageUrl = publicUrlData.publicUrl;

      // Create an object for the team member
      const teamMember = {
        name:name,
        position:position,
        facebook:facebook,
        instagram:instagram,
        image: imageUrl
      }
      let a = await fetch("/api/teamupload",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(teamMember)
       });
    let result= await a.json();
    if (result.ok){
        // Success message and reset fields
        setUploadStatus("Upload successful! You can now send the object to your API.");
        console.log("Team Member Object:", teamMember);
  
        // Optionally reset the form
        setName("");
        setPosition("");
        setFacebook("");
        setInstagram("");
        setPhoto(null);

    }


      
    } catch (err) {
      setUploadStatus(`An error occurred: ${err.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-yellow-500">Upload Team Member</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Position</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Facebook Link</label>
          <input
            type="url"
            className="w-full border rounded p-2"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Instagram Link</label>
          <input
            type="url"
            className="w-full border rounded p-2"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          Upload
        </button>
        {uploadStatus && (
          <p className="text-center mt-4 text-sm text-gray-700">{uploadStatus}</p>
        )}
      </form>
    </div>
  );
}
