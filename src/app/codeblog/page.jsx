import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import overload from '../../img/overload.jpg'
import promises from '../../img/promises.png'
import CRAvsVite from '../../img/cravsv.jpg'

const Code = () => {
  return (
      <div className='flex flex-row px-16 md:px-6 gap-6 border-solid'>
        <h1 className='flex flex-row'>Choose a gallery</h1>
        <div>
          <div className='flex-1 flex-row w-3/5 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <div className='relative'>
              <Link href='/codeblog/oop'>
                <Image src={overload} alt='overload' />
                <span>Object-Oriented Programming</span>
              </Link>
            </div>
          </div>
          <div className='flex-1 flex-row w-3/5 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <div className='relative'>
              <Link href='/codeblog/js'>
                <Image src={promises} alt='promises' />
                <span>JavaScript and its framework</span>
              </Link>
            </div>
          </div>
          <div className='flex-1 flex-row w-3/5 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
            <div className='relative'>
              <Link href='/codeblog/dtb'>
                <Image src={CRAvsVite} alt='CRAvsVite' />
                <span>Database, SQL, NoSQL</span>
              </Link>
            </div>
          </div>
        </div>
        
      </div>

  )
}

export default Code