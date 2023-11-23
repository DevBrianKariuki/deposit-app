import React from 'react'
import { GrTransaction } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaSearchDollar } from "react-icons/fa";


const Reports = () => {
  return (
    <div id='reports' className='bg-background h-full w-full overflow-hidden '>
      <div className='flex flex-col items-center px-4'>
        <div className='mt-12 mb-6 justify-center'>
            <p className='font-inter text-white font-bold text-2xl'>Reports</p>
        </div>

          {/* Stats Cards */}
        <div className='flex w-full flex-row gap-3 justify-between items-center'>
          <div className='flex w-[50%] flex-col bg-navyBlue rounded-xl px-4 py-8'>
            <div className='flex justify-between items-center'>
              <p className='font-inter  text-green-500'>Total in</p>
              <LuBadgeDollarSign className='text-green-500' fontSize={24} />
            </div>
            <h1 className='pt-6 text-white font-inter font-bold text-xl'>Ksh 56,600.00</h1>
          </div>

          <div className='flex w-[50%] flex-col bg-navyBlue rounded-xl px-4 py-8'>
            <div className='flex justify-between'>
              <p className='font-inter  text-red-500'>Total out</p>
              <LuBadgeDollarSign className='text-red-500' fontSize={24} />
            </div>
            <h1 className='pt-6 text-white font-inter font-bold text-xl'>Ksh 29,250.00</h1>
          </div>
        </div>

        {/* Search bar */}
        <div className='my-8 p-2 flex gap-3 items-center'>
          <input className='bg-navyBlue px-9 py-4 flex-1 text-white font-inter rounded-lg outline-none' type="search" placeholder='Search' />
          <button className='w-[50px] h-[50px] bg-orange flex items-center justify-center rounded-lg'>
            <FaSearchDollar className='text-white' fontSize={22} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Reports