'use client'
import React,{useState} from 'react';
import { sendWebPush } from '../Push';

export default function SendPush() {
    const [message,setMessage] = useState(null);
    const [title,setTitle] = useState(null);
    const handleClick =async()=>{
        let data= await {
            title:title,
            message:message
        }
        await sendWebPush(data);
    }



  return (
    <section className='p-4 border border-red-400 grid grid-cols-1 gap-6 px-10'>
    <input type="text" placeholder='enter title' onChange={(e)=>setTitle(e.target.value)} className='border border-black rounded p-2' />
    <textarea name="message" className='text-black p-2 border border-black rounded' id="" onChange={(e)=>setMessage(e.target.value)} placeholder='enter the message'></textarea>
    <button type="button" className='bg-yellow-500 p-2 rounded' onClick={handleClick}>send</button>
    </section>
  )
}
