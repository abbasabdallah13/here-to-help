import React, {useState, useEffect} from 'react'
import FacebookLogo from '@/public/assets/fbLogo.png'
import GithubLogo from '@/public/assets/githubLogo.png'
import GmailLogo from '@/public/assets/gmailLogo.png'
import { signIn, getProviders } from "next-auth/react";
import Image from 'next/image'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useGlobalVariables } from '@/context/GlobalVariables'
import { RotatingTriangles } from 'react-loader-spinner';

function LoginModal() {
  const [providers, setProviders] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  })

  const { setModalType, setLoggedUser } = useGlobalVariables()

  useEffect(()=>{
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response)
    }  
    setUpProviders();
  },[])

  const getLogos = (providerName: string) => {
    switch (providerName) {
        case 'GitHub':
            return GithubLogo;
        case 'Google':
            return GmailLogo;
        case 'Facebook':
            return FacebookLogo;
        default:
            return
    }
}

  const login = async() => {
    setLoading(true);
    const response = await fetch('api/log-user', {
      method: 'POST',
      body: JSON.stringify({userInput})
    })
    const { message, user } = await response.json();
    if(message){
      setLoading(false);
      setErrorMessage(message)
    }else if(user){
      setLoggedUser(user);
      localStorage.setItem('email', JSON.stringify(user.email));
      setLoading(false);
      setModalType({type: ''})
    }
  }

  return (
    <div className='w-full md:w-[380px] min-[2000px]:w-[500px]  bg-white flex flex-col p-4 h-[70vh] justify-between font-monteserrat relative shadow-lg'>
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
          <AiOutlineCloseCircle className="absolute right-2 top-4 text-2xl hover:text-[#a0a0a0] cursor-pointer" onClick={() => setModalType({type: ''})}  />
        <h1 className="2xl:text-2xl">Login With</h1>
        <div>
          <div className="mb-8 2xl:mb-24">
            <div className="flex justify-center gap-x-4">
            {
              providers && Object.values(providers)?.map((provider) => 
              
                <Image className='w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] cursor-pointer' src={getLogos(provider?.name)} alt={`${provider?.name} logo`} onClick={() => signIn(provider?.id)} key={provider?.id} />
              
              )
            }
            </div>
            <div className="relative flex flex-col items-center justify-center w-full  ">
              <p className="bg-white relative top-[12px]">OR</p>
              <div className="bg-black w-full h-[1px]"></div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-2">
            <p className='text-red-500 w-[80%] max-w-[360px] text-xs'>{errorMessage}</p>
            <input className='w-[80%] max-w-[360px]  h-[57px] bg-primary-gray p-2 2xl:text-xl' type="text" placeholder="LOGIN" onChange={(e) => setUserInput({...userInput, email:e.target.value})}  />
            <input className='w-[80%] max-w-[360px]  h-[57px] bg-primary-gray p-2 2xl:text-xl' type="password" placeholder="PASSWORD" onChange={(e) => setUserInput({...userInput, password:e.target.value})}  />
            <button className="bg-[#5A58BB] w-[80%] max-w-[360px] h-[57px] text-white 2xl:text-xl hover:bg-[#080744] hover:text-white" onClick={() => login()}>LOGIN</button>
          </div>
        </div>
        <p className="text-xs text-center 2xl:text-lg text-blue-400 underline hover:text-purple-600 cursor-pointer" onClick={() => setModalType({type: 'forgot_password'})}>forgot password?</p>
        <p className="text-xs text-center 2xl:text-lg">New user ? <span onClick={() => setModalType({type: 'register_modal'})} className="text-blue-400 underline hover:text-purple-600 cursor-pointer">create an account</span></p>
      </>
      }
     
    </div>
  )
}

export default LoginModal
