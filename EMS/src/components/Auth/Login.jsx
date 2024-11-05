import React, { useState } from 'react'
import "../../index.css"
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className="border-2 border-red-300 p-20 rounded-xl">
        <form className='flex flex-col justify-center items-center' onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email, password);
          console.log(email, password);
        }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required className='text-white rounded-full border-2 border-red-500 text-xl px-5 py-3 outline-none bg-transparent placeholder-gray-400' type="email" placeholder='Email' />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required className='text-white rounded-full border-2 mt-10 border-red-500 text-xl px-5 py-3 outline-none bg-transparent placeholder-gray-400' type="password" placeholder='Password' />
          <button className='w-full text-white mt-7 bg-red-500 px-5 py-3 rounded-full border-2 border-red-300 outline-none text-xl'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login