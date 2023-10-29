import React, { useContext } from 'react'
// import link
import { Link } from 'react-router-dom'
// import icons
import { IoMdArrowForward } from 'react-icons/io'
import { BsQuestionCircle } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
// import components
import CartItem from '../components/CartItem'
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext'
// import cart context
import { CartContext } from '../contexts/CartContext'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total, itemAmount } = useContext(CartContext)
  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:max-w-[30rem] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 max-md:py-4 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        {/* Login icon for mobile */}
        <Link to={'/login'} onClick={handleClose} className='md:hidden'>
            <button className='text-sm border bg-slate-50 px-2 py-2 flex items-center'><BsFillPersonFill className='mr-2'/>LOG IN</button>
        </Link>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[70%] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className='flex flex-col gap-y-2 py-3'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div className='cursor-pointer w-10 h-10 flex justify-center items-center text-xl'>
            <Link to='/faqs' onClick={handleClose}><BsQuestionCircle className='hover:text-blue-600' /></Link>
          </div>
        </div>

        <div className='flex justify-between'>
          <Link to={'/'} className='bg-primary w-full flex p-3 justify-center items-center text-white font-medium'>Checkout</Link>
        </div>

      </div>
  </div>

}

export default Sidebar
