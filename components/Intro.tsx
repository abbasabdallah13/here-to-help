"use client"

import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import SearchSuggestion from './SearchSuggestion'

export default function Intro() {
    const [searchTerm, setSearchTerm] = useState('');

    const searchSuggestions = ['caterers', 'mcs', 'decorators', 'florists', 'developers']

  return (
    <div className='intro h-[85vh] flex flex-col justify-center items-center gap-6'>
      <div className='black-overlay'></div>
      <h1 className='text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 4k:text-7xl px-4 md:px-0 text-center font-monteserrat text-white uppercase z-[3]'>Find Service Providers for Your Special Needs</h1>
      <div className='flex justify-center w-full'>
        <div className='flex justify-center items-center w-3/4 md:w-[50%]'>
          <input className='p-4 rounded-md mt-4 z-[3] w-[80%] md:text-2xl 2xl:text-3xl 4k:text-5xl' type='text' placeholder='What are you looking for ...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button className='w-[20%] max-w-[77px] bg-logo-yellow hover:bg-[#E4D589] hover:text-white duration-800 flex items-center justify-center rounded-tr-lg rounded-br-lg p-4 mt-4 relative right-2 z-[3]'>
              <BsSearch className="text-2xl md:text-[2.1rem] min-[1800px]:text-4xl 4k:text-6xl" />
          </button>
        </div>
      </div>
      <div className='w-1/2 flex flex-wrap justify-center gap-2 mt-2 z-[3]'>
        {
            searchSuggestions.map(el => (
                <SearchSuggestion term={el} setSearchTerm={setSearchTerm} />
            ))
        }
      </div>
    </div>
  )
}
