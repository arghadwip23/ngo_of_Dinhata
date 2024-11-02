'use client'
import React from 'react'
import app from '@/util/firebase';
import {getStorage,ref,getDownloadURL} from 'firebase/storage'
export default function page() {
    const storage = getStorage(app);
    
    const reference = ref(storage,"gallery/IMG-20240112-WA0075.jpg");
    console.log(reference);
    try {
        getDownloadURL(reference).then((link)=>{
            console.log(link);
            
        })
    } catch (error) {
        console.log(error);
        
    }
   

  return (
    <div>page</div>
  )
}
