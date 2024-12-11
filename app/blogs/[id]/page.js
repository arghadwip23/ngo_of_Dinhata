'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <div className="min-h-screen bg-gray-100 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover mt-4 rounded"
          />
        )}
        <div className="mt-4 text-gray-700">
          <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
        </div>
      </div>
    </div>
  );
}
