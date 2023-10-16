"use client"

import { useContext, createContext, Dispatch, SetStateAction } from 'react'

export type GlobalVariables = {
    modalType: string,
    setModalType: Dispatch<SetStateAction<string>>
}

export const MyGlobalVariables = createContext<GlobalVariables>({
    modalType: '',
    setModalType: () => {}
});


export const useGlobalVariables = () => useContext(MyGlobalVariables)