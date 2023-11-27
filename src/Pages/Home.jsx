import React , {useEffect, useRef, useState} from 'react'
import styles from '../styles'
import { FaChevronRight } from "react-icons/fa";
import { Modal } from 'flowbite-react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { Calendar } from 'react-date-range'
import format from 'date-fns/format'
import { HiFire } from 'react-icons/hi';
import { Button, Toast } from 'flowbite-react';
import { GiPartyPopper } from "react-icons/gi";

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { firestore } from '../firebase';
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';



const Home = () => {

  const balanceRef = collection(firestore, "balances");
  const [balances, setBalances] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  const ref = collection(firestore, "deposits");
  const ref2 = collection(firestore, "withdrawals");
  const ref3 = collection(firestore, "transactions");

  let depositMade = ''
  let cashDeposited = ''

  const handleDeposit = async (e) => {
    e.preventDefault();

    if (amount === '') {
      cashDeposited = '0.00'
    } else {
      cashDeposited = amount
    }

    if (deposited === '') {
      alert('Please confirm if the deposit was made!');
      return('An error occured')

    } else if( deposited === true && cashDeposited === '0.00'){
      alert('Please enter a valid amount')
      return('An error occured')

    }else if( deposited === true && cashDeposited > 0){
      depositMade = 'Yes'
      setReason('')
    }
    else if( deposited === false && reason === '' ){
      alert('Please describe the reason')
      return('An error occured')

    } else if(deposited === false){
      cashDeposited = '0.00'
      depositMade = 'No'
    }

    let transaction = {
      Amount : Number(cashDeposited),
      Date: calendar,
      Deposited : depositMade,
      Reason: reason,
      Description: 'Daily Deposit',
      Type : 'Debit',
      Initial : 'D'
    }

    try {
      await addDoc(ref, transaction);
        try {
          await addDoc(ref3, transaction)

          const balanceReference = doc(firestore, 'balances', 'Ygdp1HplqEu7ZPd5tPI3')
          let currentBalance = ''
          getDocs(balanceReference).then((snapshot) => {
            snapshot.docs
            console.log(snapshot.docs)
          })

          // console.log("Success: Transaction added!")
          // setShowToast((state) => !state)
          // setOpenModal(false)

        } catch (e) {
          console.log(e)
        }
      // window.location.replace('/reserved')
    } catch (e) {
      console.error("Error adding transaction: ", e);
    }

    console.log(transaction);
  }


  const handleWithdrawal = async (e) => {
    e.preventDefault();

    if (withdrawalAmount === '' || withdrawalAmount < 0) {
      alert('Please enter a valid withdrawal amount');
      return('An error occured')

    } else if( WithdrawalReason === ''){
      alert('Please enter a valid withdrawal reason')
      return('An error occured')
    }else{

      let withdrawal ={

        Amount: Number(withdrawalAmount),
        Reason: WithdrawalReason,
        Date: calendar,
        Description: 'Withdrawal',
        Type: 'Credit',
        Initial: 'W'
      }

      try { 
        await addDoc(ref2, withdrawal);
          try {
            await addDoc(ref3, withdrawal)
            setShowToast((state) => !state)
            setOpenWithdrawModal(false)
            console.log("Success: Withdrawal Confirmed added!")
          } catch (error) {
            console.log(error)
          }
      } catch (e) {
        console.error("Error adding withdrawal: ", e);
      }
  
  
      console.log(withdrawal);
    }
  }

  const updateBalance = async (balance) => {
      
  }


  const [openModal, setOpenModal] = useState(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
  const [openReason, setOpenReason] = useState(false);

  const [amount, setAmount] = useState('');
  const [deposited, setDeposited] = useState('');
  const [reason, setReason] = useState('');


  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [WithdrawalReason, setWithdrawalReason] = useState('');
  const [showToast, setShowToast] = useState(false);




  // ///////////////////////////////////////////Selecting the date////////////////////////////////////////////////

    // date state
    const [calendar, setCalendar] = useState('')

    // open close
    const [open, setOpen] = useState(false)

    const [toggle, setToggle] = useState(false)
  
    // get the target element to toggle 
    const refOne = useRef(null)
  
    useEffect(() => {
      // set current date on component load
      setCalendar(format(new Date(), 'MM/dd/yyyy'))
      // event listeners
      document.addEventListener("keydown", hideOnEscape, true)
      document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
  
      if( e.key === "Escape" ) {
        setOpen(false)
      }
    }
  

    const hideOnClickOutside = (e) => {
      if( refOne.current && !refOne.current.contains(e.target) ) {
        setOpen(false)
      }
    }
  
    // on date change, store date in state
    const handleSelect = (date) => {
      // console.log(date)
      // console.log(format(date, 'MM/dd/yyyy'))
      setCalendar(format(date, 'MM/dd/yyyy'))
    }
//////////////////////////////////////////////////End of Date Selection///////////////////////////////////////////////////


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

console.log(balances)

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
    <div id='home' className='bg-background w-full overflow-hidden '>

      <div className={`flex flex-col ${styles.paddingX}`}>
        <div className='flex justify-center items-center mt-10'>
          <p className='font-inter text-center text-md text-white'>Good Morning, <span className='text-orange'>Daniel 👋</span> </p>
        </div>

        <div className='bg-navyBlue shadow-md gap-4 my-5 flex flex-col items-center justify-center w-full rounded-3xl p-12'>
          <h1 className={`font-inter text-white font-black text-4xl`}>{balances.map((balance, key) =>(
            <p>Ksh {balance.balances }.00</p>
          ))}</h1>
          <p className='uppercase font-normal text-sm font-inter text-lightGray'>available account balance</p>
        </div>

        {showToast && (
          <Toast className='absolute z-5 w-full top-0'>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
              <GiPartyPopper className="h-5 w-5" />
            </div>
            <div className="ml-3 text-background text-sm font-normal">Transaction saved succesfully!</div>
            <Toast.Toggle onDismiss={() => setShowToast(false)} />
          </Toast>
        )}


        <div className='flex flex-col items-center my-5 gap-5'>
          <button  className='text-white flex justify-center items-center gap-4  text-md w-[70%] font-inter bg-orange w-full font-semibold py-6 rounded-xl'
          onClick={() => setOpenModal(true)}>
            Confirm Deposit
            <FaChevronRight />
            </button>


              <Modal dismissible className='bg-lightblue h-[700px]' show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                  <div className="flex items-center flex-col gap-2 justify-center">
                    <h1 className="font-inter font-bold text-2xl">DEPOSIT</h1>
                    <p className='font-inter font-normal text-md text-gray-500'>Please confirm today's deposit</p>
                  </div>
                <form onSubmit={handleDeposit}>
                  <div className="flex my-8 mx-4">
                    <span className="inline-flex items-center font-inter font-black px-5 py-3 text-xl text-white bg-background border rounded-e-0 border-gray-300 rounded-s-xl ">
                      <p>Ksh</p>
                    </span>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} className="rounded-none rounded-e-xl bg-gray-50 border text-background font-inter font-bold text-xl focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="0.00"/>
                  </div>

{/* //////////////////////////////////////Select Date/////////////////////////////////////////////////////////////// */}
                  <div className='flex gap-2 my-8 mx-4'>
                      <div className="calendarWrap">
                        <input
                          value={ calendar }
                          className="rounded-xl bg-gray-50 border text-background font-inter font-medium text-xl focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                          onClick={() => setToggle(!toggle)} onChange={() => setToggle(false) }
                        />

                        <div ref={refOne}>
                          {toggle && 
                            <Calendar
                              date ={ new Date() }
                              onChange = { handleSelect }
                              onClick={() => setToggle(false)}
                              className="font-inter font-semibold rounded-xl calendarElement"
                            />
                          }
                        </div>

                      </div>
                  </div>
{/* //////////////////////////////////////Select Date/////////////////////////////////////////////////////////////// */}

                  <div className="flex mx-4 flex-col gap-3">
                    <label  className="block text-lg font-bold font-inter text-gray-900 dark:text-white">Deposited?</label>
                      <div className='flex gap-6'>
                        <div className="flex items-center me-4">
                            <input  type="radio" onClick={() => setDeposited(true)} value="Yes" name="inline-radio-group" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange focus:ring-1"
                            
                            />
                            <label  className="ms-2 text-lg font-inter font-medium text-background ">Yes</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input type="radio" onClick={() => setDeposited(false) }  value="No" name="inline-radio-group" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange focus:ring-1"
                            
                            />
                            <label className="ms-2 font-medium text-background text-lg font-inter">No</label>
                        </div>
                      </div>
                  </div>

                  <div className={` ${ deposited === false ? 'flex' : 'hidden' }  flex-col mx-4 my-8`}>
                    <label  className="block mb-2 text-lg font-bold font-inter text-gray-900 dark:text-white">Reason</label>
                    <textarea id="message" onChange={(e) => setReason(e.target.value)}  rows="4" className="block p-2.5 w-full text-md font-inter text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange focus:border-orange" placeholder="Please input the reason here"></textarea>
                  </div>

                  <div className="flex items-center mt-6 justify-center">
                    <button type='submit' className="bg-orange font-inter text-lg flex items-center gap-3 font-semibold rounded-xl text-white px-12 py-4" 
                      // onClick={handleDeposit}
                      // onClick={() => setOpenModal(false)}
                      >
                        Confirm
                        < IoMdCheckmarkCircleOutline fontSize={24} />
                    </button>
                  </div>
                  </form>
                </Modal.Body>
              </Modal>
            
          <button className='flex justify-center items-center gap-4 text-white text-md font-inter w-[70%] bg-lightBlue w-full font-semibold py-6  rounded-xl'
          onClick={() => setOpenWithdrawModal(true)}>
            Confirm Withdrawal
            <FaChevronRight />
          </button>
        </div>

{/* //////////////////////////////////WITHDRAWAL MODAL///////////////////////////////////////// */}
        <Modal dismissible className='bg-lightblue h-[700px]' show={openWithdrawModal} onClose={() => setOpenWithdrawModal(false)}>
                <Modal.Body>
                  <div className="flex items-center flex-col gap-2 justify-center">
                    <h1 className="font-inter font-bold text-2xl">WITHDRAWAL</h1>
                    <p className='font-inter font-normal text-md text-gray-500'>Please confirm today's withdrawal</p>
                  </div>
                  <form onSubmit={handleWithdrawal}>
                  <div className="flex my-8 mx-4">
                    <span className="inline-flex items-center font-inter font-black px-5 py-3 text-xl text-white bg-background border rounded-e-0 border-gray-300 rounded-s-xl ">
                      <p>Ksh</p>
                    </span>
                    <input type="number" onChange={(e) => setWithdrawalAmount(e.target.value)} className="rounded-none rounded-e-xl bg-gray-50 border text-background font-inter font-bold text-xl focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="0.00"/>
                  </div>

                  <div className='flex gap-2 my-8 mx-4'>
                      <div className="calendarWrap">
                        <input
                          value={ calendar }
                          readOnly
                          className="rounded-xl bg-gray-50 border text-background font-inter font-medium text-xl focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                          onClick={() => setOpen(!open) }
                        />

                        <div ref={refOne}>
                          {open && 
                            <Calendar
                              date={ new Date() }
                              onChange = { handleSelect }
                              className="font-inter font-semibold rounded-xl calendarElement"
                            />
                          }
                        </div>

                      </div>
                  </div>

                  <div className={` flex  flex-col mx-4 my-8`}>
                    <label  className="block mb-2 text-lg font-bold font-inter text-gray-900 dark:text-white">Reason</label>
                    <textarea onChange={(e) => setWithdrawalReason(e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-md font-inter text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange focus:border-orange" placeholder="Please input the reason here"></textarea>
                  </div>

                  <div className="flex items-center mt-6 justify-center">
                    <button type='submit' className="bg-orange font-inter text-lg flex items-center gap-3 font-semibold rounded-xl text-white px-12 py-4" 
                      // onClick={() => setOpenWithdrawModal(false)}
                      >
                        Confirm
                        < IoMdCheckmarkCircleOutline fontSize={24} />
                    </button>
                  </div>
                  </form>
                </Modal.Body>
        </Modal>






        <div className='my-5 gap-10 h-[300px] justify-start bg-navyBlue px-8 py-8 flex flex-col rounded-3xl overflow-y-auto overflow-x-hidden'>
          
          <div>
              <h1 className='text-white font-inter font-bold text-2xl'>November</h1>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-semibold text-white'>M</p>
                  <p className='font-inter font-semibold text-white'>T</p>
                  <p className='font-inter font-semibold text-white'>W</p>
                  <p className='font-inter font-semibold text-white'>T</p>
                  <p className='font-inter font-semibold text-white'>F</p>
                  <p className='font-inter font-semibold text-white'>S</p>
                  <p className='font-inter font-semibold text-white'>S</p>
              </div>

              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>1</p>
                  <p className='font-inter font-normal text-green-600'>2</p>
                  <p className='font-inter font-normal text-green-600'>3</p>
                  <p className='font-inter font-normal text-green-600'>4</p>
                  <p className='font-inter font-normal text-green-600'>5</p>
                  <p className='font-inter font-normal text-green-600'>6</p>
                  <p className='font-inter font-normal text-red-600'>7</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>8</p>
                  <p className='font-inter font-normal text-green-600'>9</p>
                  <p className='font-inter font-normal text-green-600'>10</p>
                  <p className='font-inter font-normal text-green-600'>11</p>
                  <p className='font-inter font-normal text-green-600'>12</p>
                  <p className='font-inter font-normal text-green-600'>13</p>
                  <p className='font-inter font-normal text-red-600'>14</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>15</p>
                  <p className='font-inter font-normal text-lightGray'>16</p>
                  <p className='font-inter font-normal text-lightGray'>17</p>
                  <p className='font-inter font-normal text-lightGray'>18</p>
                  <p className='font-inter font-normal text-lightGray'>19</p>
                  <p className='font-inter font-normal text-lightGray'>20</p>
                  <p className='font-inter font-normal text-red-600'>21</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>22</p>
                  <p className='font-inter font-normal text-lightGray'>23</p>
                  <p className='font-inter font-normal text-lightGray'>24</p>
                  <p className='font-inter font-normal text-lightGray'>25</p>
                  <p className='font-inter font-normal text-lightGray'>26</p>
                  <p className='font-inter font-normal text-lightGray'>27</p>
                  <p className='font-inter font-normal text-red-600'>28</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>29</p>
                  <p className='font-inter font-normal text-lightGray'>30</p>
              </div>
          </div>

          <div>
              <h1 className='text-white font-inter font-bold text-2xl'>December</h1>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-semibold text-white'>M</p>
                  <p className='font-inter font-semibold text-white'>T</p>
                  <p className='font-inter font-semibold text-white'>W</p>
                  <p className='font-inter font-semibold text-white'>T</p>
                  <p className='font-inter font-semibold text-white'>F</p>
                  <p className='font-inter font-semibold text-white'>S</p>
                  <p className='font-inter font-semibold text-white'>S</p>
              </div>

              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>1</p>
                  <p className='font-inter font-normal text-green-600'>2</p>
                  <p className='font-inter font-normal text-green-600'>3</p>
                  <p className='font-inter font-normal text-green-600'>4</p>
                  <p className='font-inter font-normal text-green-600'>5</p>
                  <p className='font-inter font-normal text-green-600'>6</p>
                  <p className='font-inter font-normal text-red-600'>7</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>8</p>
                  <p className='font-inter font-normal text-green-600'>9</p>
                  <p className='font-inter font-normal text-green-600'>10</p>
                  <p className='font-inter font-normal text-green-600'>11</p>
                  <p className='font-inter font-normal text-green-600'>12</p>
                  <p className='font-inter font-normal text-green-600'>13</p>
                  <p className='font-inter font-normal text-red-600'>14</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>15</p>
                  <p className='font-inter font-normal text-lightGray'>16</p>
                  <p className='font-inter font-normal text-lightGray'>17</p>
                  <p className='font-inter font-normal text-lightGray'>18</p>
                  <p className='font-inter font-normal text-lightGray'>19</p>
                  <p className='font-inter font-normal text-lightGray'>20</p>
                  <p className='font-inter font-normal text-red-600'>21</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>22</p>
                  <p className='font-inter font-normal text-lightGray'>23</p>
                  <p className='font-inter font-normal text-lightGray'>24</p>
                  <p className='font-inter font-normal text-lightGray'>25</p>
                  <p className='font-inter font-normal text-lightGray'>26</p>
                  <p className='font-inter font-normal text-lightGray'>27</p>
                  <p className='font-inter font-normal text-red-600'>28</p>
              </div>
              <div className='flex my-3 justify-between items-center'>
                  <p className='font-inter font-normal text-green-600'>29</p>
                  <p className='font-inter font-normal text-lightGray'>30</p>
              </div>
          </div>

        </div>
          
      </div>

    </div>
  )
}

export default Home