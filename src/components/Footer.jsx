import React from 'react'
// Import icons
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const aStyle = "p-[15px] hover:text-[18px]"
  return (
    <footer className='bg-primary py-10'>
      <div className='container mx-auto'>
        <div className="footer-links text-center mb-[2rem] text-white text-[20px] max-sm:hidden">
          <a className={aStyle} href="/">Store locations</a>
          <a className={aStyle} href="/">FAQs</a>
          <a className={aStyle} href="/">News</a>
          <a className={aStyle} href="/">Careers</a>
          <a className={aStyle} href="/">Contact Us</a>
          <a className={aStyle} href="/">About</a>
        </div>
        <div className='flex justify-center items-center mb-[2rem]'>
          <BsFacebook color='white' className='text-[25px] mx-[1rem] cursor-pointer'/>
          <BsInstagram color='white' className='text-[25px] mx-[1rem] cursor-pointer'/>
        </div>
        <p className='text-white text-center text-[14px] max-sm:text-[15px]'>
          Copyright &copy; Ecommerce Shop 2022. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
