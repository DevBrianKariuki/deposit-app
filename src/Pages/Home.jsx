import React , {useState} from 'react'
import styles from '../styles'
import { FaChevronRight } from "react-icons/fa";
import { Modal } from 'flowbite-react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { Datepicker } from 'flowbite-react';


const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
  const [openReason, setOpenReason] = useState(false);

  return (
    <div className='bg-background w-full overflow-hidden '>

      <div className={`flex flex-col ${styles.paddingX}`}>
        <div className='flex justify-center items-center mt-10'>
          <p className='font-inter text-center text-md text-white'>Good Morning, <span className='text-orange'>Daniel 👋</span> </p>
        </div>

        <div className='bg-navyBlue shadow-md gap-4 my-5 flex flex-col items-center justify-center w-full rounded-3xl p-12'>
          <h1 className={`font-inter text-white font-black text-4xl`}>Ksh 39,650.00</h1>
          <p className='uppercase font-normal text-sm font-inter text-lightGray'>available account balance</p>
        </div>
        
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

                  <div className="flex my-8 mx-4">
                    <span className="inline-flex items-center font-inter font-black px-5 py-3 text-xl text-white bg-background border rounded-e-0 border-gray-300 rounded-s-xl ">
                      <p>Ksh</p>
                    </span>
                    <input type="number" className="rounded-none rounded-e-xl bg-gray-50 border text-background font-inter font-bold text-xl focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="0.00"/>
                  </div>

                  <div className='flex gap-2 my-8 mx-4'>
                    <Datepicker className='w-full items-center justify-between font-medium font-inter' title="Select Deposit Date" autoHide={true} minDate={new Date(2023, 8, 24)} />
                  </div>

                  <div className="flex mx-4 flex-col gap-3">
                    <label  className="block text-lg font-bold font-inter text-gray-900 dark:text-white">Deposited?</label>
                      <div className='flex gap-6'>
                        <div className="flex items-center me-4">
                            <input  type="radio" value="Yes" name="inline-radio-group" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange focus:ring-1"
                            onClick={() => setOpenReason(false)}/>
                            <label  className="ms-2 text-lg font-inter font-medium text-background ">Yes</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input type="radio" value="No" name="inline-radio-group" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange focus:ring-1"
                            onClick={() => setOpenReason(true)}/>
                            <label className="ms-2 font-medium text-background text-lg font-inter">No</label>
                        </div>
                      </div>
                  </div>

                  <div className={` ${ openReason === true ? 'flex' : 'hidden' }  flex-col mx-4 my-8`}>
                    <label  className="block mb-2 text-lg font-bold font-inter text-gray-900 dark:text-white">Reason</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-md font-inter text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange focus:border-orange" placeholder="Please input the reason here"></textarea>
                  </div>

                  <div className="flex items-center mt-6 justify-center">
                    <button className="bg-orange font-inter text-lg flex items-center gap-3 font-semibold rounded-xl text-white px-12 py-4" 
                      onClick={() => setOpenModal(false)}>
                        Confirm
                        < IoMdCheckmarkCircleOutline fontSize={24} />
                    </button>
                  </div>
                </Modal.Body>
              </Modal>
            
          <button className='flex justify-center items-center gap-4 text-white text-md font-inter w-[70%] bg-lightBlue w-full font-semibold py-6  rounded-xl'
          onClick={() => setOpenWithdrawModal(true)}>
            Confirm Withdrawal
            <FaChevronRight />
          </button>
        </div>


        <Modal dismissible className='bg-lightblue h-[700px]' show={openWithdrawModal} onClose={() => setOpenWithdrawModal(false)}>
                <Modal.Body>
                  <div className="flex items-center flex-col gap-2 justify-center">
                    <h1 className="font-inter font-bold text-2xl">WITHDRAWAL</h1>
                    <p className='font-inter font-normal text-md text-gray-500'>Please confirm today's withdrawal</p>
                  </div>

                  <div className="flex my-8 mx-4">
                    <span className="inline-flex items-center font-inter font-black px-5 py-3 text-xl text-white bg-background border rounded-e-0 border-gray-300 rounded-s-xl ">
                      <p>Ksh</p>
                    </span>
                    <input type="number" className="rounded-none rounded-e-xl bg-gray-50 border text-background font-inter font-bold text-xl focus:ring-orange focus:border-orange block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="0.00"/>
                  </div>

                  <div className='flex gap-2 my-8 mx-4'>
                    <Datepicker className='w-full items-center justify-between font-medium font-inter' title="Select Deposit Date" autoHide={true} minDate={new Date(2023, 8, 24)} />
                  </div>

                  <div className={` flex  flex-col mx-4 my-8`}>
                    <label  className="block mb-2 text-lg font-bold font-inter text-gray-900 dark:text-white">Reason</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-md font-inter text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange focus:border-orange" placeholder="Please input the reason here"></textarea>
                  </div>

                  <div className="flex items-center mt-6 justify-center">
                    <button className="bg-orange font-inter text-lg flex items-center gap-3 font-semibold rounded-xl text-white px-12 py-4" 
                      onClick={() => setOpenWithdrawModal(false)}>
                        Confirm
                        < IoMdCheckmarkCircleOutline fontSize={24} />
                    </button>
                  </div>
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