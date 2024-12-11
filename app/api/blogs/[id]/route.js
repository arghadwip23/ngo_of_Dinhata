import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export const GET = async (req, { params }) => {
  try {
    const client = await clientPromise;

    const db = await client.db("gallery");
    const blog = await db.collection('blogs').findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return NextResponse.json({ ok: false, error: 'Blog not found' });
    }

    return NextResponse.json({ ok: true, blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ ok: false, error: 'Failed to fetch blog' });
  }
};
