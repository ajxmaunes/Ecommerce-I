import React, { useContext } from 'react'
// import context
import { MenuContext } from '../contexts/MobileMenuContext'
// Import icons
import { AiOutlineClose } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
// import link
import { Link } from 'react-router-dom'

const MobileMenu = () => {
  const { isOpenLeft, handleClose } = useContext(MenuContext)

  const aStyle = "p-[15px] hover:text-[#1450A3]"
  return <div className={`${isOpenLeft ? 'left-0' : '-left-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:max-w-[30rem] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>MENU</div>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <AiOutlineClose className='text-2xl' />
        </div>
      </div>

      <div onClick={handleClose} className="footer-links flex flex-col text-center mt-[4rem] text-[18px]">
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/">Home</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/store">Store locations</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/faqs">FAQs</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/careers">Careers</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/contact">Contact Us</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/about">About</Link>
      </div>

      <div className='flex justify-center items-center mt-[2rem]'>
          <BsFacebook color='#1450A3' className='text-[25px] mx-[2rem] cursor-pointer'/>
          <BsInstagram color='#1450A3' className='text-[25px] mx-[2rem] cursor-pointer'/>
      </div>
  </div>

}

export default MobileMenu
