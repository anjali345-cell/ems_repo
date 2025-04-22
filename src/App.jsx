import React, { useEffect, useState, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,setUserData] = useContext({AuthContext})

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
}
, [])

  const HandleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123'){
        setUser('admin') 
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin' }))
    } else if (userData) {
     const employee = userData.find((e)=> email == e.email && e.password == password)
     if(employee){
        setUser('employees')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employees',data:employee})) 
    }
  }
     else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employees' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  
  )
}
export default App