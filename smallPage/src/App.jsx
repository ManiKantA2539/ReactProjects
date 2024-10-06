import React from 'react'
import { Router } from 'react-router-dom'
import UserContextProvider from './components/context/UserContextProvider'
import { Login } from './components/Login'
import { Profile } from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <Login />
      
    </UserContextProvider>
  )
}

export default App