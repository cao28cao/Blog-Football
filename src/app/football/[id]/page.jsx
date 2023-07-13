import React from 'react'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
  {
      cache: 'no-store',
  });
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <>
      <div className='flex px-8 py-4 text-[32px]'>
        <div className='flex flex-col w-1/2'>
          <h1 className='text-auto font-bold text-justify'>{data.title}</h1>
          <p className='text-[14px] text-justify'>{data.desc}</p>
          <div className='flex py-4'>
            <Image
              className='flex flex-col w-[50px] h-[50px] rounded-full z-9 object-cover'
              src={data.author}
              width={80}
              height={150}
            />
            <p className='flex flex-col pl-4 text-[14px] font-bold justify-center'>{data.username}</p>
          </div>
        </div>
        <div className='flex flex-col w-1/2 pl-16'>
          <Image
            className='rounded-md h-[300px] z-9 w-[600px] object-cover ml-auto'
            src={data.img}
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className='px-8 py-4'>
        <p className='text-justify'>{data.content1}</p>
        <p className='text-justify'>{data.content2}</p>
        <p className='text-justify'>{data.content3}</p>
        <p className='text-justify'>{data.content4}</p>
      </div>
    </>
  )
}

export default BlogPost