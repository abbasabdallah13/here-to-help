"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import maleUser from '@/public/assets/maleUserDefaultImage.png'
import femaleUser from '@/public/assets/femaleUserDefaultImage.png'
import dropdownIcon from "@/public/assets/dropdownIcon.png"
import { useGlobalVariables } from '@/context/GlobalVariables'

function LoggedUserBadge() {
    const[userBadgeDropDown, setUserBadgeDropDown] = useState(false);

    const { setLoggedUser, loggedUser } = useGlobalVariables()

    const logout = () => {
        setLoggedUser(null);
        localStorage.removeItem('email');
    }
  return (
    <div className="hidden lg:flex gap-2 items-center relative">
      <h1 className="2xl:text-2xl 4k:text-3xl">Welcome, {loggedUser?.firstName.charAt(0).toUpperCase()}{loggedUser?.firstName.slice(1)}</h1>
      <div className="flex cursor-pointer items-center" onClick={() => setUserBadgeDropDown(prev => !prev)}>
        <Image src={loggedUser?.gender === 'male' ? maleUser : femaleUser} alt='user profile picture' width={55} height={60} className="min-[2000px]:w-[80px] min-[2000px]:h-[80px] "  />
        <Image src={dropdownIcon} alt='dropdown icon' className="ml-[2px]" width={15} height={15} />
      </div>
      {
        userBadgeDropDown && (
            <div className='absolute bottom-[-7.1rem] 2xl:bottom-[-8.99rem] 4k:bottom-[-9.5rem] right-2 p-2 bg-primary-gray flex flex-col z-[600] text-[#3939AC]'>
                <ul className='2xl:text-2xl 4k:text-3xl'>
                    <li className='cursor-pointer'>Account</li>
                    <li className='cursor-pointer'>Account</li>
                    <li className='cursor-pointer'>Account</li>
                    <li className='text-red-500 hover:text-blue-gray cursor-pointer' onClick={() => logout()}>Logout</li>
                </ul>
            </div>
        )
      }
    </div>
  )
}

export default LoggedUserBadge
