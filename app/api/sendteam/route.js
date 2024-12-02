import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(){
    try {
        const client = await clientPromise;
        const db = client.db("gallery");
        const collection = db.collection("teamMembers");
        try {
            const data = await collection.find().toArray();
            return NextResponse.json({
                ok:true,
                status:200,
                data:data,
                message:"everything ok"
            })
        } catch (error) {
            return NextResponse.json({
                ok:false,
                status:500,
                message:"something went wrong"
            })
        }
    } catch (error) {
        return NextResponse.json({
            ok:false,
            status:500,
            message:"database connection fail"
        })
    }
   

}