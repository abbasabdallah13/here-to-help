"use client"

import React, { useEffect, useState } from 'react'
import { RotatingTriangles } from 'react-loader-spinner'
import serviceMockup1 from '@/public/assets/popular-services-template-1.png.png'
import serviceMockup2 from '@/public/assets/popular-services-template-2.png'
import serviceMockup3 from '@/public/assets/popular-services-template-3.png'
import serviceMockup4 from '@/public/assets/popular-services-template-4.png'
import freelancerDP from '@/public/assets/freelancer-dp.png'
import ServiceSuggestionCard from './ServiceSuggestionCard'

const categoriesChosen = ['development', 'design', 'translation','data entry'] //categories chosen to display suggestions about
const servicesSuggestionsTemplates = [
    {
        img: serviceMockup1,
        category:'Design',
        title: 'Lorem ipsum dolor sit amet consectetur',
        startingPrice: 99,
        provider: {
            img: freelancerDP,
            name: 'John Doe'
        }
    },
    {
        img: serviceMockup2,
        category:'Design',
        title: 'Lorem ipsum dolor sit amet consectetur',
        startingPrice: 99,
        provider: {
            img: freelancerDP,
            name: 'John Doe'
        }
    },
    {
        img: serviceMockup3,
        category:'Design',
        title: 'Lorem ipsum dolor sit amet consectetur',
        startingPrice: 99,
        provider: {
            img: freelancerDP,
            name: 'John Doe'
        }
    },
    {
        img: serviceMockup4,
        category:'Design',
        title: 'Lorem ipsum dolor sit amet consectetur',
        startingPrice: 99,
        provider: {
            img: freelancerDP,
            name: 'John Doe'
        }
    }
]

function ServicesSuggestions() {

    const [categoryNumber, setCategoryNumber] = useState(0);
    const [category, setCategory] = useState('development'); //default category set to the first one in the list
    const [servicesSuggestions, setServicesSuggestions] = useState(servicesSuggestionsTemplates);
    const [loading, setLoading] = useState(false)
    
    
    function changeCategory (categoryNum: any){
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        setCategory(categoriesChosen[categoryNum])
    }

    // useEffect(() => {
        // to get services from db based on chosen category but by default empty templates are displayed

        // function getServicesSuggestions() {
            // fetch(category)
            // fetch data from database based on the category chosen, can show 1st 4 options 
            // setServicesSuggestions(data)
            // break;

            // switch (category){
            //     case categoriesChosen[0]: 
            //         // fetch selected ids from db to display based on chosen category to display
            //         // setServicesSuggestions(data)
            //         // break;
            //     case categoriesChosen[1]:
            //         // fetch selected ids from db to display
            //         // setServicesSuggestions(data)
            //         // break;
            //     case categoriesChosen[2]:
            //         // fetch selected ids from db to display
            //         // setServicesSuggestions(data)
            //         // break;
            //     case categoriesChosen[3]:
            //         // fetch selected ids from db to display
            //         // setServicesSuggestions(data)
            //         // break;
            //     default:
            //         // fetch selected ids from db to display
            //         // setServicesSuggestions(data)
            //         // break;
            //    } 
        // }

        // getServicesSuggesions() //to fetch for the default category on app load
    // },[])

  return (
    <div className='flex flex-col p-4 gap-y-8 items-center h-fit lg:h-screen'>
        <h1 className='font-monteserrat font-bold text-2xl md:text-5xl xl:text-6xl 4k:text-7xl'>Popular Services</h1>
        <p className='text-[#41425B] 2xl:text-xl 4k:text-2xl font-moulpali'>Suggestions from most viewed </p>
        {/* change category select on small screens */}
        <select onChange={(e) => changeCategory(e.target.value)} className={`capitalize rounded-md px-2 py-[2px] bg-white border-[1px] border-primary-gray text-[#4682C2] lg:hidden`} >
            {
                categoriesChosen.map((category, i) => (
                    <option className='capitalize' value={i}>{category}</option>

                ))
            }
        </select>
        
        {/* change category buttons on large screens */}
        <div className='hidden lg:flex w-1/2 justify-around 2xl:text-xl 4k:text-3xl'>
            <button className={`w-[21.25%] rounded-md px-2 py-[2px] box-border ${category === categoriesChosen[0] ? `bg-white border-[1px] border-primary-gray text-[#4682C2]` : `bg-primary-gray border-0 text-black`} hover:bg-white hover:border-[1px] hover:border-primary-gray hover:text-[#4682C2]`} onClick={() => changeCategory(0)}>Development</button>
            <button className={`w-[21.25%] rounded-md px-2 py-[2px] box-border ${category === categoriesChosen[1] ? `bg-white border-[1px] border-primary-gray text-[#4682C2]` : `bg-primary-gray border-0 text-black`} hover:bg-white hover:border-[1px] hover:border-primary-gray hover:text-[#4682C2]`} onClick={() => changeCategory(1)}>Design</button>
            <button className={`w-[21.25%] rounded-md px-2 py-[2px] box-border ${category === categoriesChosen[2] ? `bg-white border-[1px] border-primary-gray text-[#4682C2]` : `bg-primary-gray border-0 text-black`} hover:bg-white hover:border-[1px] hover:border-primary-gray hover:text-[#4682C2]`} onClick={() => changeCategory(2)}>Translation</button>
            <button className={`w-[21.25%] rounded-md px-2 py-[2px] box-border ${category === categoriesChosen[3] ? `bg-white border-[1px] border-primary-gray text-[#4682C2]` : `bg-primary-gray border-0 text-black`} hover:bg-white hover:border-[1px] hover:border-primary-gray hover:text-[#4682C2]`} onClick={() => changeCategory(3)}>Data Entry</button>
        </div>
        {
            loading ? 
            <div className='flex justify-center pt-8'>
                <RotatingTriangles
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="rotating-triangels-loading"
                    wrapperStyle={{}}
                    wrapperClass="rotating-triangels-wrapper"
                />
            </div> : (
            <div className='w-full flex flex-col gap-y-8 items-center md:flex-wrap md:flex-row md:gap-x-[4%] md:justify-around xl:gap-x-[1.6%]'>
                {    
                    servicesSuggestions.map(suggestion => (
                        <ServiceSuggestionCard suggestionDetails={suggestion} />
                    ) )
                }
            </div>
            )
        }
    </div>
  )
}

export default ServicesSuggestions
