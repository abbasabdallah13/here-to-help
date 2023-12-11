"use client"

import { useGlobalVariables } from '@/context/GlobalVariables'
import React, { useEffect, useState } from 'react'

function ForgotPassword() {
    const { setModalType, modalType } = useGlobalVariables()

    const [email, setEmail] = useState('')
    const [emailResetRequest, setEmailResetRequest] = useState(false)
    const [passwordResetBannerMessage, setPasswordResetBannerMessage] = useState('')

    const [startCountdown, setStartCountdown] = useState(false)
    const [timeInMs, setTimeInMs] = useState(1800000)
    const [time, setTime] = useState(formatTime(timeInMs))

    const [codeFromServer, setCodeFromServer] = useState('')
    const [codeFromUserInput, setCodeFromUserInput] = useState('')

    let timeout: any; //should be set outside so that when the function is recalled it checks if a timeout exists without redefining it before checking for it
    const forgotPassword = async(e) => {
        e.preventDefault();
        setEmailResetRequest(true)
        const response = await fetch('/api/forgot-password', {
            method: 'POST',
            body: JSON.stringify({email})
        })

        const { code } = await response.json()
        setCodeFromServer(code);
        startCountdown ? setPasswordResetBannerMessage('A new code has been sent to your email') : setPasswordResetBannerMessage('Please note that the code will expire in 30 minutes.')
        startCountdown ? setTimeInMs(1800000) : setStartCountdown(true)
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            setPasswordResetBannerMessage('The code you requested has expired. Kindly request a new one.')
        }, 1800000);
    }

    const validateResetCode = (e) => {
        e.preventDefault();
        if(codeFromServer === codeFromUserInput){
            setPasswordResetBannerMessage('Code verified')
            setTimeout(() => {
                setModalType({type: 'update_forgotten_password', email})
            },1000)
        }else{
            setPasswordResetBannerMessage('Invalid code')
        }
    }


    useEffect(() => {
        if(startCountdown){
            if(timeInMs === 1800000){
                if(timeout){
                     clearTimeout(timeout)
                }else {
                    let timeout;
                }
            }

            if(timeInMs >= 0){
                timeout = setTimeout(() => {
                            setTime(formatTime(timeInMs))
                            setTimeInMs(prev => prev - 1000)
                        },1000)
                }else{
                    clearTimeout(timeout)
                    setStartCountdown(false)
                }
        }
    },[startCountdown, timeInMs])


    function formatTime(timeInMs: number){
        let totalSeconds: number = timeInMs/1000;
        let minutes: number = (Math.floor(totalSeconds/60))
        let seconds: number = totalSeconds%60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }


  return (
    <div className='w-full md:w-[380px] min-[2000px]:w-[500px] bg-white flex flex-col p-4 h-[75vh] justify-between font-monteserrat relative shadow-lg'>
        <div>
            <h1 className="font-bold text-xl 2xl:text-2xl">Forgot Password</h1>
            {
                !emailResetRequest ? (
                    <form onSubmit={forgotPassword} className="flex flex-col items-center justify-around h-[60vh]">
                        <label>Enter the email associated with your account:</label>
                        <input className='w-[80%] max-w-[360px] h-[57px] bg-primary-gray p-2 2xl:text-xl shadow-md' type="email" placeholder="EMAIL ADDRESS" onChange={(e) => setEmail(e.target.value)}  />
                        <button className="bg-[#5A58BB] w-[80%] max-w-[360px] h-[57px] text-white 2xl:text-xl hover:bg-[#080744] hover:text-white">Submit</button>
                    </form>
                ) : (
                    <form onSubmit={validateResetCode} className="flex flex-col items-center justify-around h-[60vh]">
                        <label>A code to reset the password has been sent to the email address you provided. Kindly enter it below:</label>
                        <p>{passwordResetBannerMessage}</p>
                        <p>{time}</p>
                        <input className='w-[80%] max-w-[360px] h-[57px] bg-primary-gray p-2 2xl:text-xl shadow-md' type="text" placeholder="CODE" onChange={(e) => setCodeFromUserInput(e.target.value)}  />
                        <button className="bg-[#5A58BB] w-[80%] max-w-[360px] h-[57px] text-white 2xl:text-xl hover:bg-[#080744] hover:text-white">Submit</button>
                    </form>
                )
            }
          <p className="text-xs text-center 2xl:text-lg"><span onClick={forgotPassword} className="text-blue-400 underline hover:text-purple-600 cursor-pointer">Request new code</span></p>
          <p className="text-xs text-center 2xl:text-lg mt-2"><span onClick={() => setModalType({type: 'login_modal'})} className="text-blue-400 underline hover:text-purple-600 cursor-pointer">Back</span></p>

        </div>
    </div>
  )
}

export default ForgotPassword