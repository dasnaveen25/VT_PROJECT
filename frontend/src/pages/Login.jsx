import React, { useState } from 'react'
import Logo from "../assets/vcart logo.png"
import google from "../assets/google.jpeg" // make sure this path is correct
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";



function Login ()  {
  const [show, setshow] = useState(false)
  let navigate = useNavigate()
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start'>
      
      {/* Header */}
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={() => navigate("/")}>
        <img className='w-[40px]' src={Logo} alt="" />
        <h1 className='text-[22px] font-sans'>OneCart</h1>
      </div>

      {/* Title */}
      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[25px] font-semibold'>Registration Page</span>
        <span className='text-[16px]'>Welcome to OneCart, Place your order</span>
      </div>

      {/* Form Card */}
      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
        <form action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>

          {/* Google Registration */}
          <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
            <img src={google} alt="" className='w-[20px] rounded-2xl' />
            Registration with Google
          </div>

          {/* OR Separator */}
          <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
            OR
            <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
          </div>

          {/* Input Fields */}
          <div className='w-[90%] h-[400px] flex flex-col  items-center justify-center gap-[15px] relative'>
           
            <input
              type="email"
              placeholder="Email"
              className='w-[100%] h-[50px] border-[2px]  border-[#96969635] backdrop:blur-sm rounded-lg  shadow-lg bg-transparent placeholder-[#fffffffc7] px-[20px] font-semibold'
              required
            />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className='w-[100%] h-[50px] border-[2px]  border-[#96969635] backdrop:blur-sm rounded-lg  shadow-lg bg-transparent placeholder-[#fffffffc7] px-[20px] font-semibold'
              required
            />
            {/* Eye Icon */}
            {show && <IoEyeOutline className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%]  bottom-[56%]' onClick={()=>setshow(prev => !prev)} />}
            {!show && <IoEyeOffSharp className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%] bottom-[56%]' onClick={()=>setshow(prev => !prev)} />}


            <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold '>
                Login
            </button>

            <p className='flex gap-[10px]'>You haven't any account?<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={() => navigate("/signup")}>Create New Account</span></p>


          </div>


        </form>
      </div>
    </div>
  )
}

export default Login