import React from 'react'

const balanceCard = (amount, description) => {
  return (
    <div className="bg-navyBlue w-full">
        <div className='text-white'>{amount}</div>
        <div className='text-white'>{description}</div>
    </div>

  )
}

export default balanceCard