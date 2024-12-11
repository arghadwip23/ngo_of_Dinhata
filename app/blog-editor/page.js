'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // React Quill styles
import { useRouter } from 'next/navigation';
import supabase from '@/util/supabase';
import toast, { Toaster } from 'react-hot-toast';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); // Dynamically load Quill

export default function BlogEditor() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imglink,setImglink] = useState("hi");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle Image Upload
  const handleImageUpload = async(e) => {
    await setImage(e.target.files[0]);
   await console.log(image);
    
    

  };

  // Handle Blog Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        // Upload the image file to Supabase Storage
        const fileName = `${Date.now()}-${image.name}`;
        try{
        const { data: storageData, error: storageError } = await supabase
            .storage
            .from('gallery')
            .upload(`blog/${fileName}`, image);

        if (storageError) throw storageError;
        }catch(err){
            console.log(err);
            
        }
        // Get the public URL of the uploaded image
        const { data: urlData } = await supabase
            .storage
            .from('gallery')
            .getPublicUrl(`blog/${fileName}`);

        const imageUrl = await urlData.publicUrl;
       await setImglink(imageUrl);
   } catch (error) {
       toast.error("error in saving the image");
       console.log(error);
       
   }
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('tags', tags);
    // formData.append('metaDescription', metaDescription);
    // formData.append('content', content);
    // if (imglink) formData.append('image', imglink);
    const formData = await {
        title:title,
        tags:tags,
        metaDescription:metaDescription,
        content:content,
        image:imglink
    }

    try {
      const res = await fetch('/api/blogupload', {
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(formData)
      });

      const result = await res.json();
      if (result.ok) {
        toast.success("blog uploaded successfuly");
        //router.push('/blogs'); // Redirect to blogs page
      } else {
        toast.error("could not save the blog");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-3xl font-bold text-center mb-6">Write a New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tags
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., tech, programming"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="metaDescription"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Meta Description
          </label>
          <textarea
            id="metaDescription"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder="Short description for SEO"
            className="w-full px-3 py-2 border rounded-md"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            className="h-48 text-black"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Upload Cover Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e)=>setImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded text-white ${
              loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Saving...' : 'Save Blog'}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
