import React from 'react'
import apashe from '../../img/apashe.jpg'
import ivanov from '../../img/ivanov.jpg'
import Image from 'next/image'
const Credits = () => {
  return (
    <>
      <div className='px-16 py-8 text-[44px]'>
        Credits
        <p className='text-[32px]'>This blog was developed by</p>
      </div>
      <div className='px-24 grid gap-6 xl:grid-cols-3 xl:grid-rows-2 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 border-solid'>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <Image className='rounded-md w-[100px] h-[100px]' src={apashe} alt="apashe"/>
            <p className='text-[32px]'>Tran Phong</p>
            <p className='text-[20px]'>Description</p>
            <p className='pb-20 text-justify'>
            Support about football blog in this blog.
            </p>
            <div className='grid gap-0 grid-cols-4 grid-rows-1'>
            </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <Image className='rounded-md w-[100px] h-[100px]' src={ivanov} alt="ivanov"/>
            <p className='text-[32px]'>ORZ</p>
            <p className='text-[20px]'>Description</p>
            <p className='pb-20 text-justify'>
              Support about code blog in this blog.
            </p>
            <div className='grid gap-0 grid-cols-4 grid-rows-1'>
            </div>
        </div>
      </div>
    </>
  )
}

export default Credits