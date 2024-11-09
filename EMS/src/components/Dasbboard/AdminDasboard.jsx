import React from 'react'
import Header from '../../pages/Header'
import CreateTask from '../../pages/CreateTask'
import AllTask from '../../pages/AllTask'

const AdminDasboard = ({ data, changeUser }) => {
    return (
        <div >
            <Header data={data} changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDasboard