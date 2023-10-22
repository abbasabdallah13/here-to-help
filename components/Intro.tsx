"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import SearchSuggestion from './SearchSuggestion'
import grayPurpleBtn from '@/public/assets/gray-purple-get started.png'
import whitePurpleBtn from '@/public/assets/white-purple-get started.png'
import blurryPeopleImage from '@/public/assets/blurry-people.png'
import { useGlobalVariables } from '@/context/GlobalVariables'

export default function Intro() {
    const localStorageEmail = localStorage.getItem('email');

    const { setModalType } = useGlobalVariables()

    const [searchTerm, setSearchTerm] = useState('');
    const [introBtn, setIntroBtn] = useState(grayPurpleBtn);

    useEffect(() => {
      let introButton = document.getElementById('introBtn');
      introButton?.addEventListener('mouseover', () => {
        setIntroBtn(whitePurpleBtn)
      })
      introButton?.addEventListener('mouseout', () => {
        setIntroBtn(grayPurpleBtn)
      })
    },[])
    // const searchSuggestions = ['caterers', 'mcs', 'decorators', 'florists', 'developers']

  return (
    <div className='relative h-[85vh] flex justify-center bg-white'>
      <div className="w-[90%] flex flex-col gap-y-4 md:flex-row md:justify-between items-center">
        <div className="md:w-[35%] flex flex-col items-center order-2 md:order-1">
          <h1 className="uppercase font-monteserrat font-light text-3xl 2xl:text-5xl 4k:text-7xl text-[#8181DC] border-b-2 border-[#8181DC] pb-4">your premier destination for discovering service providers </h1>
          <p className="text-xs 2xl:text-xl 4k:text-2xl text-[#433D3D] font-light mt-2">Whether you're embarking on a personal project, nurturing a growing business, or simply seeking assistance with day-to-day tasks, our platform is your gateway to a vast network of trusted professionals ready to deliver quality services. Join us in exploring the endless possibilities of collaboration, where your vision becomes a reality</p>
          {
            !localStorageEmail && (
              <Image id="introBtn" src={introBtn} alt='get started button' className="cursor-pointer mt-8" width={120} height={50} onClick={() => setModalType('register_modal')} />
            )
          }
        </div>
        <Image src={blurryPeopleImage} alt='Blurry people image' className="md:w-[60%] order-1 md:order-2" />
      </div>
      
    </div>
  )
}
