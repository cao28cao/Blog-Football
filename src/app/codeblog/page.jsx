import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import overload from '../../img/overload.jpg'
import promises from '../../img/promises.png'
import CRAvsVite from '../../img/cravsv.jpg'
const Code = () => {
  return (
    <>
      <div className='flex px-16 md:px-6 gap-6 border-solid'>
        <div className='flex-1 flex-col w-3/5 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
          <div className='relative'>
            <Image 
              className='rounded-md h-[550px] z-9 w-full object-cover' 
              src={overload} 
              alt="overload"
            />
            <a href="/codeblog/oop">
              <div className='absolute bottom-0 w-full h-16 bg-black hover:bg-gray-700 opacity-60'>
                <p class='px-8 pt-2 pb-4 text-white justify-center absolute'>
                  Overloadding trong OOP
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className='flex flex-col w-2/5 gap-12 justify-center rounded-md'>
          <div className='flex flex-col justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <div className='relative'>
            <Image 
              className='rounded-md h-[250px] z-9 w-full object-cover' 
              src={promises} 
              alt="promises"
            />
              <a href="/codeblog/js">
                <div className='absolute bottom-0 w-full h-20 bg-black hover:bg-gray-700 opacity-60'>
                  <p class='px-8 pt-2 pb-4 text-white justify-center absolute lg:text-[14px]'>
                    Promises trong JavaScript
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='flex flex-col justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <div className='relative'>
            <Image 
              className='rounded-md h-[250px] z-9 w-full object-cover' 
              src={CRAvsVite} 
              alt="CRAvsVite"
            />
              <a href="/codeblog/cra">
                <div className='absolute bottom-0 w-full h-20 bg-black hover:bg-gray-700 opacity-60'>
                  <p class='px-8 pt-2 pb-4 text-white justify-center absolute'>
                    Create React App hay Vite?
                    </p>
                </div>
              </a>
            </div>
          </div>     
          </div>
      </div>
    </>
  )
}

export default Code