import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email ,password);
        console.log("email is" ,email); 
        console.log("password is",password);

        setEmail("")
        setPassword("")
        
    }

  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-12 rounded-xl'>
            <form 
            onSubmit={(e)=>{
            submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='text-black outline-none border-2 border-emerald-600 py-3 px-5 m-2 rounded-xl w-80' type='email' placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className='text-black outline-none border-2 border-emerald-600 py-3 px-5 m-2 rounded-xl w-80' type='password' placeholder='Enter password'/>
                <button className='text-white outline-none border-2 border-emerald-600 py-3 px-5 m-2 rounded-xl'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
