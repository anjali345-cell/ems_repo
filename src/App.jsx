// import React, { useContext, useEffect, useState } from 'react'
// import Login from './components/Auth/Login'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const [userData,SetUserData] = useContext(AuthContext)

//   useEffect(()=>{
//     const loggedInUser = localStorage.getItem('loggedInUser')
    
//     if(loggedInUser){
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data)
//     }

//   },[])


//   const handleLogin = (email, password) => {
//     if (email == 'admin@me.com' && password == '123') {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } else if (userData) {
//       const employee = userData.find((e) => email == e.email && e.password == password)
//       if (employee) {
//         setUser('employee')
//         setLoggedInUserData(employee)
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
//       }
//     }
//     else {
//       alert("Invalid Credentials")
//     }
//   }



//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
//     </>
//   )
// }

// export default App

import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? (
        <div>
          <Login handleLogin={handleLogin} />
          {/* Simple UI addition starts here */}
          <div className='margin-top-1px auto padding-10px border-b-gray-600  border-radius-5px max-width-350px bg-black  text-white'>
            <h3>Sample Users</h3>
            <p><strong>Admin:</strong> admin@me.com / 123</p>
            <p><strong>Employee:</strong> employee@example.com / 123, employee1@example.com / 123 </p>
          </div>
          {/* Simple UI addition ends here */}
        </div>
      ) : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App