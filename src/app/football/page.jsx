import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import declanrice from '../../img/declanrice.jpg'
import midBayern from '../../img/midBayern.jpg'
import tonali from '../../img/tonali.jpg'
import kimminjae from '../../img/kimminjae.jpeg'
import vlahovic from '../../img/vlahovic.jpg'
const Football = () => {
  return (
    <>
      <div className='pb-8 flex px-16 md:px-6 gap-6 border-solid'>
          <div className='flex-1 flex-col w-3/5 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <div className='relative'>
              <Image 
                className='rounded-md h-[500px] z-9 w-full object-cover' 
                src={declanrice} 
                alt="declanrice"
              />
              <a href="https://www.facebook.com/photo?fbid=102352416212778&set=a.101651722949514" target="_blank">
                <div className='absolute bottom-0 w-full h-16 bg-black hover:bg-gray-700 opacity-60'>
                  <p class='px-8 pt-2 pb-4 text-white justify-center absolute'>Declan Rice có phù hợp với Bayern không?</p>
                </div>
              </a>
            </div>
          </div>
          <div className='flex flex-col w-2/5 gap-12 justify-center rounded-md'>
            <div className='flex flex-col justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
              <div className='relative'>
                <Image 
                  className='rounded-md h-[225px] z-9 w-full object-cover' 
                  src={midBayern} 
                  alt="midBayern"
                />
                <a href="https://www.facebook.com/der.zuverlassig/posts/pfbid0sXq7pENCkLmJ8SBhiETGjiNLr2LrbwZZiMuYcAXXyY46cE6DXUbSoQ8vgwjLdAXal" target="_blank">
                  <div className='absolute bottom-0 w-full h-20 bg-black hover:bg-gray-700 opacity-60'>
                    <p class='px-8 pt-2 pb-4 text-white justify-center absolute lg:text-[14px]'>Đâu là vấn đề thực sự của hàng tiền vệ Bayern?</p>
                  </div>
                </a>
              </div>
            </div>
            <div className='flex flex-col justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
              <div className='relative'>
                <Image 
                  className='rounded-md h-[225px] z-9 w-full object-cover' 
                  src={tonali} 
                  alt="tonali"
                />
                <a href="https://twitter.com/Der_Augustus/status/1669265846512885763" target="_blank">
                  <div className='absolute bottom-0 w-full h-20 bg-black hover:bg-gray-700 opacity-60'>
                    <p class='px-8 pt-2 pb-4 text-white justify-center absolute'>Sandro Tonali, người mang dáng dấp của Gattuso trong hình hài Pirlo</p>
                  </div>
                </a>
              </div>
            </div>     
          </div>
      </div>

      <div className='py-8 px-16 md:px-6 gap-6 border-solid'>
          <Link href='/football/4' className='flex pb-8'>
            <div className='flex flex-col'>
              <Image
              className='rounded-md h-[225px] z-9 w-full object-cover'
                src={kimminjae}
              />
            </div>
            <div className='flex flex-col pl-4'>
              <h1 className='text-[40px]'>Test</h1>
              <h1>Desc</h1>
            </div>
          </Link>
          <Link href='/football/5' className='flex pb-8'>
            <div className='flex flex-col'>
              <Image
              className='rounded-md h-[225px] z-9 w-full object-cover'
                src={vlahovic}
              />
            </div>
            <div className='flex flex-col pl-4'>
              <h1 className='text-[40px]'>Test</h1>
              <h1>Desc</h1>
            </div>
          </Link>
          <Link href='/football/6' className='flex pb-8'>
            <div className='flex flex-col'>
              <Image
              className='rounded-md h-[225px] z-9 w-full object-cover'
                src={kimminjae}
              />
            </div>
            <div className='flex flex-col pl-4'>
              <h1 className='text-[40px]'>Test</h1>
              <h1>Desc</h1>
            </div>
          </Link>
      </div>

      
    </>
  )
}

export default Football