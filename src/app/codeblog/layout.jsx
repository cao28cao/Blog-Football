import React from 'react'

export const metadata = {
  title: 'Code Blog',
  description: 'Die Zuverlässigkeit Blog',
}

const BlogLayout = ({children}) => {
  return (
    <div className='px-16 py-8'>
        <h1 className='text-[44px]'>Code</h1>
        {children}
    </div>
  )
}

export default BlogLayout