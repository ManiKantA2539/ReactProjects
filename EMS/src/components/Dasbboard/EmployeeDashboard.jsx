import React from 'react'
import Header from '../../pages/Header'
import AcceptTask from '../TaskList/AcceptTask'
import CompletedTask from '../TaskList/CompletedTask'
import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'

const EmployeeDashboard = ({ data, changeUser }) => {
    console.log(data);
    const accept = data.tasks.filter((t) => t.active === true)
    const newTask = data.tasks.filter((t) => t.newTask === true)
    const completed = data.tasks.filter((t) => t.completed === true)
    const failed = data.tasks.filter((t) => t.failed === true)
    console.log(accept);
    return (
        <div className='p-10 bg-[#313131] h-screen'>
            <Header data={data} changeUser={changeUser} />
            <div className='p-10 flex justify-between gap-5'>
                <div className='bg-red-400 p-5 rounded-lg w-[25%] '>
                    <h1 className='text-white text-xl font-semibold'>{data?.taskCount?.newTask} <br /> <span className='text-3xl font-medium'>New Task</span></h1>
                </div>
                <div className='bg-blue-400 p-5 rounded-lg w-[25%]'>
                    <h1 className='text-white text-xl font-semibold'>{data?.taskCount?.completed} <br /> <span className='text-3xl font-medium'>Completed Task</span></h1>
                </div>
                <div className='bg-green-400 p-5 rounded-lg w-[25%]'>
                    <h1 className='text-black text-xl font-semibold'>{data?.taskCount?.active} <br /> <span className='text-3xl font-medium'>Active Task</span></h1>
                </div>
                <div className='bg-yellow-300 p-5 rounded-lg w-[25%]'>
                    <h1 className='text-white text-xl font-semibold'>{data?.taskCount?.failed} <br /> <span className='text-3xl font-medium'>Failed Task</span></h1>
                </div>
            </div>
            <div id='taskList' className='h-[50%] flex justify-start gap-5 overflow-x-auto m-10'>

                <AcceptTask data={accept} userData={data} />
                <CompletedTask data={completed} />
                <FailedTask data={failed} />
                <NewTask data={newTask} userData={data} />

            </div>
        </div>
    )
}

export default EmployeeDashboard