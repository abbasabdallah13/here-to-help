"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import freelanceImage from '@/public/assets/freelancing.png'
import blueGrayButton from '@/public/assets/gray-blu-btn.png'
import blueWhiteButton from '@/public/assets/white-blu-btn.png'

const Freelancing = () => {
    const [buttonSource, setButtonSource] = useState(blueGrayButton)

    useEffect(() => {
        let freeLanceButton = document.getElementById('JoinAsAFreelanceBtn');
        freeLanceButton?.addEventListener('mouseover', () => {
            setButtonSource(blueWhiteButton);
            console.log('test')
        })
        freeLanceButton?.addEventListener('mouseout', () => {
            setButtonSource(blueGrayButton);
        })

    },[])

  return (
    <div className='h-screen flex flex-col items-center justify-center p-4 bg-white'>
        <h1 className='w-[80vw] font-bold text-center text-2xl md:text-5xl xl:text-6xl 4k:text-7xl font-monteserrat'>Embrace the freedom of freelancing, where your office can be anywhere you choose</h1>
        <div className='flex flex-col lg:flex-row items-center mt-8 gap-4 lg:gap-12 4k:gap-44'>
            <Image className="lg:order-2 w-3/4 max-w-[356px] xl:max-w-[500px] 4k:max-w-[700px]" src={freelanceImage} alt='freelancer image' width={472} height={393} />
            <div className='flex flex-col justify-center items-center gap-x-12 lg:order-1 4k:mt-20'>
                <div className='box-container'>
                    <div className='box-top'></div>
                    <div className='box text-sm lg:text-md 2xl:text-lg 4k:text-3xl p-2 text-justify'>
                        Working online as a freelancer offers an unparalleled opportunity for professional and personal growth. Imagine a career where you have the flexibility to set your own hours, choose the projects that align with your passion, and work from the comfort of your own space. As a freelancer, you're not confined to a traditional office or limited by geographical boundaries. Instead, you have the entire digital world at your fingertips.
                    </div>
                </div>
                <div id='JoinAsAFreelanceBtn' className='relative cursor-pointer font-monteserrat font-bold text-white hover:text-black mt-4'>
                    <Image className='w-[70vw] max-w-[224px] 4k:max-w-[380px] h-20 4k:h-40' src={buttonSource} alt='button' width={301} height={91} />
                    <h1 className='absolute text-md 4k:text-3xl top-6 4k:top-12 left-[1.2rem] 4k:left-[1.4rem]'>Join As a Freelancer</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Freelancing
