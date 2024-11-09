import React from 'react'

const NewTask = ({ data, userData }) => {
    const handleAccept = (data) => {
        const empData = JSON.parse(localStorage.getItem("employee"));
        const userIdx = empData.findIndex((user) => user.name === userData.name);
        const taskIdx = empData[userIdx].tasks.findIndex((task) => task.taskTitle === data.taskTitle);
        empData[userIdx].tasks[taskIdx].active = true;
        empData[userIdx].tasks[taskIdx].newTask = false;
        empData[userIdx].taskCount.active += 1;
        empData[userIdx].taskCount.newTask -= 1;
        localStorage.setItem("employee", JSON.stringify(empData));
    }
    return (
        data.map((data, idx) => (
            <div key={idx} className='flex-shrink-0 bg-red-400 h-full w-[25%] items- rounded-xl p-5'>
                <div className='py-3 flex justify-between items-center gap-3'>
                    <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>{data.category}</h1>
                    <h1 className='text-white'>{data.taskDate}</h1>
                </div>
                <h2 className='text-white mt-10 text-2xl font-medium'>{data.taskTitle}</h2>
                <p className='text-white text-sm'>{data.taskDescription}</p>
                <button onClick={() => handleAccept(data)} className='mt-3 bg-green-400 rounded-lg w-[35%]'>
                    Accept Task
                </button>
            </div>
        ))
    )

}

export default NewTask