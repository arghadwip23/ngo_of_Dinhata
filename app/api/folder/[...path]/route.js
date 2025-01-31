import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
 const { pathname } = new URL(request.url);
 switch (pathname) {
    case "/api/folder/addfolder":
       return addfolder(request);
    case "/api/folder/getfolder":
        return listfolder(request);
    case "/api/folder/getimages":
        return listimages(request);
 
    default:
        return wrongPath(pathname);
        
 }

    
}


export async function GET(request){
    const client = await clientPromise;
    const db = client.db("gallery");
    const collection = db.collection("folder");
    try {
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
            message:"some thing , went wrong"
        })
    }
    

}
async function addfolder(request){
    let data = await request.json();
    const client = await clientPromise;
    const db = client.db("gallery");
    const collection = db.collection("folder");
    try {
    await collection.insertOne(data);
    return NextResponse.json({
        ok:true,
        message:"folder has been added successfully"
    })
    } catch (error) {
        return NextResponse.json({
            ok:false,
            message:"couldn't add the folder"
        })
    }


}


//defalut function
async function wrongPath(link){
    return NextResponse.json({
        ok:false,
        message: "plesae select correct api folder",
        link: link
    })
}

//list images
async function listimages(request){
    let data = await request.json();
    const client = await clientPromise;
    const db = client.db("gallery");
    const collection = db.collection("image");
    try {
        console.log(data);
        
        let result = await collection.find({folder_name:data.id}).toArray();
        return NextResponse.json({
            ok:true,
            data:result,
            message:"images has been fetched successfully"
        })
    } catch (error) {
        return NextResponse.json({
            ok:false,
            message:"couldn't get the images"
        })
    }


}
