import React, {useState, useEffect} from 'react'
import styles from '../styles'
import TransactionCard from '../Components/TransactionCard'
import { Modal } from 'flowbite-react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import { firestore } from '../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const Transactions = () => {

  const transactionsRef = collection(firestore, "transactions");
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let allTransaction = [];
    getDocs(transactionsRef).then((snapshot)=> {

        snapshot.docs.forEach((doc) =>{
          allTransaction.push({key: doc.id, ...doc.data()})
        })

        setTransactions(allTransaction)
        setIsLoading(false)

    } )
  
   
  }, [])
  


  if(isLoading){
    return (
    <div id='transactions' className='flex items-center justify-center'> 
        
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-orange border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
    </div>
    )
  }



  return (
    
    <div id='transactions' className='bg-background h-full w-full overflow-hidden'>

      <div className={`flex flex-col items-center px-4`}>
        <div className='mt-12 mb-6 justify-center'>
          <p className='font-inter text-white font-bold text-2xl'>Transactions</p>
        </div>

      <div className='flex flex-col w-full gap-4 rounded-2xl my-5' onClick={() => setOpenTransactionModal(true)}>
          { transactions.map((transaction) => (
              < TransactionCard key={transaction.key} type={transaction.Initial} amount={transaction.Amount} desc={transaction.Description} date={transaction.Date}/>
          ) ) }
      
      </div>

      <Modal dismissible className='bg-lightblue border-none h-[400px]' show={openTransactionModal} onClose={() => setOpenTransactionModal(false)}>
        <Modal.Body className='flex flex-col gap-4'>
          <div className="flex items-center flex-col gap-1 pb-5 justify-start">
            <h1 className="font-inter font-normal text-md text-orange">Amount</h1>
            <p className='font-inter font-extrabold text-3xl text-background'> - Ksh 3,800</p>
          </div>

          <div className="flex items-center flex-col gap-1 pb-5 justify-start">
            <h1 className="font-inter font-normal text-md text-orange">Date</h1>
            <p className='font-inter font-medium text-lg text-gray-500'>21, November 2023</p>
          </div>

          <div className="flex items-center flex-col gap-1 justify-start">
            <h1 className="font-inter font-normal text-md text-orange">Description</h1>
            <p className='font-inter max-w-[80%] text-center font-medium text-lg text-gray-500'>The money was used to service the car belts</p>
          </div>

        </Modal.Body>
        </Modal>

      </div>

    </div>
  )
}

export default Transactions
