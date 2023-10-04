import React from 'react'
import peopleImg1 from '@/public/assets/landing-img1.png'
import peopleImg2 from '@/public/assets/landing-img2.png'
import peopleImg3 from '@/public/assets/landing-img3.png'
import peopleImg4 from '@/public/assets/landing-img4.png'
import checkmark from '@/public/assets/check.png'
import Image from 'next/image'

export default function Headlines() {
    const headlines = [
        'Find who you are looking for in few minutes even less',
        'Trusted service providers with proven hands-on experience',
        'Money back guarantee and anti-fraud protection'
    ]
  return (
    <div className='flex flex-col items-center lg:items-start h-screen p-4 relative bg-white'>
      <h1 className='w-4/5 w-3/4 lg:w-2/3 text-center text-2xl md:text-5xl xl:text-6xl 4k:text-7xl font-monteserrat uppercase font-bold'>The solution for your plans at the tip of your fingers</h1>
      <div className='w-full flex justify-center md:order-3'>
        <div className='flex flex-wrap gap-8 md:gap-12 '>
            <Image src={peopleImg1} alt='people image 1' width={260} height={318} className='hidden min-[600px]:block md:hidden rounded-2xl lg:hidden w-[120px] h-[150px] md:w-[260px] md:h-[318px] mt-8'/>
            <Image src={peopleImg2} alt='people image 2' width={260} height={318} className='rounded-2xl lg:hidden w-[120px] h-[150px] md:w-[200px] md:h-[250px] mt-8'/>
            <Image src={peopleImg3} alt='people image 3' width={260} height={318} className='rounded-2xl w-[120px] h-[150px] md:w-[200px] md:h-[250px] xl:w-[18%] xl:h-[21vw]   mt-8 lg:absolute bottom-0 right-72'/>
            <Image src={peopleImg4} alt='people image 4' width={260} height={318} className='hidden min-[600px]:block rounded-2xl w-[120px] h-[150px] md:w-[200px] md:h-[250px] xl:w-[18%] xl:h-[21vw]   mt-8 lg:absolute top-4 right-32'/>
        </div>
      </div>
      <div className='mt-4 md:order-2 w-full lg:pt-8'>
        {
            headlines.map(el => (
                <div className='mt-2 flex justify-center w-72 min-[430px]:w-[25rem] min-[600px]:w-[30rem] min-[768px]:w-[34rem] lg:w-2/3 min-[1440px]:text-2xl '>
                    <Image src={checkmark} alt='checkmark' width={50} height={50} className='w-[2rem] h-[2rem] md:w-[50px] md:h-[50px] 4k:w-[70px] 4k:h-[70px]'  />
                    <p className='mt-2 ml-2 w-[16rem] min-[430px]:w-[23rem] min-[600px]:w-[28rem] md:w-[32rem] min-[1440px]:w-3/4 xl:text-xl 2xl:text-3xl 4k:text-5xl'>{el}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
