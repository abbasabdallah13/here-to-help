"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useGlobalVariables } from '@/context/GlobalVariables';


function UpdateForgottenPassword() {
    const router = useRouter();
    const { setLoggedUser, setModalType, modalType } = useGlobalVariables()

    const [updatePasswordBannerMessage, setUpdatePasswordBannerMessage] = useState('Enter your new password')

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    async function updatePassword(e){
        e.preventDefault();
        const response = await fetch('/api/forgot-password/update-password', {
            method: "POST",
            body: JSON.stringify({email: modalType.email, password, confirmPassword})
        })

        const { user, message } = await response.json();

        message === 'updated' ? setUpdatePasswordBannerMessage('Your password has been updated') : setUpdatePasswordBannerMessage(message)

        if(message === 'updated'){
            setTimeout(() => {
               setModalType({type: ''})
               localStorage.setItem('email', JSON.stringify(modalType.email))
               router.push('/')
            },1000)
        }

    }

  return (
    <div className='w-full md:w-[380px] min-[2000px]:w-[500px] bg-white flex flex-col p-4 h-[70vh] justify-between font-monteserrat relative shadow-lg'>
        <h1 className="font-bold text-xl 2xl:text-2xl">Update Password</h1>
        <form className="flex flex-col items-center justify-between h-[60vh]" onSubmit={updatePassword}>
            <div className="w-full">
                <p className={`${updatePasswordBannerMessage === "Your password has been updated" ? 'text-green-500' : updatePasswordBannerMessage === "Enter your new password" ? 'text-gray-500' : 'text-red-500'}`}>{updatePasswordBannerMessage}</p>
                <div className="relative w-full mt-20">
                    <input className='w-full h-[57px] bg-primary-gray p-2 2xl:text-xl shadow-md' type={showPassword ? 'text' : 'password'} placeholder="NEW PASSWORD" onChange={(e) => setPassword(e.target.value)}  />
                    {
                        showPassword ? (
                            <AiFillEyeInvisible className="absolute right-2 top-[0.8rem] text-4xl" onClick={() => setShowPassword(false)} />
                        ) : (
                            <AiFillEye className="absolute right-2 top-[0.8rem] text-4xl" onClick={() => setShowPassword(true)} />
                        )
                    }
                </div>
                <div className="relative w-full mt-6">
                    <input className='w-full h-[57px] bg-primary-gray p-2 2xl:text-xl shadow-md' type={showConfirmPassword ? 'text' : 'password'} placeholder="CONFIRM NEW PASSWORD" onChange={(e) => setConfirmPassword(e.target.value)}  />
                    {
                        showConfirmPassword ? (
                            <AiFillEyeInvisible className="absolute right-2 top-[0.8rem] text-4xl" onClick={() => setShowConfirmPassword(false)} />
                        ) : (
                            <AiFillEye className="absolute right-2 top-[0.8rem] text-4xl" onClick={() => setShowConfirmPassword(true)} />
                        )
                    }
                </div>
            </div>
            <button className="bg-[#5A58BB] w-[80%] max-w-[360px] h-[57px] text-white 2xl:text-xl hover:bg-[#080744] hover:text-white mb-6">Submit</button>
        </form>
    </div>
  )
}

export default UpdateForgottenPassword