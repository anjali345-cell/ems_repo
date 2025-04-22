import React from 'react'
import { useState } from 'react'

const Login = ({HandleLogin}) => {


const [email, setEmail] = useState('')
const [Password, setPassword] = useState('')



const submitHandler = (e)=>{
e.preventDefault()

console.log("Email is: ", email)
console.log("Password is: ", Password)

setEmail("")
setPassword("")

}
  return (
    <div className='flex h-screen w-sreen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 mt-5- p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}  
                required
                className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl px-5 py-1 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
                 />
                <input
                value={Password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 required 
                 className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl px-5 py-1 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password'/>
                <button type='submit' onClick={() => HandleLogin(email, Password)}  className='text-white border-none outline-none border-2 bg-emerald-600 text-xl px-6 py-2 rounded-full mt-3 placeholder:text-white'>Login</button>
            </form>
        </div> 
    </div>
  )
}

export default Login