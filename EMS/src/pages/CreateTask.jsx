import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className='m-10 p-5 flex justify-between bg-neutral-900'>
                <div className='w-1/2 space-y-6 text-gray-300'>
                    <div><h3>Task Title</h3>
                        <input type="text" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' placeholder='Enter Task' />
                    </div>


                    <div><h3>Date</h3>
                        <input type="date" name="" id="" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' />
                    </div>

                    <div><h3>Assign To</h3>
                        <input type="text" name="" id="" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' placeholder='Assignee name' />
                    </div>

                    <div><h3>Category</h3>
                        <input type="text" name="" id="" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' placeholder='Design, Dev, etc ...' />
                    </div>
                </div>
                <div className='w-2/5 text-gray-300'>
                    <div><h3>Description</h3>
                        <textarea name="" id="" cols="30" rows="10" className='w-full bg-transparent rounded-md border-2 border-gray-500'></textarea></div>

                    <button className=' bg-green-400 p-2 text-gray-50 mt-4 rounded-lg w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask