import React from 'react'

const AcceptTask = ({ userData, data }) => {
    const handleComplete = (data) => {
        const empData = JSON.parse(localStorage.getItem("employee"));
        const userIdx = empData.findIndex((user) => user.name === userData.name);
        const taskIdx = empData[userIdx].tasks.findIndex((task) => task.taskTitle === data.taskTitle);
        empData[userIdx].tasks[taskIdx].active = false;
        empData[userIdx].tasks[taskIdx].newTask = false;
        empData[userIdx].tasks[taskIdx].completed = true;
        empData[userIdx].taskCount.active -= 1;
        empData[userIdx].taskCount.completed += 1;
        localStorage.setItem("employee", JSON.stringify(empData));
    }
    const handleFail = (data) => {
        const empData = JSON.parse(localStorage.getItem("employee"));
        const userIdx = empData.findIndex((user) => user.name === userData.name);
        const taskIdx = empData[userIdx].tasks.findIndex((task) => task.taskTitle === data.taskTitle);
        empData[userIdx].tasks[taskIdx].active = false;
        empData[userIdx].tasks[taskIdx].newTask = false;
        empData[userIdx].tasks[taskIdx].failed = true;
        empData[userIdx].taskCount.active -= 1;
        empData[userIdx].taskCount.failed += 1;
        localStorage.setItem("employee", JSON.stringify(empData));
    }
    return (
        data.map((data, idx) => (
            <div key={idx} className='flex-shrink-0 bg-green-400 h-full w-[25%] items- rounded-xl p-5'>
                <div className='py-3 flex justify-between items-center gap-3'>
                    <h1 className='text-white px-5 py-2 bg-red-500 rounded-lg'>{data.category}</h1>
                    <h1 className='text-white'>{data.taskDate}</h1>
                </div>
                <h2 className='text-white mt-10 text-2xl font-medium'>{data.taskTitle}</h2>
                <p className='text-white text-sm'>{data.taskDescription}</p>
                <div className='flex justify-between items-center py-3'>
                    <button onClick={() => handleComplete(data)} className='bg-green-500 text-white px-5 py-2 rounded-lg'>Mark as Complete</button>
                    <button onClick={() => handleFail(data)} className='bg-red-500 text-white px-5 py-2 rounded-lg'>Mark as Fail</button>
                </div>
            </div>
        ))
    )
}

export default AcceptTask