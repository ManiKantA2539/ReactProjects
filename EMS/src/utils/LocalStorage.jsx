export const employees = [
    {
        "id": 1,
        "name": "John Doe",
        "username": "john.doe@example.com",
        "password": "password123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive design for the homepage.",
                "taskDate": "2024-10-22",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve login issue on the mobile app.",
                "taskDate": "2024-10-20",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Write API Documentation",
                "taskDescription": "Document all the endpoints for the user API.",
                "taskDate": "2024-10-15",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "username": "jane.smith@example.com",
        "password": "securepass456",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update User Profile UI",
                "taskDescription": "Redesign the user profile section for a better user experience.",
                "taskDate": "2024-10-23",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Optimize Database Queries",
                "taskDescription": "Optimize queries for faster response time.",
                "taskDate": "2024-10-19",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix Payment Gateway",
                "taskDescription": "Resolve the payment gateway integration issue.",
                "taskDate": "2024-10-18",
                "category": "Development"
            }
        ]
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "username": "michael.johnson@example.com",
        "password": "mypassword789",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Set Up CI/CD Pipeline",
                "taskDescription": "Implement CI/CD pipeline for the new project.",
                "taskDate": "2024-10-24",
                "category": "DevOps"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Broken Links",
                "taskDescription": "Identify and fix broken links across the website.",
                "taskDate": "2024-10-16",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "username": "emily.davis@example.com",
        "password": "emilypass101",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Plan Marketing Campaign",
                "taskDescription": "Outline the next quarter's marketing strategy.",
                "taskDate": "2024-10-25",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Email Template",
                "taskDescription": "Create an email template for the product launch announcement.",
                "taskDate": "2024-10-22",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Organize Team Meeting",
                "taskDescription": "Schedule and prepare agenda for the team meeting.",
                "taskDate": "2024-10-17",
                "category": "Management"
            }
        ]
    },
    {
        "id": 5,
        "name": "William Brown",
        "username": "william.brown@example.com",
        "password": "willpass202",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Develop New Feature",
                "taskDescription": "Implement the user tagging feature for posts.",
                "taskDate": "2024-10-26",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Refactor Codebase",
                "taskDescription": "Refactor the old codebase for performance improvements.",
                "taskDate": "2024-10-20",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Project Timeline",
                "taskDescription": "Recalculate project timelines and update tasks accordingly.",
                "taskDate": "2024-10-14",
                "category": "Management"
            }
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
    localStorage.setItem("employee", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin }
}

setLocalStorage();