"use client" 

import React, { useState } from 'react'
import { MyGlobalVariables } from '@/context/GlobalVariables'

function Provider({ children }: Props) {
    const [modalType, setModalType] = useState<string>('')
  return (
    <MyGlobalVariables.Provider value={{ modalType, setModalType }}>
      {children}
    </MyGlobalVariables.Provider>
  )
}

export default Provider
