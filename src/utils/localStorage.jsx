const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber":{
      "active":1,
      "newTask":1,
      "completed":1,
      "failed":0,
    } ,
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop Homepage",
        "taskDescription": "Design and implement the hmepage layout.",
        "taskDate": "2024-12-26",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve the login issue reported by QA.",
        "taskDate": "2024-12-24",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update User Dashboard",
        "taskDescription": "Enhance the UI of the user dashboard.",
        "taskDate": "2024-12-27",
        "category": "UI Enhancement"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active":2,
      "newTask":1,
      "completed":1,
      "failed":1,
    } ,
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Conduct Code Review",
        "taskDescription": "Review the code for the recent project module.",
        "taskDate": "2024-12-23",
        "category": "Code Review"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare API Documentation",
        "taskDescription": "Document the APIs for the mobile app backend.",
        "taskDate": "2024-12-28",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize Database Queries",
        "taskDescription": "Improve the performance of database queries.",
        "taskDate": "2024-12-29",
        "category": "Optimization"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Optimize Database Queries",
        "taskDescription": "Improve the performance of database queries.",
        "taskDate": "2024-12-29",
        "category": "Optimization"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Vivaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active":0,
      "newTask":1,
      "completed":2,
      "failed":0,
    } ,
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Test Cases",
        "taskDescription": "Develop test cases for the payment module.",
        "taskDate": "2024-12-27",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Set Up CI/CD Pipeline",
        "taskDescription": "Configure continuous integration and deployment.",
        "taskDate": "2024-12-22",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Search Functionality",
        "taskDescription": "Resolve issues with the search feature on the website.",
        "taskDate": "2024-12-23",
        "category": "Bug Fix"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Aditya",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active":1,
      "newTask":1,
      "completed":1,
      "failed":0,
    } ,
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Dark Mode",
        "taskDescription": "Add dark mode functionality to the application.",
        "taskDate": "2024-12-30",
        "category": "Feature"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Privacy Policy Page",
        "taskDescription": "Revise the content of the privacy policy page.",
        "taskDate": "2024-12-28",
        "category": "Content Update"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Resolve Notification Issues",
        "taskDescription": "Fix bugs in the notification system.",
        "taskDate": "2024-12-25",
        "category": "Bug Fix"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active":2,
      "newTask":1,
      "completed":1,
      "failed":0,
    } ,
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop Admin Dashboard",
        "taskDescription": "Build the admin dashboard for managing users.",
        "taskDate": "2024-12-31",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Enhance Search Filters",
        "taskDescription": "Improve filters for product search.",
        "taskDate": "2024-12-29",
        "category": "Enhancement"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Conduct Training Session",
        "taskDescription": "Deliver training on the new HR system.",
        "taskDate": "2024-12-24",
        "category": "Training"
      }
    ]
  }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
];

export const setLocalStorage = () => {
   localStorage.setItem('employees' ,JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))

return {employees , admin};

}