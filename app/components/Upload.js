
'use client';
import React, { useState } from 'react';
import supabase from '@/util/supabase';

// Initialize Supabase client
//const supabase = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API);

export default function Upload() {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [uploaderName, setUploaderName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
   
    // Handle file selection
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle form submission
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file || !caption || !uploaderName) {
            setMessage('All fields are required');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            // Upload the image file to Supabase Storage
            const fileName = `${Date.now()}-${file.name}`;
            const { data: storageData, error: storageError } = await supabase
                .storage
                .from('gallery')
                .upload(`gallery/${fileName}`, file);

            if (storageError) throw storageError;

            // Get the public URL of the uploaded image
            const { data: urlData } = await supabase
                .storage
                .from('gallery')
                .getPublicUrl(`gallery/${fileName}`);

            const imageUrl = urlData.publicUrl;

            // Insert metadata into Supabase database
            const imdata={
                    caption : caption,
                    uploader_name: uploaderName,
                    image_url: imageUrl,
                    uploaded_at : new Date(),
            }
            let a = await fetch("/api/upload",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body : JSON.stringify(imdata)
               });
            let result= await a.json();
            if (result.ok){
                // Success message and reset fields
            setMessage(result.message);
            setFile(null);
            setCaption('');
            setUploaderName('');

            }

            
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h1 className="text-xl font-semibold mb-4">Upload Image</h1>
            <form onSubmit={handleUpload} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Caption</label>
                    <input
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Uploader Name</label>
                    <input
                        type="text"
                        value={uploaderName}
                        onChange={(e) => setUploaderName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Choose Image</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        accept="image/*"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
                {message && <p className="text-center mt-4 text-gray-600">{message}</p>}
            </form>
        </div>
    );
}
