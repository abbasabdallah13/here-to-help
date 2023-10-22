"use client"

import { useContext, createContext, Dispatch, SetStateAction } from 'react'

export type GlobalVariables = { //define the type of the variables you need to be used globally
    modalType: string,
    setModalType: Dispatch<SetStateAction<string>>,
    loggedUser: any,
    setLoggedUser: Dispatch<SetStateAction<any>>
}

export const MyGlobalVariables = createContext<GlobalVariables>({ //give a default value
    modalType: '',
    setModalType: () => {},
    loggedUser: null,
    setLoggedUser: () => {}
});


export const useGlobalVariables = () => useContext(MyGlobalVariables) //export the hook with useContext