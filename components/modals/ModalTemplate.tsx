"use client"

import React, { useEffect } from 'react'
import { useGlobalVariables } from '@/context/GlobalVariables'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import ForgotPassword from './ForgotPasswordModal'
import UpdateForgottenPassword from './UpdateForgottenPassword'

function ModalTemplate() {
    const { modalType } = useGlobalVariables();
    
    let localStorageEmail;
    useEffect(() => {
        localStorageEmail = JSON.parse(localStorage.getItem('email'))
    },[])
    
  return (
    <div className={`${modalType.type === '' ? 'hidden' : 'flex'} fixed top-0 left-0 p-0 h-screen w-full bg-black/40 items-center justify-center z-[999]`}>
      {
        modalType.type === 'register_modal' && !localStorageEmail ? <RegisterModal /> : 
        modalType.type === 'login_modal' ? <LoginModal /> : 
        modalType.type === 'forgot_password' ? <ForgotPassword /> : 
        modalType.type === 'update_forgotten_password' ? <UpdateForgottenPassword /> : 
        ''
      }
    </div>
  )
}

export default ModalTemplate
