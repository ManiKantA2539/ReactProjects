import React from 'react'
import Header from '../../pages/Header'

const EmployeeDashboard = ({ data }) => {
    return (
        <div className='p-10 bg-[#313131] h-screen'>
            <Header data={data} />
            <div className='p-10 flex justify-between gap-5'>
                <div className='bg-red-400 p-5 rounded-lg w-[25%] '>
                    <h1 className='text-white text-xl font-semibold'>{data.taskCount.newTask} <br /> <span className='text-3xl font-medium'>New Task</span></h1>
                </div>
                <div className='bg-blue-400 p-5 rounded-lg w-[25%]'>
                    <h1 className='text-white text-xl font-semibold'>{data.taskCount.completed} <br /> <span className='text-3xl font-medium'>Completed Task</span></h1>
                </div>
                <div className='bg-green-400 p-5 rounded-lg w-[25%]'>
                    <h1 className='text-black text-xl font-semibold'>{data.taskCount.active} <br /> <span className='text-3xl font-medium'>Active Task</span></h1>
                </div>
                <div className='bg-yellow-300 p-5 rounded-lg w-[25%]'>
                    <h1 className='text-white text-xl font-semibold'>{data.taskCount.failed} <br /> <span className='text-3xl font-medium'>Failed Task</span></h1>
                </div>
            </div>
            <div id='taskList' className='h-[50%] flex justify-start gap-5 overflow-x-auto m-10'>

                <div className='flex-shrink-0 bg-green-400 h-full w-[25%] items- rounded-xl p-5'>
                    <div className='py-3 flex justify-between items-center'>
                        <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>High</h1>
                        <h1 className='text-white'>20 October 2024</h1>
                    </div>
                    <h2 className='text-white mt-10 text-2xl font-medium'>Lorem, ipsum dolor.</h2>
                    <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero odio consequatur commodi quidem consectetur? Porro?</p>

                </div>
                <div className='flex-shrink-0 bg-yellow-400 h-full w-[25%] items- rounded-xl p-5'>
                    <div className='py-3 flex justify-between items-center'>
                        <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>High</h1>
                        <h1 className='text-white'>20 October 2024</h1>
                    </div>
                    <h2 className='text-white mt-10 text-2xl font-medium'>Lorem, ipsum dolor.</h2>
                    <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero odio consequatur commodi quidem consectetur? Porro?</p>

                </div>
                <div className='flex-shrink-0 bg-red-400 h-full w-[25%] items- rounded-xl p-5'>
                    <div className='py-3 flex justify-between items-center'>
                        <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>High</h1>
                        <h1 className='text-white'>20 October 2024</h1>
                    </div>
                    <h2 className='text-white mt-10 text-2xl font-medium'>Lorem, ipsum dolor.</h2>
                    <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero odio consequatur commodi quidem consectetur? Porro?</p>

                </div>
                <div className='flex-shrink-0 bg-orange-400 h-full w-[25%] items- rounded-xl p-5'>
                    <div className='py-3 flex justify-between items-center'>
                        <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>High</h1>
                        <h1 className='text-white'>20 October 2024</h1>
                    </div>
                    <h2 className='text-white mt-10 text-2xl font-medium'>Lorem, ipsum dolor.</h2>
                    <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero odio consequatur commodi quidem consectetur? Porro?</p>

                </div>
                <div className='flex-shrink-0 bg-blue-400 h-full w-[25%] items- rounded-xl p-5'>
                    <div className='py-3 flex justify-between items-center'>
                        <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>High</h1>
                        <h1 className='text-white'>20 October 2024</h1>
                    </div>
                    <h2 className='text-white mt-10 text-2xl font-medium'>Lorem, ipsum dolor.</h2>
                    <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero odio consequatur commodi quidem consectetur? Porro?</p>

                </div>

            </div>
        </div>
    )
}

export default EmployeeDashboard