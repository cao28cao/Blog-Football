import React from 'react'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      cache: 'no-store',
  });
  if (!res.ok) {
    return { notFound: true }
  }
 
  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className='px-8 py-4 text-[32px]'>
      <h1 className='text-[20px] font-bold'>{data.title}</h1>
      <p className='text-[14px] text-justify'>{data.body}</p>
    </div>
  )
}

export default BlogPost