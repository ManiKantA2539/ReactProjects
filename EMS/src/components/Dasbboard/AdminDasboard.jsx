import React from 'react'
import Header from '../../pages/Header'
import CreateTask from '../../pages/CreateTask'
import AllTask from '../../pages/AllTask'

const AdminDasboard = () => {
    return (
        <div >
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDasboard