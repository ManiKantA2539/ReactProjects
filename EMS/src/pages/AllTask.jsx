import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
    const data = useContext(AuthContext);

    return (
        <div className="bg-neutral-900 p-7 m-10 rounded-md h-auto overflow-auto">
            <div className="p-5 flex justify-between items-center rounded-t-md">
                <h2 className="text-xl text-white font-bold w-1/5">Employee Name</h2>
                <p className="text-gray-200 w-1/5 text-center">Active Tasks</p>
                <p className="text-gray-200 w-1/5 text-center">New Tasks</p>
                <p className="text-gray-200 w-1/5 text-center">Completed Tasks</p>
                <p className="text-gray-200 w-1/5 text-center">Failed Tasks</p>
            </div>
            {data.employees.map((employee) => (
                <div key={employee.id} className="p-5 flex justify-between items-center border-b border-gray-600">
                    <h2 className="text-xl text-white font-bold w-1/5">{employee.name}</h2>
                    <p className="text-gray-200 w-1/5 text-center">{employee.taskCount.active}</p>
                    <p className="text-gray-200 w-1/5 text-center">{employee.taskCount.newTask}</p>
                    <p className="text-gray-200 w-1/5 text-center">{employee.taskCount.completed}</p>
                    <p className="text-gray-200 w-1/5 text-center">{employee.taskCount.failed}</p>
                </div>
            ))}
        </div>
    );
};

export default AllTask;
