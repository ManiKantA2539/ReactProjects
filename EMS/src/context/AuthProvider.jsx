import React from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()


export const AuthData = getLocalStorage()


const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={AuthData} >
            <div>{children}</div>
        </AuthContext.Provider >
    )
}

export default AuthProvider