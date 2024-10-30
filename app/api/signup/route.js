import { NextResponse } from "next/server";
import app from '@/util/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(request) {
    let data = await request.json();
    const auth = getAuth(app);
    let email = data.email;
    let password = data.password;
try {
   if (email == "6b773560-f306-45d2-be1e-7fbe732f75a1" && password == "6b773560-f306-45d2-be1e-7fbe732f75a1"){
    const res = NextResponse.json({
        message:"success",
        status:200,
        login : true
    })
    res.cookies.set("token","1zHwn6wJ7nStOzY7gADxLqVa",{
        httpOnly:true
    })
    return res;
   }

} catch (error) {
    console.log(error);
    
}
    
}