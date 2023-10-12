import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col bg-[#222222] text-white h-20vh'>
        <div className='p-4 flex flex-col md:flex-row justify-around'>
            <div className="flex flex-col gap-y-2">
                <p className='font-bold'>About</p>
                <p>About Us</p>
                <p>Become a Seller</p>
                <p>Jobs</p>
                <p>Pricing</p>
                <p>Services</p>
                <p>Terms</p>
            </div>
            <div className="flex flex-col gap-y-2">
                <p className='font-bold'>Categories</p>
                <p>Design & Creative</p>
                <p>Development & IT</p>
                <p>Music & Audio</p>
                <p>Programming & Tech</p>
                <p>Digital Marketing</p>
                <p>Finance & Accounting</p>
            </div>
            <div className="flex flex-col gap-y-2">
            <p className='font-bold'>Support</p>
                <p>Help</p>
                <p>FAQ</p>
                <p>Terms of Service</p>
                <p>Contact Us</p>
            </div>
            <div className="flex flex-col gap-y-2">
            <p>Subscribe</p> 
            <input type="text" />
            </div>
        
        </div>
        <div className="border-t-[1px] text-center text-white text-xs p-[2px]">
            All Rights Reserved - 2023
        </div>
    </div>
  )
}

export default Footer
