import React from 'react'

const CompletedTask = ({ data }) => {
    return (
        data.map((data, idx) => (
            <div key={idx} className='flex-shrink-0 bg-blue-400 h-full w-[25%] items- rounded-xl p-5'>
                <div className='py-3 flex justify-between items-center gap-3'>
                    <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>{data.category}</h1>
                    <h1 className='text-white'>{data.taskDate}</h1>
                </div>
                <h2 className='text-white mt-10 text-2xl font-medium'>{data.taskTitle}</h2>
                <p className='text-white text-sm'>{data.taskDescription}</p>
                <div className='mt-3 text-green-600 rounded-lg w-[35%] px-3 mx-auto'>
                    Completed
                </div>
            </div>
        ))
    )
}

export default CompletedTask