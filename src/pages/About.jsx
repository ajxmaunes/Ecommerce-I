import React from 'react'
// import link
import { Link } from "react-router-dom";
// import image
import img2 from "../img/home-img-5.jpg"
// Import icons
import { IoIosArrowBack } from 'react-icons/io';

function About() {
  return (
    <div className="container pt-[6rem] max-sm:mb-0">

        <div className="container text-start text-[18px] max-md:text-[16px] py-3 bg-gray-200">
          <Link to="/" className="ml-[5rem] max-md:ml-[1rem] items-center flex font-semibold hover:text-[#1450A3]"><IoIosArrowBack/>Home</Link>
        </div>

        <div>
            <div style={{ backgroundImage: `url(${img2})`, backgroundSize:"100% 100%", backgroundRepeat: 'no-repeat' }} className="mt-[10px] max-md:hidden h-[22rem] max-lg:h-[18rem] max-md:text-[25px] flex justify-center items-center">
                    <h1 className='text-[30px] border-b-4 border-[#1450A3] -mt-[14rem] max-lg:-mt-[12rem]'>ABOUT</h1>
            </div>
        </div>

        <div className='text-[30px] py-[2rem] md:hidden max-md:text-[25px] flex justify-center items-center'>
                <h1 className='border-b-4'>ABOUT</h1>
        </div>

      <div className="pb-[4rem] max-md:pb-8">
        <div className="h-auto max-md:h-auto overflow-hidden flex-row-reverse max-sm:m-0">
          <div className="text-side max-sm:w-[100%] text-start max-sm:text-center flex flex-col justify-center lg:px-[15rem] max-lg:px-[6rem] md:py-[40px] max-md:px-[20px] max-md:py-[40px] bg-[#E9E9E9]">
            <div className="text-center">
              <h2 className="text-[2rem] max-md:text-[1.5rem] font-[600] mb-[1.5rem]">FASH-OFF</h2>
              <p className="text-[1rem] max-md:text-[0.9rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, unde quos, error laborum veritatis aliquam atque, commodi soluta omnis earum sint? Tempore, beatae error eius, ex quas quo rerum quae corporis quaerat doloribus voluptates! Nisi facere ipsum sit tempora ex? Dolor, accusamus minima nobis sequi quibusdam suscipit perferendis quia quisquam, est eius qui fuga in velit voluptatum, assumenda repellendus facere. Adipisci expedita ex ipsa consectetur aliquid. Odio, praesentium voluptatum, quas illo autem perspiciatis ipsam quo doloribus accusamus doloremque consequatur rerum? Ipsa autem alias, non eaque veniam earum, fuga a ad, eum praesentium possimus laudantium ex. Porro accusantium doloremque est sed praesentium assumenda cum, harum officia esse unde voluptates, illo voluptas ipsam! Illo dicta vitae eos voluptatem? Iure, sint? Ut id mollitia voluptatibus distinctio tempore voluptatum asperiores culpa natus et provident doloremque hic sit minus suscipit corrupti eveniet fugit, explicabo illum ratione! Eveniet laudantium, sunt dignissimos quaerat inventore aliquid, possimus ipsa architecto ad facere unde reprehenderit praesentium voluptates deserunt vel! Debitis veniam velit nostrum? Sed maxime quo vitae itaque mollitia doloribus cumque ex labore, aperiam, asperiores laborum inventore! Ea voluptatibus ipsa numquam nostrum dolorum molestiae fugit error possimus repellendus ipsam sunt doloribus itaque labore est cumque, velit dolor harum porro!</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                <button className="bg-black text-white text-[1rem] font-bold p-[1rem] uppercase mt-[2rem] cursor-pointer transition-all duration-75 ">Shop now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
