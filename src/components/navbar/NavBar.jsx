import React from 'react'
import Link from 'next/link'
import logo from '../../img/giphy.gif'
import Image from 'next/image'

const links = [
    {
        id: 1,
        title: "Code",
        url: "/codeblog",
    },
    {
        id: 2,
        title: "Football",
        url: "/football",
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 4,
        title: "Credits",
        url: "/credits",
    },
];

const NavBar = () => {
  return (
    <div className='z-10 fixed w-full'>
        <nav className='flex flex-row h-[80px] px-16 py-2 justify-between items-center navbar bg-gray-800'>
        {/* <nav className='flex flex-row py-2 fixed px-16 justify-between items-center navbar text-[20px]'> */}
            <Link className='px-4 py-4' href="/">
                <Image className='w-[50px] h-[50px]' src={logo} alt="logo"/>
            </Link>
            <Link className='px-4 py-4 justify-between items-center' href="/">Die Zuverlässigkeit</Link>
            <button 
                    className='flex ml-auto bg-gray-700 hover:bg-gray-600 text-white font-bold justify-between items-center px-4 py-4 w-[100px] h-[40px] rounded'
                    // onClick = {console.log("Logged Out")}
            >
                Log Out
            </button>
        </nav>
        <nav className='flex flex-row h-[56px] px-16 py-2 justify-between items-center navbar bg-gray-600'>
            <div className='flex flex-row'>
                <Link className = 'px-8 py-4 hover:bg-gray-400 rounded-md' href="/">Home</Link>
                {links.map((link) => {
                    return (
                        <Link className = 'px-8 py-4 hover:bg-gray-400 rounded-md' key={link.id} href={link.url}>
                            {link.title}
                        </Link>
                    );
                })}
            </div>
        </nav>
    </div>
  )
}

export default NavBar