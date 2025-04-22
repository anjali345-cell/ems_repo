import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

// const [username, setUsername] = useState('')
// if(!data){
//     setUsername('Admin')
//  } else{
//   setUsername(data.firstName)
//  }

const logOutUser = () => {

  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload()
}  

  return (
    <div className='flex  items-end justify-between p-5 text-white'>
      <form action=""> <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> username👋</span></h1>
      </form>    </div>
  )
}

export default Header