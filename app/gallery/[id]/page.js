'use client'
import {React,useState,useEffect} from 'react'
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
useEffect(()=>{
 const fetchInfo = async ()=>{
    const link = await getDownloadURL(fileref);
    const info = await getMetadata(fileref);
    await setImgLink(link);
    await setMeta(info);
    await console.log(info);
    

 }
 fetchInfo()
},[])


  return (
    <section className='grid grid-cols-1 md:grid-cols-2 p-10'> 
    <div className='  border text-center '>
    <img src={imgLink} alt="" className='w-360 h-360 object-contain mx-auto'  />
    </div>
    <div className='text-black '>
    <h2 className='text-2xl'>{metadata.customMetadata.caption}</h2>
        
    </div>
    </section>
  )
}
