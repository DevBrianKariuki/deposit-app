import React from 'react'
import { IoMdLogIn } from "react-icons/io";

const Login = () => {
  return (
    <div id='login' className={` bg-[url('./assets/kdj716u.png')] bg-center bg-cover w-full overflow-hidden flex flex-col items-center justify-center`}>
      
        <h1 className='font-inter text-4xl text-white font-extrabold'>KDJ 716 U</h1>
        <div className='w-full px-12 flex flex-col gap-4 mt-10'>
          
            <div class="flex">
              {/* <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-orange border rounded-e-0 border-gray-300 rounded-s-xl">
                <FaUserTie className='text-white' fontSize={20} />
              </span> */}
              <input type="text" class="rounded-full rounded-e-full px-10 bg-gray-50 border text-background focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-lg font-inter font-normal border-gray-300 p-4" placeholder="Username" />
            </div>

            <div class="flex">
              {/* <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-orange border rounded-e-0 border-gray-300 rounded-s-xl">
                <FaUnlock className='text-white' fontSize={20} />
              </span> */}
              <input type="password" class="rounded-full rounded-e-full px-10 bg-gray-50 border text-background focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-lg font-inter font-normal border-gray-300 p-4" placeholder="Password" />
            </div>

            <div className='flex w-full'>
              <button className='bg-orange flex items-center justify-center gap-4 w-full text-white font-bold text-xl font-inter py-3 rounded-full'>
                LOGIN
                < IoMdLogIn fontSize={28} />
              </button>
            </div>

        </div>
    </div>
  )
}

export default Login