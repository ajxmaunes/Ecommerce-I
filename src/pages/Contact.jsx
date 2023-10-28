import React from 'react'
// Import icons
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
// import link
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <section className='container pt-[6rem] max-md:pt-[6rem]'>

        <div className="container text-start text-[18px] max-md:text-[16px] py-3 bg-gray-200">
          <Link to="\" className="ml-[5rem] max-md:ml-[1rem] items-center flex font-semibold hover:text-[#1450A3]"><IoIosArrowBack/>Back</Link>
        </div>
        
        {/* contact */}
        <div className='flex max-lg:flex-col justify-between max-md:text-center max-lg:items-center my-[4rem] max-md:mt-0'>
          {/* first col */}
          <div className="w-[45%] max-md:mt-[2rem] max-lg:w-[90%]">
            <h2 className="text-black text-[36px] max-md:text-[28px] max-lg:text-center">
              We are here for help you!
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] my-[40px] max-md:my-[20px] max-lg:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ullam eius facilis officia aut consequatur maiores dolor exercitationem fugit reprehenderit ad odit quae numquam necessitatibus! Asperiores, recusandae obcaecati. Illum delectus reprehenderit, pariatur eligendi labore sit error. Repellendus natus veniam similique.
            </p>

            <div className="grid grid-cols-2 grid-rows-2 max-lg:mx-[8rem] max-md:mx-0 max-md:items-center max-md:text-start max-md:ml-2">
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[1.8rem] max-md:text-[1.2rem] mb-5">Information</h3>
                <span className="bg-[#1450A3] w-[50px] h-[4px] absolute top-[45px] max-md:top-[30px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+123-123-1234</p>
                  <p>&nbsp;fash_off@gmail.com</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col max-md:-top-2 max-md:left-4 relative">
                <h3 className="text-[1.75rem] max-md:text-[1.2rem] mb-5">Follow Us On</h3>
                <span className="bg-[#1450A3] w-[50px] h-[4px] absolute top-[45px] max-md:top-[30px]"></span>
                <div className="text-[18px] text-black flex gap-5">
                    <BsFacebook className='text-[25px] cursor-pointer hover:text-[#1450A3]'/>
                    <BsInstagram className='text-[25px] cursor-pointer hover:text-[#1450A3]'/>
                </div>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <div className="w-[45%] max-lg:w-[90%] flex flex-col relative max-lg:-top-8">
            <h2 className="text-black mb-6 text-[36px] max-md:text-[28px] max-md:text-start">
              Email Us
            </h2>
            <span className="bg-[#1450A3] left-[2px] w-[60px] h-[4px] absolute top-[54px] max-md:top-[45px]"></span>
            <input
              className="w-full py-[12px] px-[20px] h-[50px] text-[15px] border  outline-none mb-4"
              placeholder="Name"
              type="text"
            ></input>
            <input
              className="w-full py-[12px] px-[20px] h-[50px] text-[15px] border outline-none mb-4"
              placeholder="Email"
              type="email"
            ></input>
            <textarea
              placeholder="Message"
              className="w-full py-[12px] px-[20px] min-h-[140px] text-[15px] border outline-none mb-4"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#1450A3] w-fit py-[12px] px-[30px] font-bold text-[16px]"
            >
              SUBMIT
            </button>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Contact
