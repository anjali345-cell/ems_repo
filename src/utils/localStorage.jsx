const employees = [
  { 
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Website Redesign",
        "description": "Create mockups for the homepage redesign",
        "date": "2023-11-15",
        "category": "Design"
      },{
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Database Migration",
        "description": "Migrate user data to new database cluster",
        "date": "2023-11-10",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "API Integration",
        "description": "Integrate payment gateway API",
        "date": "2023-11-20",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Client Meeting",
        "description": "Prepare presentation for quarterly review",
        "date": "2023-11-17",
        "category": "Meeting"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Content Writing",
        "description": "Write blog post about new features",
        "date": "2023-11-14",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "SEO Optimization",
        "description": "Optimize product pages for keywords",
        "date": "2023-11-18",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Social Media Campaign",
        "description": "Launch holiday promotion on social media",
        "date": "2023-11-05",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 4,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Bug Fixing",
        "description": "Fix login page validation issues",
        "date": "2023-11-16",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Code Review",
        "description": "Review pull requests from junior developers",
        "date": "2023-11-13",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Unit Tests",
        "description": "Write tests for authentication module",
        "date": "2023-11-08",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Performance Optimization",
        "description": "Improve database query performance",
        "date": "2023-11-19",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Documentation",
        "description": "Update API documentation",
        "date": "2023-11-22",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ananya",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Customer Support",
        "description": "Respond to premium customer tickets",
        "date": "2023-11-15",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Training Session",
        "description": "Train new hires on support protocols",
        "date": "2023-11-09",
        "category": "Training"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Knowledge Base Update",
        "description": "Add new solutions to knowledge base",
        "date": "2023-11-17",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Feature Demo",
        "description": "Demo new features to customer success team",
        "date": "2023-11-12",
        "category": "Presentation"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 4,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Budget Planning",
        "description": "Prepare Q1 budget projections",
        "date": "2023-11-20",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Vendor Negotiations",
        "description": "Renew contract with cloud provider",
        "date": "2023-11-16",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Expense Reports",
        "description": "Process team expense reports",
        "date": "2023-11-05",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Audit Preparation",
        "description": "Gather documents for annual audit",
        "date": "2023-11-18",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Team Building",
        "description": "Organize quarterly team building event",
        "date": "2023-11-25",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Payroll Processing",
        "description": "Verify and submit November payroll",
        "date": "2023-11-03",
        "category": "Finance"
      }
    ]
  }
];

const admin = [{
      "id": 1,
      "email": "admin@exmaple.com",
      "password": "123"
    }];
  

  export const setLocalStorage = () =>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
    
  }