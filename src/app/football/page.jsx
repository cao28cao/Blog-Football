import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://fakeserver-m3kh.onrender.com/api/posts', {
      cache: 'no-store',
    });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

const Football = async () => {

  const data = await getData()
  return (
    <div>
      {data.map((item) => (
        <Link href={`/football/${item.id}`} key={item.id} className='flex pb-8'>
          <div className='flex flex-col'>
            <Image
              className='rounded-md h-[250px] z-9 w-[250px] object-cover'
              src={item.img}
              width={800}
              height={800}
            />
            </div>
            <div className='flex flex-col pl-4 w-3/5'>
              <h1 className='text-[24px] font-bold text-justify'>{item.title}</h1>
              <h1 className='text-[16px] text-justify'>{item.username}</h1>
              {/* <h1 className='text-[16px] text-justify'>{item.desc}</h1> */}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Football