import React from 'react'
import { GrTransaction } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaSearchDollar } from "react-icons/fa";
import { FaArrowDownWideShort } from "react-icons/fa6";


const Reports = () => {
  return (
    <div id='reports' className='bg-background h-full w-full overflow-hidden '>
      <div className='flex flex-col items-center px-4'>
        <div className='mt-12 mb-6 justify-center'>
            <p className='font-inter text-white font-bold text-2xl'>Reports</p>
        </div>

          {/* Stats Cards */}
        <div className='flex w-full flex-row gap-3 justify-between items-center'>
          <div className='flex shadow-sm w-[50%] flex-col bg-navyBlue rounded-xl px-4 py-8'>
            <div className='flex justify-between items-center'>
              <p className='font-inter  text-green-500'>Total in</p>
              <LuBadgeDollarSign className='text-green-500' fontSize={24} />
            </div>
            <h1 className='pt-6 text-white font-inter font-bold text-xl'>Ksh 56,600.00</h1>
          </div>

          <div className='flex shadow-sm w-[50%] flex-col bg-navyBlue rounded-xl px-4 py-8'>
            <div className='flex justify-between'>
              <p className='font-inter  text-red-500'>Total out</p>
              <LuBadgeDollarSign className='text-red-500' fontSize={24} />
            </div>
            <h1 className='pt-6 text-white font-inter font-bold text-xl'>Ksh 29,250.00</h1>
          </div>
        </div>

        {/* Search bar */}
        <div className='my-4 p-2 flex gap-3 items-center'>
          <input className='bg-navyBlue px-9 py-4 flex-1 text-white font-inter rounded-lg outline-none' type="search" placeholder='Search' />
          <button className='w-[50px] h-[50px] bg-orange flex items-center justify-center rounded-lg'>
            <FaSearchDollar className='text-white' fontSize={22} />
          </button>
        </div>


        {/* Table */}

        <div className="flex w-full flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                      <thead
                        className="border-b bg-lightBlue font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr className=''>
                          <th scope="col" className="font-inter items-center gap-2 px-6 py-4">
                            Amount
                            {/* <FaArrowDownWideShort /> */}
                          </th>
                          <th scope="col" className="font-inter items-center gap-2 px-6 py-4">
                            Date
                            {/* <FaArrowDownWideShort /> */}
                          </th>
                          <th scope="col" className="font-inter items-center gap-2 px-6 py-4">
                            Type
                            {/* <FaArrowDownWideShort /> */}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">21 Nov 2023</td>
                          <td class="whitespace-nowrap font-inter text-green-500 font-medium  px-6 py-4">Credit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-green-500 font-medium  px-6 py-4">Credit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap font-inter text-md font-bold text-white  px-6 py-4">Ksh 1,200</td>
                          <td class="whitespace-nowrap font-inter text-md font-medium text-white  px-6 py-4">15 Oct 2023</td>
                          <td class="whitespace-nowrap font-inter text-red-500 font-medium  px-6 py-4">Debit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


      </div>
    </div>
  )
}

export default Reports