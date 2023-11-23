import React , {useState} from 'react'
import styles from '../styles'
import { FaChevronRight } from "react-icons/fa";
import { Button, Modal } from 'flowbite-react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"


const Home = () => {
  const [openModal, setOpenModal] = useState(false);

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


              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="flex items-center justify-center">
                  <h1 clas>DEPOSIT</h1>
                </Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    
                    
                  </div>
                </Modal.Body>
                <Modal.Footer className="flex items-center justify-center">
                  <button className="bg-orange font-inter text-lg flex items-center gap-3 font-semibold rounded-xl text-white px-12 py-4" 
                    onClick={() => setOpenModal(false)}>
                      Confirm
                      < IoMdCheckmarkCircleOutline fontSize={24} />
                  </button>
                </Modal.Footer>
              </Modal>
            

          <button className='flex justify-center items-center gap-4 text-white text-md font-inter w-[70%] bg-lightBlue w-full font-semibold py-6  rounded-xl'>
            Confirm Withdrawal
            <FaChevronRight />
          </button>
        </div>






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