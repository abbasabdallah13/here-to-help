"use client"

import React, { useRef, useEffect, useState } from 'react'
import logo from '@/public/assets/logo.png'
import burgerMenu from '@/public/assets/burger-menu.png'
import Image from 'next/image'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    const [pagesOverlay, setPagesOverlay] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        const pagesLink = document.getElementById('pagesLink')
        pagesLink?.addEventListener('mouseover', () => {
            setPagesOverlay(true)
        })
        pagesLink?.addEventListener('mouseout', () => {
            setPagesOverlay(false)
        })
    }, [])

  return (
    <div className='relative bg-white px-4 py-2 flex items-center justify-between w-full h-[15vh]'>
        <div className='flex items-center'>
            <Image src={logo} alt='logo' width={100} height={100} className='w-20 h-20 md:w-[90px] md:h-[90px] 2xl:w-[120px] 2xl:h-[120px] 4k:w-[160px] 4k:h-[160px]' />
            {/* navlinks on desktops */}
            <ul className='text-purple-one font-monda font-bold text-sm 2xl:text-2xl 4k:text-3xl hidden lg:block'>
                <li className='inline-block ml-12'>Find Talent</li>
                <li className='inline-block ml-12'>Why Us ?</li>
                <li className='inline-block ml-12'>Contact</li>
                <li className='inline-block ml-12' id='pagesLink'>
                    <div className='flex items-center relative cursor-pointer'>
                        Pages 
                        <IoMdArrowDropdown className='2xl:mt-[8px] text-2xl 2xl:text-5xl 4k:text-7xl' />
                        {
                            pagesOverlay && (
                                <div className='px-4 py-2 bg-primary-gray absolute left-0 top-6 w-40 text-sm 2xl:text-2xl 4k:text-3xl z-[5]'>
                                    <li className='hover:text-blue-gray cursor-pointer'>About</li>
                                    <li className='mt-4 hover:text-blue-gray cursor-pointer'>Pricing</li>
                                    <li className='mt-4 hover:text-blue-gray cursor-pointer'>FAQs</li>
                                    <li className='mt-4 hover:text-blue-gray cursor-pointer'>Terms</li>
                                </div>
                            )
                        }
                    </div>
                </li>
            </ul>
        </div>
        {/* login button on desktops */}
        <div className='flex flex-col justify-center items-center hidden lg:block'>
            <div className='login-button-container mr-8'>
                <button className='login-button font-mogra w-28 h-12 xl:w-40 xl:h-20 text-md xl:text-3xl rounded-full'>
                    Login
                </button>
                <div className="login-black-bg"></div>
            </div>
            <a className='ml-10 xl:ml-12 mt-[5px] text-xs xl:text-xl lowercase underline text-blue hover:text-purple-one cursor-pointer'>Register</a>
        </div>

        {/* burger menu */}
        {
            !openSidebar ? 
            <div className='lg:hidden'><Image src={burgerMenu} alt='burger menu' width={50} height={50} onClick={() => setOpenSidebar(true)} /></div> : 
            <div className='w-full flex justify-center absolute top-4 left-0'><AiOutlineClose fontSize={'2rem'} style={{position:'relative', right:'1.5rem'}}  onClick={() => setOpenSidebar(false)} /></div>
        }
        {
            openSidebar && (
                <div className='w-1/2 h-screen py-4 px-2 bg-primary-gray absolute top-0 right-0 z-[5]'>
                    <ul className='text-purple-one font-monda font-bold text-lg'>
                        <li className='mt-6'>Find Talent</li>
                        <li className='mt-6'>Why Us ?</li>
                        <li className='mt-6'>Contact</li>
                        <li className='mt-6'>About</li>
                        <li className='mt-6'>Pricing</li>
                        <li className='mt-6'>FAQs</li>
                        <li className='mt-6'>Terms</li>
                    </ul>
                    <div className='flex flex-col justify-center items-center mt-12'>
                        <div className='login-button-container mr-8'>
                            <button className='login-button font-mogra rounded-3xl w-28 h-12'>
                                Login
                            </button>
                            <div className="login-black-bg"></div>
                        </div>
                        <a className='mr-6 mt-[5px] text-sm lowercase underline text-blue hover:text-purple-one cursor-pointer'>Register</a>
                        </div>
                    </div>
            )

        }
    </div>
  )
}

export default Navbar
