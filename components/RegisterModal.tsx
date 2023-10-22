"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useGlobalVariables } from '@/context/GlobalVariables'
import { useRouter } from 'next/navigation'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { RotatingTriangles } from 'react-loader-spinner'

function RegisterModal() {
    const { setModalType } = useGlobalVariables()

    const[loading, setLoading] = useState(false)
    const [userDetails, setUserDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      password: '',
      confirmPassword: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    const[showPassword, setShowPassword] = useState(false); 

    const router = useRouter();

    const createNewUser = async(email: string) => {
      setLoading(true);
      const response = await fetch('/api/create-account', {
        method: 'POST',
        body: JSON.stringify({userDetails})
      })
      const { message, newUser } = await response.json()
      if(message){
        setErrorMessage(message);
        setLoading(false);
      }else if(newUser){
        localStorage.setItem('email', newUser.email)
        setLoading(false);
        setModalType('')
        router.push('/')
      }
    }

  return (
    <div className='w-full md:w-[380px] min-[2000px]:w-[500px] bg-white flex flex-col p-4 h-[95vh] justify-between font-monteserrat relative shadow-lg'>
      {
        loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-triangels-wrapper"
            />
          </div>
        ) : 
        <>
          <AiOutlineCloseCircle className="absolute right-2 top-4 text-2xl hover:text-[#a0a0a0] cursor-pointer" onClick={() => setModalType('')}  />
          <h1 className="text-2xl 2xl:text-2xl">Register</h1>
          <p className='text-red-500 text-xs'>{errorMessage && errorMessage}</p>
          <div>
            <div className="w-full flex flex-col items-center gap-y-2">
              <input className='w-[100%] max-w-[360px] h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' onChange={(e) => setUserDetails({...userDetails, firstName:e.target.value})}  type="text" placeholder="First Name" />
              <input className='w-[100%] max-w-[360px] h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' onChange={(e) => setUserDetails({...userDetails, lastName:e.target.value})}  type="text" placeholder="Last Name" />
              <input className='w-[100%] max-w-[360px] h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' onChange={(e) => setUserDetails({...userDetails, email:e.target.value})}  type="text" placeholder="Email" />
              <div className='relative w-[100%] max-w-[360px] h-[57px]'><input className='w-[100%] max-w-[360px] h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' onChange={(e) => setUserDetails({...userDetails, password:e.target.value})}  type={showPassword ? "text" : "password"} placeholder="PASSWORD" /><span className="absolute right-4 top-[16px] text-2xl cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</span></div>
              <div className='relative w-[100%] max-w-[360px] h-[57px]'><input className='w-[100%] max-w-[360px] h-[57px] bg-[#d9d9d9] p-2 2xl:text-5xl uppercase' onChange={(e) => setUserDetails({...userDetails, confirmPassword:e.target.value})}  type={showPassword ? "text" : "password"} placeholder="confirm PASSWORD" /><span className="absolute right-4 top-[16px] text-2xl cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</span></div>
              <select className="w-full border-2 p-2 cursor-pointer" onChange={((e) => {setUserDetails({...userDetails, gender: e.target.value}); console.log(e.target.value)})}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <button className="bg-[#080744] w-[100%] max-w-[360px] h-[57px] text-white 2xl:text-5xl uppercase hover:bg-[#BBBAFF] hover:text-black" onClick={()=>createNewUser(userDetails.email)}>Create Account</button>
            </div>
          </div>
          <p className="text-xs text-center 2xl:text-lg">Already registered ? <span onClick={() => setModalType('login_modal')} className="text-blue-400 underline hover:text-purple-600 cursor-pointer">login</span></p>
        </>
      }
      
    </div>
  )
}

export default RegisterModal
