'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SocialShare from './Socialshare';
import './style.css';

export default function BlogDetails({ params }) {
  const [blog, setBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${params.id}`);
        const result = await res.json();

        if (result.ok) {
          setBlog(result.blog);
        } else {
          console.error('Failed to fetch blog');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 md:p-8 text-black" >
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800">{blog.title}</h1>
        <SocialShare url={`https://dayboddho.vercel.app/blogs/${blog._id}`} description={`Read this latest blog regarding ${blog.title}\n`} />
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover bg-gray-400 mt-4 rounded"
          />
        )}
        <div className="mt-4  text-gray-700">
          <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
        </div>
      </div>
    </div>
  );
}
