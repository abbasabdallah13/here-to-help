"use client"

import { useContext, createContext, Dispatch, SetStateAction } from 'react'

interface modalTypeInterface {
    [key: string]: any;
}

export type GlobalVariables = { //define the type of the variables you need to be used globally
    modalType: modalTypeInterface,
    setModalType: Dispatch<SetStateAction<any>>,
    loggedUser: any,
    setLoggedUser: Dispatch<SetStateAction<any>>
}

export const MyGlobalVariables = createContext<GlobalVariables>({ //give a default value
    modalType: {type: '', params: {}},
    setModalType: () => {},
    loggedUser: null,
    setLoggedUser: () => {}
});


export const useGlobalVariables = () => useContext(MyGlobalVariables) //export the hook with useContext