import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
export async function POST(request){
 try {
    const d = await request.json();
    const client = await clientPromise;
    const db =  client.db("gallery");
    const collection = db.collection("image");
    const totalDocuments = await collection.countDocuments();
    const totalPage = Math.ceil(totalDocuments/parseInt(d.limit))
    const photos = await collection.find().sort({ uploaded_at: -1 }).skip((d.pageNum - 1) * d.limit).limit(d.limit).toArray(); // Limit results to itemsPerPage 

    const final = NextResponse.json({
        photos,
        totalPage,
        ok:true,
        status:200
    })

    return final
 } catch (error) {
    return NextResponse.json({
        ok:false,
        status:500,
        message:error
    })
 }

}