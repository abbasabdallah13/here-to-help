"use client"

import React, { useEffect } from 'react'
import { useGlobalVariables } from '@/context/GlobalVariables'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

function ModalTemplate() {
    const { modalType } = useGlobalVariables();
    useEffect(() => {
        console.log(`modalType = ${modalType}`)
    },[modalType])
  return (
    <div className={`${modalType === '' ? 'hidden' : 'flex'} fixed top-0 left-0 p-0 h-screen w-full bg-black/40 items-center justify-center z-[999]`}>
      {
        modalType === 'register_modal' ? <RegisterModal /> : 
        modalType === 'login_modal' ? <LoginModal /> : 
        ''
      }
    </div>
  )
}

export default ModalTemplate
