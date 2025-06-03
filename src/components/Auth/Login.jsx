import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('employee1@example.com') // Pre-filled email
    const [password, setPassword] = useState('123') // Pre-filled password

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('admin@me.com') // Clear email after login
        setPassword('') // Clear password after login
       
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form 
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'
                >
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' 
                        type="email" 
                        placeholder='admin@me.com' // Updated placeholder
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' 
                        type="password" 
                        placeholder='123' 
                    />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
                        Log in
                    </button>
                </form>
                {/* Optional demo hint */}
                <p className="mt-4 text-center text-gray-500 text-sm">
                    Demo credentials pre-filled. Click "Log in" to test.
                </p>
            </div>
        </div>
    )
}

export default Login