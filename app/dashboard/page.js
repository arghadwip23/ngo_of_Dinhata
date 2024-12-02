import React from 'react'
import Upload from '../components/Upload'
import TeamMemberUploader from '../components/TeamMemberUploader'
import toast, { Toaster } from 'react-hot-toast';

export default function page() {
  return (
    <>
     <section className=' grid grid-cols-1 gap-6 px-4 md:grid-cols-2 align-middle pt-10'>
    <Upload alt={toast}/>
    <TeamMemberUploader alt={toast} />

    </section>
    <Toaster />
    
    </>
   
  )
}
