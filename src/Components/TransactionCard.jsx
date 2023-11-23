import React from 'react'

const TransactionCard = ({amount, type, desc, date}) => {
  return (
    <div className='flex flex-row bg-navyBlue justify-between p-4 rounded-xl items-center'>
        <div className='flex flex-row items-center'>
        <div className={` ${type === 'D' ? 'bg-orange' : 'bg-lightBlue'} text-xl font-inter w-[50px] h-[50px] flex items-center justify-center text-white font-black rounded-full`}>{type}</div>
        <div className=' ml-4 flex flex-col'>
            <h1 className='text-white font-inter text-xl font-extrabold'>Ksh {amount}</h1>
            <span className='text-sm text-lightGray'>{date}</span>
        </div>
        </div>
        <p className='text-sm text-lightGray'> {desc}</p>
    </div>
  )
}

export default TransactionCard