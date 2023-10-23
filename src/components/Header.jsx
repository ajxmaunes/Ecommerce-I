import React, { useContext, useEffect, useState } from 'react'
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext'
import { MenuContext } from '../contexts/MobileMenuContext'
// cart context
import { CartContext } from '../contexts/CartContext'
// import icons
import { BsBag } from 'react-icons/bs'
import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
// import link
import { Link } from 'react-router-dom'

const Header = () => {
  // header state
  const [ isActive, setIsActive ] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { isOpenLeft, setIsOpenLeft } = useContext(MenuContext)
  const { itemAmount } = useContext(CartContext)
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 10 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <div>
      <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all md:px-[30px] max-md:px-[20px] max-md:py-4`}>
        <div className='container mx-auto flex items-center justify-between h-full'>
          <div onClick={() => setIsOpenLeft(!isOpenLeft)} className='md:hidden'>
            <HiOutlineMenuAlt2 className='text-[30px] mr-10 max-md:mr-4 -ml-2 items-center'/>
          </div>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/*'} className='mr-4 max-md:hidden cursor-pointer'>
              {/* logo */}
              <h1 className='text-[25px] max-md:text-[20px] font-medium border-solid border-2 px-2 border-black text-center'>f'O</h1>
          </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/*'} className='text-[25px] border-b-4 border-[#1450A3] max-md:text-[20px] max-md:border-b-2'>FASH-OFF</Link>
          {/* cart */}
          <div className='cursor-pointer flex relative items-center'>
            {/* Login */}
            <Link to={'/login'} className='max-md:hidden'>
              <IoPersonOutline className='text-[26px] mt-[1px] max-md:text-[25px]'/>
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
    </div>
  )
}

export default Header
