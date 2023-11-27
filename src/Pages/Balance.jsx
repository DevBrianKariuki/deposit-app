import React, {useEffect, useState} from 'react'
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


const Balance = () => {
  const balanceRef = collection(firestore, "balances");
  const [balances, setBalances] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let balance = [];
    getDocs(balanceRef).then((snapshot)=> {
  
        snapshot.docs.forEach((doc) =>{
          balance.push({key: doc.id, ...doc.data()})
        })
  
        setBalances(balance)
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
    <div id='balance' className='bg-background flex flex-col w-full overflow-hidden'>

      <div className={`flex flex-col items-center px-4`}>
        <div className='mt-12 mb-6 justify-center'>
          <p className='font-inter text-white font-bold text-2xl'>Balance</p>
        </div>

        <div className='bg-navyBlue shadow-md gap-4 my-5 flex flex-col items-center justify-center w-full rounded-3xl p-12'>
          <h1 className={`font-inter text-white font-black text-4xl`}>{balances.map((balance, key) =>(
            <p>Ksh {balance.balances}.00</p>
          ))}</h1>
          <p className='uppercase font-normal text-sm font-inter text-lightGray'>available account balance</p>
        </div>


      </div>

    </div>
  )
}

export default Balance