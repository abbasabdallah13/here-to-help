"use client"

import React, { useEffect, useState, useContext } from 'react'
import { useSession } from 'next-auth/react'
import logo from '@/public/assets/logo.png'
import burgerMenu from '@/public/assets/burger-menu.png'
import Image from 'next/image'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { useGlobalVariables } from '@/context/GlobalVariables'
import { RotatingTriangles } from 'react-loader-spinner'
import LoggedUserBadge from './LoggedUserBadge'
import MobileLoggedUserBadge from './MobileLoggedUserBadge'

function Navbar() {
    const navlinks = ['Find Talent', 'Find Job', 'About', 'Pricing', 'FAQs', 'Contact', 'Terms'];

    const [findTalentOverlay, setFindTalentOverlay] = useState(false);
    const [findJobOverlay, setFindJobOverlay] = useState(false)
    const [pagesOverlay, setPagesOverlay] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const [loading, setLoading] = useState(false);

    const { data:session } = useSession();

    const { modalType, setModalType, loggedUser, setLoggedUser } = useGlobalVariables();

// navbar links overlays code

    useEffect(() => {
        const findTalentLink = document.getElementById('findTalent')
        const findJobLink = document.getElementById('findJob')
        const pagesLink = document.getElementById('pagesLink')
        findTalentLink?.addEventListener('mouseover', () => {
            setFindTalentOverlay(true)
        })
        findTalentLink?.addEventListener('mouseout', () => {
            setFindTalentOverlay(false)
        })

        findJobLink?.addEventListener('mouseover', () => {
            setFindJobOverlay(true)
        })
        findJobLink?.addEventListener('mouseout', () => {
            setFindJobOverlay(false)
        })

        pagesLink?.addEventListener('mouseover', () => {
            setPagesOverlay(true)
        })
        pagesLink?.addEventListener('mouseout', () => {
            setPagesOverlay(false)
        })
    }, [])

    // local storage mail code

    let localStorageEmail: any;

    useEffect(()=>{
        if(session) localStorage.setItem('email', session?.user?.email)
    },[session])

  

    useEffect(() => {
        // to get logged user on any page
            localStorageEmail = localStorage.getItem('email');
           
            if(localStorageEmail){
            const getUser = async(email: string) => {
                setLoading(true);
                const response = await fetch('/api/get-user', {
                    method: 'POST',
                    body: JSON.stringify({email})
                })
                const { user } = await response.json();
                setLoggedUser(user)
                setLoading(false);
            }
            getUser(localStorageEmail)
        }
    },[modalType, session])

  return (
    <div className='relative bg-white px-4 py-2 flex items-center justify-between w-full h-[15vh]'>
        <div className='flex items-center h-full'>
            <Image src={logo} alt='logo' width={100} height={100} className='w-20 h-20 md:w-[70px] md:h-[70px] 2xl:w-[120px] 2xl:h-[120px] 4k:w-[160px] 4k:h-[160px]' />
            {/* navlinks on desktops */}
            <ul className='text-purple-one font-monda font-bold text-sm 2xl:text-2xl 4k:text-3xl hidden lg:block'>
                        <li className='inline-block ml-12' id={'findTalent'}>
                            <div className='flex items-center relative cursor-pointer'>
                            {'Find Talent'} 
                            <IoMdArrowDropdown className='2xl:mt-[8px] text-2xl 2xl:text-5xl 4k:text-7xl' />
                            {
                                findTalentOverlay  && (
                                    <div className='px-4 py-2 bg-primary-gray absolute left-0 top-6 2xl:top-12 4k:top-16 4k:w-fit w-40 text-sm 2xl:text-2xl 4k:text-3xl z-[5]'>
                                        <li className={`hover:text-blue-gray cursor-pointer`}>Find a professional</li>
                                        <li className={`mt-4 hover:text-blue-gray cursor-pointer`}>Browse Packages</li>
                                        <li className={`mt-4 hover:text-blue-gray cursor-pointer`}>Post a Job Offer</li>
                                    </div>
                                )
                            }
                            </div>
                        </li>
                        <li className='inline-block ml-12' id={'findJob'}>
                            <div className='flex items-center relative cursor-pointer'>
                            {'Find Job'} 
                            <IoMdArrowDropdown className='2xl:mt-[8px] text-2xl 2xl:text-5xl 4k:text-7xl' />
                            {
                                findJobOverlay  && (
                                    <div className='px-4 py-2 bg-primary-gray absolute left-0 top-6 2xl:top-12 4k:top-16 4k:w-fit w-40 text-sm 2xl:text-2xl 4k:text-3xl z-[5]'>
                                        <li className={`hover:text-blue-gray cursor-pointer`}>Post a Package</li>
                                        <li className={`mt-4 hover:text-blue-gray cursor-pointer`}>Search for Jobs</li>
                                    </div>
                                )
                            }
                            </div>
                        </li>
                        <li className='inline-block ml-12' id='pagesLink'>
                            <div className='flex items-center relative cursor-pointer'>
                                Pages 
                                <IoMdArrowDropdown className='2xl:mt-[8px] text-2xl 2xl:text-5xl 4k:text-7xl' />
                                {
                                    pagesOverlay && (
                                        <div className='px-4 py-2 bg-primary-gray absolute left-0 top-6 2xl:top-12 4k:top-16 4k:w-fit w-40 text-sm 2xl:text-2xl 4k:text-3xl z-[5]'>
                                            {
                                                navlinks.slice(2).map((navlink, i) => (
                                                    <li className={`${i>0 && 'mt-4'} hover:text-blue-gray cursor-pointer`}>{navlink}</li>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </li>
            </ul>
        </div>
        {/* login button on desktops */}
        {
            !loggedUser ? (
                <div className='flex flex-col justify-center items-center hidden lg:block'>
                    <div className='login-button-container mr-8'>
                        <button onClick={() => {console.log('test'); setModalType('login_modal')}}  className='login-button font-mogra w-28 h-12 xl:w-40 xl:h-20 text-md xl:text-3xl rounded-full'>
                            Login
                        </button>
                        <div className="login-black-bg"></div>
                    </div>
                    <a onClick={() => setModalType('register_modal')} className='ml-10 xl:ml-12 mt-[5px] text-xs xl:text-xl lowercase underline text-blue hover:text-purple-one cursor-pointer'>Register</a>
                </div>
            ) : (
                <LoggedUserBadge />
            ) 
        }
        

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
                        {/* user badge above links if user logged in */}
                        {
                            loggedUser && (
                                <MobileLoggedUserBadge />
                            )
                        }
                        {
                            navlinks.map(navlink => (
                                <li className='mt-6'>{navlink}</li>
                            ))
                        }
                    </ul>
                    {
                        !loggedUser && (
                            <div className='flex flex-col justify-center items-center mt-12'>
                                <div className='login-button-container mr-8'>
                                    <button onClick={() => {setModalType('login_modal'); setOpenSidebar(false)}}  className='login-button font-mogra rounded-3xl w-28 h-12'>
                                        Login
                                    </button>
                                    <div className="login-black-bg"></div>
                                </div>
                                <a onClick={() => {setModalType('register_modal'); setOpenSidebar(false)}} className='mr-6 mt-[5px] text-sm lowercase underline text-blue hover:text-purple-one cursor-pointer'>Register</a>
                            </div>
                        ) 
                    }

                    </div>
            )

        }
    </div>
  )
}

export default Navbar
