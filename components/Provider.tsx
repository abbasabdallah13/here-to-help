"use client" 

import React, { useState } from 'react'
import { MyGlobalVariables } from '@/context/GlobalVariables'

function Provider({ children }: Props) {
    const [modalType, setModalType] = useState<string>('')
    const [loggedUser, setLoggedUser] = useState<any>(null)
  return (
    <MyGlobalVariables.Provider value={{ modalType, setModalType, loggedUser, setLoggedUser }}>
      {children}
    </MyGlobalVariables.Provider>
  )
}

export default Provider
