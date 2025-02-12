import React from 'react'
import Content from './Content';

import { getMetadata } from '@/lib/exportMeta';



export async function generateMetadata({params}) {
  let data = await getMetadata(params.id);
  return {
    title: data.title,
    description: data.metaDescription,
    image: data.image,
    url: `https://www.dayboddho.vercel.app/blogs/${params.id}`,
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      type: 'article',
      image: data.image,
      url: `https://www.dayboddho.vercel.app/blogs/${params.id}`,
      publishedTime: data.time,
      authors: data.author,
    },
  }

}



export default function page({params}) {
  return (
    <Content params={params} />
  )
}
