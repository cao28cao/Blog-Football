import React from "react";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const BlogLayout = ({params}) => {
  const data = getData(params.category);
  return (
    <div className='px-8 py-4'>
      <h1 className='text-[44px]'>{params.category}</h1>
      {data.map(item=>(
        <div key={item.id}>
          <div>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>Read More</button>
            <Image
              className='flex flex-col z-9 object-cover'
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}      
    </div>
  )
}

export default BlogLayout