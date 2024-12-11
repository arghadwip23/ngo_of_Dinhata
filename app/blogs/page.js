'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs?page=${page}&limit=6`);
        const result = await res.json();

        if (result.ok) {
          setBlogs(result.blogs);
          setTotalPages(result.totalPages);
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBlogs();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">
                {blog.metaDescription}
              </p>
              <Link href={`/blogs/${blog._id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
