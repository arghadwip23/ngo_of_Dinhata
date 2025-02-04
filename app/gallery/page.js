import React from 'react'
import Content from './Content'

 
// galleryMetadata.js in Next.js

export const metadata = {
title: "Dayboddho NGO Gallery - Inspiring Stories & Community Impact",
description:
"Explore the Dayboddho Gallery to witness the transformative work done by dedicated teachers from Dinhata. Discover heartwarming moments, student success stories, and impactful community initiatives that reflect our mission to support the needy, especially students.",
keywords: [
"Dayboddho",
"NGO Gallery",
"Dinhata Teachers NGO",
"Student Support",
"Community Initiatives",
"Needy Students",
"Social Impact",
"Educational Aid",
"NGO Activities",
"Volunteer Stories"
],
openGraph: {
title: "Dayboddho NGO Gallery - Inspiring Community Stories",
description:
"A visual journey through Dayboddho’s efforts, showcasing impactful projects and student achievements.",
url: "https://dayboddho.vercel.app/gallery",
type: "website",
images: [
{
url: "https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png",
alt: "Dayboddho Gallery Featured Image"
}
]
},
twitter: {
card: "summary_large_image",
title: "Dayboddho Gallery - Empowering Communities Through Education",
description:
"See how Dayboddho is changing lives with heartfelt community work and student support.",
images: [
{
url: "https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png",
alt: "Dayboddho Gallery Key Image"
}
]
}
};



export default function page() {
  return (
    <Content />
  )
}
