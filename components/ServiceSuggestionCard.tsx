import Image from 'next/image'
import React, { useEffect } from 'react'

const ServiceSuggestionCard = ({suggestionDetails: { img, category, title, startingPrice, provider } } : Props) => {

  return (
    <div className='w-[80%] max-w-[300px] md:w-[20%] xl:w-[23%] xl:max-w-none 4k:max-w-[588px] shadow-md'>
        <Image className='w-full'  src={img} alt='service image' />
        <div className='p-2 bg-dark-gray'>
            <h1 className='text-md 2xl:text-xl 4k:text-3xl text-white font-moulpali'>{category}</h1>
            <h1 className='text-lg 2xl:text-2xl 4k:text-4xl font-monteserrat font-bold'>{title}</h1>
        </div>
        <div className='flex p-2 justify-between items-center bg-[#E8FCFF] text-xs 2xl:text-lg 4k:text-2xl'>
            <p className='text-[#7d7d7d]'>starting {startingPrice}$</p>
            <div className='flex items-center gap-x-2 text-black'>
                <Image src={provider?.img} width={20} height={20} alt='service provider display picture' />
                <h1>{provider?.name}</h1>
            </div>
        </div>
    </div>
  )
}

export default ServiceSuggestionCard
