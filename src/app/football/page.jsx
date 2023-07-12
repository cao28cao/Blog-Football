import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import declanrice from '../../img/declanrice.jpg'
import midBayern from '../../img/midBayern.jpg'
import tonali from '../../img/tonali.jpg'
import kimminjae from '../../img/kimminjae.jpeg'
import vlahovic from '../../img/vlahovic.jpg'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
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
        <Link href={`/football/${item._id}`} key={item.id} className='flex pb-8'>
          <div className='flex flex-col'>
            <Image
              className='rounded-md h-[250px] z-9 w-[250px] object-cover'
              src={item.img}
              width={800}
              height={800}
              objectFit='cover'
            />
            </div>
            <div className='flex flex-col pl-4 w-3/5'>
              <h1 className='text-[24px] font-bold text-justify'>{item.title}</h1>
              <h1 className='text-[16px] text-justify'>{item.desc}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Football