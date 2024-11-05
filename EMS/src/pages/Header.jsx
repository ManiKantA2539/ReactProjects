import React from 'react'
import Login from '../components/Auth/Login'

const Header = ({ data }) => {
    return (
        <>
            <div className='flex items-end justify-between px-10 mt-3'>
                <div className='text-white'>
                    <h1 className='text-xl'>Hello
                        <br />
                        <span className='text-3xl'>{data.name}</span> </h1>
                </div>
                <button className='text-white text-2xl px-5 py-2 rounded-lg bg-red-500'>Log out</button>
            </div>
        </>
    )
}

export default Header