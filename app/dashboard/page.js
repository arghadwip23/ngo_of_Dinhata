import React from 'react'
import Upload from '../components/Upload'
import TeamMemberUploader from '../components/TeamMemberUploader'
export default function page() {
  return (
    <section className='p-4'>
    <Upload/>
    <TeamMemberUploader/>
    </section>
  )
}
