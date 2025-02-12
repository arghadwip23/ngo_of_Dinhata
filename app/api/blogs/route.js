import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;
    const client = await clientPromise;

    const db = await client.db("gallery");
    const totalBlogs = await db.collection('blogs').countDocuments();
    const blogs = await db
      .collection('blogs')
      .find({})
      .sort({ uploadedDate: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      ok: true,
      blogs,
      currentPage: page,
      totalPages: Math.ceil(totalBlogs / limit),
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ ok: false, error: 'Failed to fetch blogs' });
  }
};

export const POST = async ({ request }) => {
  let data = await request.json();
    const client = await clientPromise;
    const db = client.db("gallery");
    const collection = db.collection("blogs");
    try {
      let set = await collection.findOne({ _id: new ObjectId(data.id) });
      if(!set){
        return NextResponse.json({
          message:"blog not found",
          data: null,
          status:404,
          ok: false
        })

      }

      return NextResponse.json({
        message:"successfully fetched",
        data: set,
        status:200,
        ok: true
      })

      
    } catch (error) {
        const res = NextResponse.json({
            message:"something went wrong in our side",
            status:500,
            ok: false

        })
        return res
      
    }


}