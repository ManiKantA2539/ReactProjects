export const employees = [
    {
        "id": 1,
        "name": "John Doe",
        "username": "j@e.com",
        "password": "123",
        "taskCount": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [

        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "username": "jane.smith@example.com",
        "password": "securepass456",
        "taskCount": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
        ]
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "username": "michael.johnson@example.com",
        "password": "mypassword789",
        "taskCount": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [

        ]
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "username": "emily.davis@example.com",
        "password": "emilypass101",
        "taskCount": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []

    },
    {
        "id": 5,
        "name": "William Brown",
        "username": "william.brown@example.com",
        "password": "willpass202",
        "taskCount": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [

        ]
    }
];



export const admin = [{
    "id": 100,
    "name": "Admin User",
    "username": "admin@me.com",
    "password": 123
}]


export const setLocalStorage = () => {
    if (!localStorage.getItem("employee")) {
        localStorage.setItem("employee", JSON.stringify(employees));
    }
    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin }
}
if (typeof window !== 'undefined') {
    setLocalStorage();
}