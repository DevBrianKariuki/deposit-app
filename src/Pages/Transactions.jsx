import React from 'react'
import styles from '../styles'
import TransactionCard from '../Components/TransactionCard'

const Transactions = () => {
  return (
    <div className='bg-background flex flex-col w-full overflow-hidden'>

      <div className={`flex flex-col items-center px-4`}>
        <div className='mt-12 mb-6 justify-center'>
          <p className='font-inter text-white font-bold text-2xl'>Transactions</p>
        </div>

      <div className='flex flex-col w-full gap-4 rounded-2xl my-5'>
        < TransactionCard type={'D'} amount={'1,200.00'} desc={'Daily deposits'} date={'12 Nov 2023'}/>
        < TransactionCard type={'D'} amount={'1,200.00'} desc={'Daily deposits'} date={'13 Nov 2023'}/>
        < TransactionCard type={'W'} amount={'2,850.00'} desc={'Service'} date={'23 Nov 2023'}/>
        < TransactionCard type={'W'} amount={'1,200.00'} desc={'Service'} date={'23 Nov 2023'}/>
        < TransactionCard type={'D'} amount={'2,850.00'} desc={'Service'} date={'23 Nov 2023'}/>
        < TransactionCard type={'W'} amount={'3,000.00'} desc={'Service'} date={'23 Nov 2023'}/>
        < TransactionCard type={'W'} amount={'2,850.00'} desc={'Service'} date={'23 Nov 2023'}/>
        < TransactionCard type={'D'} amount={'36,000.00'} desc={'Service'} date={'23 Nov 2023'}/>
        < TransactionCard type={'D'} amount={'2,850.00'} desc={'Service'} date={'23 Nov 2023'}/>
      </div>

      </div>

    </div>
  )
}

export default Transactions
