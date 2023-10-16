import React from 'react'
import Image from 'next/image'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useGlobalVariables } from '@/context/GlobalVariables'

function RegisterModal() {
    const { setModalType } = useGlobalVariables()

  return (
    <div className='w-full md:w-[380px] min-[2000px]:w-[500px]  bg-white flex flex-col p-4 h-[80vh] justify-between font-monteserrat relative shadow-lg'>
      <AiOutlineCloseCircle className="absolute right-2 top-4 text-2xl hover:text-[#a0a0a0] cursor-pointer" onClick={() => setModalType('')}  />
      <h1 className="text-2xl 2xl:text-2xl">Register</h1>
      <div>

        <div className="w-full flex flex-col items-center gap-y-2">
          <input className='w-[100%] max-w-[360px]  h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' type="text" placeholder="First Name" />
          <input className='w-[100%] max-w-[360px]  h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' type="text" placeholder="Last Name" />
          <input className='w-[100%] max-w-[360px]  h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' type="password" placeholder="PASSWORD" />
          <input className='w-[100%] max-w-[360px]  h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' type="password" placeholder="confirm PASSWORD" />
          <button className="bg-[#080744] w-[100%] max-w-[360px] h-[57px] text-white 2xl:text-5xl uppercase hover:bg-[#BBBAFF] hover:text-black ">Create Account</button>
        </div>
      </div>
      <p className="text-xs text-center 2xl:text-lg">Already registered ? <span onClick={() => setModalType('login_modal')} className="text-blue-400 underline hover:text-purple-600 cursor-pointer">login</span></p>
    </div>
  )
}

export default RegisterModal
