import React, { useContext, useEffect, useState } from 'react'
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext'
// cart context
import { CartContext } from '../contexts/CartContext'
// import icons
import { BsBag } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'
// import link
import { Link } from 'react-router-dom'
// import logo
import { PiCoatHangerBold } from 'react-icons/pi';

const Header = () => {
  // header state
  const [ isActive, setIsActive ] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all md:px-[30px] max-md:px-[20px] max-md:py-4`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/*'} className='mr-5'>
            {/* logo */}
            <h1 className='text-[25px] max-md:text-[20px] font-medium border-solid border-2 px-2 border-black text-center'>f'O</h1>
        </Link>
        <Link to={'/*'} className='text-[25px] border-b-4 border-[#1450A3] max-md:text-[20px] max-md:border-b-2'>FASH-ON</Link>
        {/* cart */}
        <div className='cursor-pointer flex relative items-center'>
          {/* Login */}
          <Link to={'/login'}>
            <BsPerson className='text-[30px] max-md:text-[25px]'/>
          </Link>
          <div onClick={() => setIsOpen(!isOpen)}>
            <BsBag className='text-2xl max-md:text-[22px] ml-4' />
            <div className='bg-[#1450A3] absolute -right-2 -bottom-1 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>
              {itemAmount}
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
