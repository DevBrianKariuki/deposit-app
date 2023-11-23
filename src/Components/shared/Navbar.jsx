import React from 'react'
import { Link, useLocation} from "react-router-dom";
import styles from '../../styles'
import { GoHomeFill } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { FaSackDollar } from "react-icons/fa6";
import { TbReport } from "react-icons/tb";


const Navbar = () => {

  const { pathname } = useLocation()

  return (
    <nav className={`bg-navyBlue border-t-[1px] border-navBorder w-full overflow-hidden bottom-0 right-0 left-0 z-5 fixed`}>
      <div className='flex flex-row items-center justify-between p-6'>
        <Link to={'/'}>
          <div className={` flex flex-col items-center  ${pathname === '/' ? 'text-orange' : 'text-white' } `}>
            <GoHomeFill className={` mx-4 `} fontSize={28}  />
            {/* <p className=' font-inter text-xs mt-2'>Home</p> */}
            </div>
        </Link>

        <Link to={'/transactions'}>
          <div className={` flex flex-col items-center  ${pathname === '/transactions' ? 'text-orange' : 'text-white' } `}>
              <GrTransaction className=' mx-4' fontSize={28}  />
              {/* <p className=' font-inter text-xs mt-2'>Transactions</p> */}
          </div>
        </Link>

        <Link to={'/balance'}>
          <div className={` flex flex-col items-center  ${pathname === '/balance' ? 'text-orange' : 'text-white' } `}>
            <FaSackDollar className=' mx-4' fontSize={28}  />
            {/* <p className=' font-inter text-xs mt-2'>Balance</p> */}
          </div>
        </Link>

        <Link to={'/reports'}>
          <div className={` flex flex-col items-center  ${pathname === '/reports' ? 'text-orange' : 'text-white' } `}>
            <TbReport className=' mx-4' fontSize={28}  />
            {/* <p className=' font-inter text-xs mt-2'>Reports</p> */}
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar