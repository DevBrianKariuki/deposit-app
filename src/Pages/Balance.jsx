import React from 'react'

const Balance = () => {
  return (
    <div id='balance' className='bg-background flex flex-col w-full overflow-hidden'>

      <div className={`flex flex-col items-center px-4`}>
        <div className='mt-12 mb-6 justify-center'>
          <p className='font-inter text-white font-bold text-2xl'>Balance</p>
        </div>

        <div className='bg-navyBlue shadow-md gap-4 my-5 flex flex-col items-center justify-center w-full rounded-3xl p-12'>
          <h1 className={`font-inter text-white font-black text-4xl`}>Ksh 39,650.00</h1>
          <p className='uppercase font-normal text-sm font-inter text-lightGray'>available account balance</p>
        </div>


      </div>

    </div>
  )
}

export default Balance