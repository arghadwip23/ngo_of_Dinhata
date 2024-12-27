import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        
    let data = await request.json();
    const client = await clientPromise;
    const db = client.db("gallery");
    const collection = db.collection("image");
    try {
        let set = await collection.insertOne(data);
        const res = NextResponse.json({
            message:"successfully uploaded",
            status:200,
            ok: true
            
        })
        return res
    } catch (error) {
        const res = NextResponse.json({
            message:"something went wrong in our side",
            status:500,
            ok: false

        })
        return res
    }

    } catch (error) {
        const res = NextResponse.json({
            message:"couldn't connect to database",
            status:500,
            ok: false
        })
    }
    
}
export async function GET(res) {
    try {
        const client = await clientPromise;
        const db = client.db("gallery");
        const collection = db.collection("image");
        const data = await collection.find().toArray();
        return NextResponse.json({
            data:data,
            status:200,
            ok:true
        })
    } catch (error) {
        return NextResponse.json({
            ok:false,
            status:500,
            data:[]
        })
    }
    
}