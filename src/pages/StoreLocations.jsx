import React from 'react'
// import icons
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
// import link
import { Link } from 'react-router-dom'


function StoreLocations() {
  return (
    <>
      <section className='mt-[6rem] text-center'>

        <div className="container text-start text-[18px] max-md:text-[16px] py-3 bg-gray-200">
          <Link to="/" className="ml-[5rem] max-md:ml-[1rem] items-center flex font-semibold hover:text-[#1450A3]"><IoIosArrowBack/>Home</Link>
        </div>
        
        <div className='text-[30px] pt-[2rem] max-md:text-[25px] flex justify-center items-center'>
              <h1 className='border-b-4'>STORE LOCATIONS</h1>
        </div>
        <div className='container justify-between flex py-[3rem] max-md:px-[1rem] max-md:flex-col gap-10 max-lg:gap-5'>
            <div className='px-8 py-4 border text-start'>
                <h1 className='text-[25px] max-md:text-[22px] font-semibold flex items-center my-2'>SM North <FaLocationDot className='text-[20px] max-md:text-[18px] mx-2'/></h1>
                <p className='my-2'>North Avenue, corner Epifanio de los Santos Ave, Quezon City, 1100 Metro Manila</p>
                <p className='flex items-center'><BsTelephoneFill className='mr-2'/>+12345689</p>
                <div className='text-[14px] text-gray-600 my-2'>
                  <p>Mon-Fri : 9:00AM - 9:00PM</p>
                  <p>Sat-Sun : 9:00AM - 7:00PM</p>
                </div>
            </div>
            <div className='px-8 py-4 border text-start'>
                <h1 className='text-[25px] max-md:text-[22px] font-semibold flex items-center my-2'>SM North <FaLocationDot className='text-[20px] max-md:text-[18px] mx-2'/></h1>
                <p className='my-2'>North Avenue, corner Epifanio de los Santos Ave, Quezon City, 1100 Metro Manila</p>
                <p className='flex items-center'><BsTelephoneFill className='mr-2'/>+12345689</p>
                <div className='text-[14px] text-gray-600 my-2'>
                  <p>Mon-Fri : 9:00AM - 9:00PM</p>
                  <p>Sat-Sun : 9:00AM - 7:00PM</p>
                </div>
            </div>
            <div className='px-8 py-4 border text-start'>
                <h1 className='text-[25px] max-md:text-[22px] font-semibold flex items-center my-2'>SM North <FaLocationDot className='text-[20px] max-md:text-[18px] mx-2'/></h1>
                <p className='my-2'>North Avenue, corner Epifanio de los Santos Ave, Quezon City, 1100 Metro Manila</p>
                <p className='flex items-center'><BsTelephoneFill className='mr-2'/>+12345689</p>
                <div className='text-[14px] text-gray-600 my-2'>
                  <p>Mon-Fri : 9:00AM - 9:00PM</p>
                  <p>Sat-Sun : 9:00AM - 7:00PM</p>
                </div>
            </div>
        </div>

        {/* map */}
        <iframe
          src="https://maps.google.com/maps?q=sm%20north&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "25rem", border: "0px" }}
        ></iframe>
      </section>
    </>
  )
}

export default StoreLocations
