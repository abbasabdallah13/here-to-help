"use client" 

import React, { useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { MyGlobalVariables } from '@/context/GlobalVariables'

function Provider({ children, session }: Props) {
    const [modalType, setModalType] = useState<string>('')
    const [loggedUser, setLoggedUser] = useState<any>(null)
  return (
    <SessionProvider session={session}>
      <MyGlobalVariables.Provider value={{ modalType, setModalType, loggedUser, setLoggedUser }}>
        {children}
      </MyGlobalVariables.Provider>
    </SessionProvider>
  )
}

export default Provider
