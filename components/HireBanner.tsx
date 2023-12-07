'use client'

import React, {useState, useEffect} from 'react'
import PersonBanner from '@/public/assets/bannerPerson.png'
import ColorfulGrayBtn from '@/public/assets/colorfulBtn-gray.png'
import ColorfulWhiteBtn from '@/public/assets/colorfulBtn-white.png'
import Image from 'next/image'

const HireBanner = () => {
    let localStorageEmail;
    useEffect(() => {
        localStorageEmail = localStorage.getItem('email');
    },[])
    const [buttonImage,setButtonImage] = useState(ColorfulGrayBtn)

    useEffect(() => {
        let colorfulBtn = document.getElementById('colorfulBtn');
        colorfulBtn?.addEventListener('mouseover', () => {
            setButtonImage(ColorfulWhiteBtn)
        })
        colorfulBtn?.addEventListener('mouseout', () => {
            setButtonImage(ColorfulGrayBtn)
        })
    },[])

  return (
    <div className='relative bg-[#FFEBE0] h-[40vh] mt-8 md:mt-[30vh] lg:mt-20 xl:mt-16'>
        <div className='flex flex-col items-center justify-around h-full w-fit p-4 lg:p-0 lg:ml-40'>
            <h1 className='font-monteserrat font-bold text-2xl min-[1300px]:text-4xl 2xl:text-5xl 4k:text-7xl text-center lg:text-left'>Grow your business with talented people</h1>
            <p className='font-moulpali text-[#535353] text-center lg:text-left text-sm min-[1300px]:text-xl 2xl:text-2xl 4k:text-4xl'>Advertise your jobs to millions of users and search between millions of resumes</p>
            {
                !localStorageEmail && (
                    <Image className='w-[200px] h-[65px] 2xl:w-[260px] 2xl:h-[90px] 4k:w-[340px] 4k:h-[120px] cursor-pointer' id='colorfulBtn' src={buttonImage} alt='button' />
                )
            }
        </div>
        <Image className="hidden md:block absolute bottom-0 md:right-[-1.3rem] lg:right-8 h-[450px] w-[300px] 2xl:h-[600px] 2xl:w-[450px] 4k:h-[900px] 4k:w-[650px]" src={PersonBanner} alt='banner person' />
    </div>
  )
}

export default HireBanner
