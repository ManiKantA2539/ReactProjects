import React from 'react'
import { useState } from 'react';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const submithandler = (e) => {
        e.preventDefault();
        const data = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: taskTitle,
            taskDate: date,
            category: category,
            taskDescription: description
        }
        const empData = JSON.parse(localStorage.getItem("employee"));
        const userIndex = empData.findIndex(user => user.name === assignTo);

        if (userIndex !== -1) {
            empData[userIndex].tasks.push(data);
            empData[userIndex].taskCount.newTask += 1;

            localStorage.setItem("employee", JSON.stringify(empData));
        } else {
            console.error("Employee not found");
        }
    }
    return (

        <div>
            <form onSubmit={submithandler} className='m-10 p-5 flex justify-between bg-neutral-900'>
                <div className='w-1/2 space-y-6 text-gray-300'>
                    <div><h3>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' placeholder='Enter Task' />
                    </div>


                    <div><h3>Date</h3>
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="" id="" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' />
                    </div>

                    <div><h3>Assign To</h3>
                        <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} type="text" name="" id="" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' placeholder='Assignee name' />
                    </div>

                    <div><h3>Category</h3>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="" id="" className='bg-transparent border-2 border-gray-500 rounded-md px-2 py-1 w-3/4' placeholder='Design, Dev, etc ...' />
                    </div>
                </div>
                <div className='w-2/5 text-gray-300'>
                    <div><h3>Description</h3>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="" id="" cols="30" rows="10" className='w-full bg-transparent rounded-md border-2 border-gray-500'></textarea></div>

                    <button className=' bg-green-400 p-2 text-gray-50 mt-4 rounded-lg w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask