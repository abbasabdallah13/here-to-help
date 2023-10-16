import React from 'react'
import FacebookLogo from '@/public/assets/fbLogo.png'
import GithubLogo from '@/public/assets/githubLogo.png'
import GmailLogo from '@/public/assets/gmailLogo.png'
import Image from 'next/image'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useGlobalVariables } from '@/context/GlobalVariables'

function LoginModal() {
  const { setModalType } = useGlobalVariables()

  return (
    <div className='w-full md:w-[380px] min-[2000px]:w-[500px]  bg-white flex flex-col p-4 h-[70vh] justify-between font-monteserrat relative shadow-lg'>
      <AiOutlineCloseCircle className="absolute right-2 top-4 text-2xl hover:text-[#a0a0a0] cursor-pointer" onClick={() => setModalType('')}  />
      <h1 className="2xl:text-2xl">Login With</h1>
      <div>
        <div className="mb-8 2xl:mb-24">
          <div className="flex justify-center gap-x-4">
            <Image className='w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]'  src={FacebookLogo} alt='Facebook Logo' />
            <Image className='w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] '  src={GmailLogo} alt='Gmail Logo' />
            <Image className='w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] '  src={GithubLogo} alt='Github Logo' />
          </div>
          <div className="relative flex flex-col items-center justify-center w-full  ">
            <p className="bg-white relative top-[12px]">OR</p>
            <div className="bg-black w-full h-[1px]"></div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-y-2">
          <input className='w-[80%] max-w-[360px]  h-[57px] bg-[#d9d9d9] p-2 2xl:text-xl' type="text" placeholder="LOGIN" />
          <input className='w-[80%] max-w-[360px]  h-[57px] bg-[#d9d9d9] p-2 2xl:text-xl' type="password" placeholder="PASSWORD" />
          <button className="bg-[#5A58BB] w-[80%] max-w-[360px] h-[57px] text-white 2xl:text-xl hover:bg-[#080744] hover:text-white">LOGIN</button>
        </div>
      </div>
      <p className="text-xs text-center 2xl:text-lg">New user ? <span onClick={() => setModalType('register_modal')} className="text-blue-400 underline hover:text-purple-600 cursor-pointer">create an account</span></p>
    </div>
  )
}

export default LoginModal
