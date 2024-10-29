'use client'
import {React,useState} from 'react'
import { getStorage,getMetadata,ref,getDownloadURL } from 'firebase/storage';
import app from "@/util/firebase"

export default function GalleryDetails({params}) {

const [imgLink,setImgLink] = useState([]);
const [metadata,setMeta] = useState([]);
function removeURLEncoding(url) {
    // Use a regular expression to replace encoded characters with an empty string
    return url.replace(/%[0-9A-Fa-f]{2}/g, ' ');
  }
  
const fileName =removeURLEncoding(params.id);
const storage = getStorage(app);
const fileref = ref(storage,`gallery/${fileName}`)

getDownloadURL(fileref).then((data)=>{
    console.log(data);
    setImgLink(data);
    // getMetadata(fileref).then((hi)=>{
    //     setMeta(hi);
    //     console.log(metadata);
        
    // })
    
})




  return (
    <section className='grid grid-cols-1 md:grid-cols-2 p-10'> 
    <div className='h-1/2 overflow-hidden object-contain border text-center '>
    <img src={imgLink} alt="" className='h-full object-contain mx-auto'  />
    </div>
    <div className='text-black '>
        {metadata.caption}
    </div>
    </section>
  )
}
