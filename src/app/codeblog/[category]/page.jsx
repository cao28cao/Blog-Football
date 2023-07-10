import React from 'react'
import Image from 'next/image'
import oop from '../../../img/oop.jpg'

const BlogLayout = ({params}) => {
  console.log(params)
  return (
    <div className='px-8 py-4'>
        <h1 className='text-[44px]'>{params.category}</h1>
        <div className='flex'>
          <div className='flex flex-col px-16 justify-center'>
            <div>
              <h1 className='text-[40px]'>Test</h1>
              <h1>Desc</h1>
              <button 
                      className='flex bg-gray-700 hover:bg-gray-600 text-white font-bold justify-between items-center px-4 py-4 w-[100px] h-[60px] rounded'
                      // onClick = {console.log("Logged Out")}
              >
                  See More
              </button>
            </div>
          </div>
          <div className='flex flex-col px-16 ml-auto'>
            <Image
            className='rounded-md relative h-[500px] w-[500px]'
            src={oop}
            />
          </div>
        </div>
        <div className='flex odd:flex-row-reverse'>
          <div className='flex flex-col px-16 justify-center ml-auto'>
            <div>
              <h1 className='text-[40px]'>Test</h1>
              <h1>Desc</h1>
              <button 
                      className='flex bg-gray-700 hover:bg-gray-600 text-white font-bold justify-between items-center px-4 py-4 w-[100px] h-[60px] rounded'
                      // onClick = {console.log("Logged Out")}
              >
                  See More
              </button>
            </div>
          </div>
          <div className='flex flex-col px-16'>
            <Image
            className='rounded-md relative h-[500px] w-[500px]'
            src={oop}
            />
          </div>
        </div>    
    </div>
  )
}

export default BlogLayout