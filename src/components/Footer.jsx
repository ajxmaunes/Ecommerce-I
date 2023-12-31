import React from 'react'
// Import icons
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
// Import link
import { Link } from 'react-router-dom';

const Footer = () => {
  const aStyle = "p-[15px] hover:text-[18px]"
  return (
    <footer className='bg-primary py-10 lg:mt-[4rem] '>
      <div className='container mx-auto'>
        <div className="footer-links ml-4 text-center mb-[2rem] text-white text-[20px] max-sm:hidden">
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/">Home</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/store">Store locations</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/faqs">FAQs</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/careers">Careers</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/contact">Contact Us</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={aStyle} to="/about">About</Link>
        </div>
        <div className='flex justify-center items-center mb-[2rem]'>
          <BsFacebook color='white' className='text-[25px] mx-[1rem] cursor-pointer'/>
          <BsInstagram color='white' className='text-[25px] mx-[1rem] cursor-pointer'/>
        </div>
        <p className='text-white text-center text-[16px] max-sm:text-[15px]'>
           &copy; Design by <a className=' border-b-[1px]' href='https://aljunemaunes.info/' target="new">www.aljunemaunes.info</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
