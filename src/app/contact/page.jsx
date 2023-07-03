import React from 'react'
import Image from 'next/image'
import keepInTouch from '../../img/keepintouch.jpg'
const Contact = () => {
  return (
    <>
      <div className='px-16 py-8 text-[44px]'>
        <h1>Contact</h1>
        <h1>Let's Keep in Touch</h1>
        <div className='flex'>
          <div className='flex-1 w-3/5 p-8'>
            <Image src={keepInTouch} alt='keep in touch' />
          </div>
          <div className='flex-1 w-2/5'>
            <form className='flex flex-col space-y-4 text-[16px]'>
              <input type="text" placeholder='Name' className='px-2 rounded-md'/>
              <input type="text" placeholder='Email' className='px-2 rounded-md' />
              <textarea cols="30" rows="10" placeholder='Messages' className='px-2 rounded-md'></textarea>
            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Contact