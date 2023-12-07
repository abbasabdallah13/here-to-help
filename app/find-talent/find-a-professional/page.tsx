"use client"

import { IoSearchOutline } from "react-icons/io5";
import React, { useState } from 'react'
import SearchFieldBlob from '@/public/assets/search-field-blob.png'
import Image from "next/image";

const searchSuggestions = [
  "Web Developer",
  "Data Entry",
  "Florist",
  "Designer",
  "Cleaner",
  "Event Planner",
  "Florist",
  "Designer",
  "Cleaner",
  "Event Planner",
  "Florist",
  "Designer",
  "Cleaner",
  "Event Planner",
  "Florist",
  "Designer",
  "Cleaner",
  "Event Planner",
  "Florist",
  "Designer",
  "Cleaner",
  "Event Planner",
]

function FindAProfessional() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="h-screen bg-white p-2">
      <h1 className="text-purple-one font-bold font-monteserrat text-2xl xl:text-3xl 2xl:text-4xl 4k:text-5xl">Find a professional</h1>
      <p className="font-monteserrat font-bold ml-2 mt-4 text-sm xl:text-lg 2xl:text-xl ">Lorem ipsum dolor sit amet consectetur. Gravida hendrerit faucibus dui leo molestie nullam massa facilisi a</p>
      <div className="flex flex-col justify-center md:h-[60vh]">
        <div className="w-full flex justify-center">
          <div className="w-[95%] md:w-3/4 relative flex mt-4">
            <input type="text" className="bg-primary-gray w-full 2xl:h-16 p-2 z-20 xl:text-lg 2xl:text-xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='what you are looking for today ?'  />
            <button className="w-[15%] max-w-[56px] bg-purple-one flex justify-center items-center z-20">
              <IoSearchOutline className="text-white text-3xl font-bold" />
            </button>
            <Image className="hidden md:block absolute right-[-1rem] top-[-5rem] z-10"  src={SearchFieldBlob} alt="blob" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[95%] md:w-3/4 flex flex-wrap gap-4 mt-4 ml-4 z-20">
              {
                searchSuggestions?.map(term => (
                  <span className="text-[#7A81A3] underline cursor-pointer font-monteserrat font-bold text-normal xl:text-lg 2xl:text-xl" onClick={() => setSearchTerm(term)}>{term}</span>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindAProfessional