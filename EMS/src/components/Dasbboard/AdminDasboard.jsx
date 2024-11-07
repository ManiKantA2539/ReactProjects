import React from 'react'
import Header from '../../pages/Header'
import CreateTask from '../../pages/CreateTask'
import AllTask from '../../pages/AllTask'

const AdminDasboard = ({ data }) => {
    return (
        <div >
            <Header data={data} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDasboard