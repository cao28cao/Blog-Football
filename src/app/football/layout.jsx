import React from 'react'

const BlogLayout = ({children}) => {
  return (
    <div className='px-16 py-8'>
        {/* <h1 className='text-[44px]'>Hi this's a code blog</h1> */}
        {children}
    </div>
  )
}

export default BlogLayout