"use client"

import React, { useEffect, useState, useRef } from 'react'
import { useSession } from 'next-auth/react'
import logo from '@/public/assets/logo.png'
import burgerMenu from '@/public/assets/burger-menu.png'
import Image from 'next/image'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { useGlobalVariables } from '@/context/GlobalVariables'
import LoggedUserBadge from './LoggedUserBadge'
import MobileLoggedUserBadge from './MobileLoggedUserBadge'

function Navbar() {
    const navlinks = [
        {title: 'Find a professional', href: "/find-talent/find-a-professional"},
        {title: 'Browse Packages', href: "#"},
        {title: 'Post a Job Offer', href: "#"},
        {title: 'Post a Package', href: "#"},
        {title: 'Search for Jobs', href: "#"},
        {title: 'About', href: "#"},
        {title: 'Pricing', href: "#"},
        {title: 'FAQs', href: "#"},
        {title: 'Contact', href: "#"},
        {title: 'Terms', href: "#"},
    ];

    const [findTalentOverlay, setFindTalentOverlay] = useState(false);
    const [findJobOverlay, setFindJobOverlay] = useState(false)
    const [pagesOverlay, setPagesOverlay] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userBadgeDropDown, setUserBadgeDropDown] = useState(false);
    const excludeComponentRef = useRef(null);

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


    useEffect(()=>{
        if(session) {
            localStorage.setItem('email', JSON.stringify(session?.user?.email))
        }
    },[session])

  
    let localStorageEmail;
    useEffect(() => {
        // to get logged user on any page
            localStorageEmail = JSON.parse(localStorage.getItem('email'))
           
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

    const anywhereClick = (event) => {
        if(!excludeComponentRef?.current?.contains(event.target)){
            setUserBadgeDropDown(false)
        }
    }

    useEffect(() => {
        if(excludeComponentRef.current){
            document.addEventListener('click', anywhereClick)
        }

        return () => document.removeEventListener("click", anywhereClick)

    }, [userBadgeDropDown])

  return (
    <div className='relative bg-white px-4 py-2 flex items-center justify-between w-full h-[15vh]'>
        <div className='flex items-center h-full'>
            <a href="/">
                <Image src={logo} alt='logo' width={100} height={100} className='w-16 h-16 md:w-[70px] md:h-[70px] lg:w-[85px] lg:h-[85px] 2xl:w-[120px] 2xl:h-[120px] 4k:w-[160px] 4k:h-[160px]' />
            </a>
            {/* navlinks on desktops */}
            <ul className='text-purple-one font-monda font-bold text-sm 2xl:text-2xl 4k:text-3xl hidden lg:block'>
                        <li className='inline-block ml-12' id={'findTalent'}>
                            <div className='flex items-center relative cursor-pointer'>
                            {'Find Talent'} 
                            <IoMdArrowDropdown className='2xl:mt-[8px] text-2xl 2xl:text-5xl 4k:text-7xl' />
                            {
                                findTalentOverlay  && (
                                    <div className='px-4 py-2 bg-primary-gray absolute left-0 top-6 2xl:top-12 4k:top-16 4k:w-fit w-40 text-sm 2xl:text-2xl 4k:text-3xl z-[5]'>
                                         {
                                                navlinks.slice(0,3).map((navlink, i) => (
                                                    <li className={`${i>0 && 'mt-4'} hover:text-blue-gray cursor-pointer`}>
                                                        <a href={navlink.href}>{navlink?.title}</a>
                                                    </li>
                                                ))
                                        }
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
                                        {
                                                navlinks.slice(3,5).map((navlink, i) => (
                                                    <li className={`${i>0 && 'mt-4'} hover:text-blue-gray cursor-pointer`}>
                                                        <a href={navlink.href}>{navlink?.title}</a>
                                                    </li>
                                                ))
                                        }
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
                                                navlinks.slice(5).map((navlink, i) => (
                                                    <li className={`${i>0 && 'mt-4'} hover:text-blue-gray cursor-pointer`}>
                                                        <a href={navlink.href}>{navlink?.title}</a>
                                                    </li>
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
                    <div className='relative cursor-pointer mr-8'>
                        <button onClick={() => {setModalType({type: 'login_modal'})}} className='relative bg-white border-[5px] border-black rounded-full font-mogra w-28 min-[2400px]:w-36 h-12 2xl:h-14 min-[2400px]:h-20 text-md xl:text-xl 2xl:text-2xl min-[2400px]:text-4xl duration-500 cursor-pointer z-[3] hover:translate-x-1 hover:translate-y-1'>
                            Login
                        </button>
                        <div className="w-28 min-[2400px]:w-36 h-10 min-[2400px]:h-16 2xl:h-11 absolute top-3.5 2xl:top-5 min-[2400px]:top-6 left-2 bg-black rounded-full z-[1]"></div>
                    </div>
                    <a onClick={() => setModalType({type: 'register_modal'})} className='ml-10 xl:ml-8 2400:ml-9 relative 2xl:top-1 text-xs xl:text-sm 2400:text-xl lowercase underline text-blue hover:text-purple-one cursor-pointer'>Register</a>
                </div>
            ) : (
                <LoggedUserBadge excludeComponentRef={excludeComponentRef} userBadgeDropDown={userBadgeDropDown} setUserBadgeDropDown={setUserBadgeDropDown} />
            ) 
        }
        

        {/* burger menu */}
        {
            !openSidebar ? 
            <div className='lg:hidden'><Image src={burgerMenu} alt='burger menu' width={40} height={40} onClick={() => setOpenSidebar(true)} /></div> : 
            <AiOutlineClose fontSize={'2rem'} className="absolute right-[180px]" onClick={() => setOpenSidebar(false)} />
        }
        {
            openSidebar && (
                <div className='w-[170px] h-screen py-4 px-2 bg-primary-gray fixed top-0 right-0 z-[99]'>
                    <ul className='text-purple-one font-monda font-bold text-sm'>
                        {/* user badge above links if user logged in */}
                        {
                            loggedUser && (
                                <MobileLoggedUserBadge />
                            )
                        }
                        {
                            navlinks.map(navlink => (
                                <li className='mt-4'>
                                    <a href={navlink?.href}>
                                        {navlink?.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    {
                        !loggedUser && (
                            <div className='flex flex-col justify-center items-center mt-12'>
                                <div className='relative cursor-pointer mr-8'>
                                    <button onClick={() => {setModalType({type: 'login_modal'}); setOpenSidebar(false)}}  className='bg-white border-[5px] border-black rounded-3xl font-mogra w-28 h-12 2xl:h-14 text-md xl:text-xl 2xl:text-2xl duration-500 cursor-pointer z-[3] font-mogra'>
                                        Login
                                    </button>
                                </div>
                                <a onClick={() => {setModalType({type: 'register_modal'}); setOpenSidebar(false)}} className='mr-6 mt-[5px] text-sm lowercase underline text-blue hover:text-purple-one cursor-pointer'>Register</a>
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
