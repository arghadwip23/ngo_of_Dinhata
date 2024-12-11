'use client'
import {React,useState} from 'react'

export default function Contact({tost}) {
    const [name, setName] = useState("");
    const [mail,setMail] = useState("");
    const [message,setMessage] = useState("");
    const handleSubmit = async()=>{
        if(name && mail && message){
            const data = await {
                name:name,
                contact:mail,
                message:message
            }
            let a = await fetch("/api/comment",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body : JSON.stringify(data)
               });
              const result = await a.json();
              if(result.ok){
                tost.success("your message has been sent");
                
              }else{
                tost.error("there is something wrong");
              }

            
        }else{
            tost.error("enter all the value")
        }
        
    }
  return (
   <section className='mt-40 mb-20' id='contact'>
    <div className="  ">
            <div
                className="  px-10 lg:px-40">
                <div>
                    <h2 className="text-4xl  text-gray-800 font-bengalifont text-center">যোগাযোগ করুন</h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">নিরবিচ্ছিন্ন শিক্ষার সুযোগ পেতে ও যেকোনো সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন। দায়বদ্ধ ওয়েলফেয়ার সোসাইটি আর্থিকভাবে অসহায় ছাত্রছাত্রীদের পাশে দাঁড়াতে প্রস্তুত। আমরা বিশ্বাস করি, শিক্ষার মাধ্যমে সমাজকে এগিয়ে নিয়ে যাওয়া সম্ভব। শিক্ষার পথের বাধা দূর করতে আমাদের এই উদ্যোগে যোগ দিন।</p>

                    <form className="mx-auto mt-8 bg-white rounded-lg p-6 border md:mx-20 xl:mx-60 shadow-md space-y-4 text-gray-800">
                        <input type='text' placeholder='আপনার নাম লিখুন'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" onChange={(e)=>setName(e.target.value)} value={name}/>
                        <input type='email' placeholder='আপনার ইমেল বা মোবাইল নম্বর লিখুন'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" onChange={(e)=>setMail(e.target.value)} value={mail} />
                        {/* <input type='text' placeholder='Subject'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" /> */}
                        <textarea placeholder='এখানে আপনার বার্তা লিখুন' rows="6"
                            className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none" onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                        <button type='button'
                            onClick={handleSubmit}
                            className="text-gray-800 bg-yellow-300 hover:bg-yellow-400 font-semibold rounded-md text-sm px-6 py-3 block w-full">Send
                            Message</button>
                    </form>
                </div>

                {/* <div className="z-10 relative lg:col-span-2">
                    <img src="https://readymadeui.com/images/analtsis.webp" className="w-2/4 object-contain block mx-auto" />
                </div> */}
            </div>
        </div>
   </section>
  )
}
