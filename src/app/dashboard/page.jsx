"use client"
import React, { useEffect, useState } from 'react';
import notFound from 'next/navigation'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import swr from 'swr'

const Dashboard = () => {
  // const [data,setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const {data, error, isLoading} = swr('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data);

  return (
    <div className='px-16 py-8 text-[44px]'>
      Dashboard
    </div>
  )
}

export default Dashboard