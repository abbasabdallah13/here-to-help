import { useGlobalVariables } from '@/context/GlobalVariables';
import React from 'react'

const MobileLoggedUserBadge = () => {
    const { setLoggedUser, loggedUser } = useGlobalVariables()

    const logout = () => {
        setLoggedUser(null);
        localStorage.removeItem('email');
    }
  return (
    <div>
        <h1 className="font-bold text-black">{loggedUser.firstName.charAt(0).toUpperCase()}{loggedUser.firstName.slice(1)} {loggedUser.lastName.charAt(0).toUpperCase()}{loggedUser.lastName.slice(1)}</h1>
        <ul>
          <li className="text-sm ml-2 font-light text-blue-gray underline lowercase">Account Settings</li>
          <li className="text-sm ml-2 font-light text-blue-gray underline lowercase">Account</li>
          <li className="text-sm ml-2 font-light text-blue-gray underline lowercase">Account s</li>
          <li className='text-sm ml-2 text-red-500 cursor-pointer' onClick={() => logout()}>Logout</li>
        </ul>
    </div>
  )
}

export default MobileLoggedUserBadge
