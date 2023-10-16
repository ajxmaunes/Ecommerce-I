import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';


function StoreLocations() {
  return (
    <>
      <section className='mt-[8rem] text-center'>
        <div className='text-[30px] flex justify-center items-center'>
              <h1 className='border-b-4'>STORE LOCATIONS</h1>
        </div>
        <div className='container flex py-[4rem] px-[1rem] max-md:flex-col gap-10 max-lg:gap-5'>
            <div className='p-[2rem] border text-start'>
                <h1 className='text-[25px] font-semibold flex items-center my-2'>SM North <FaLocationDot className='text-[20px] mx-2'/></h1>
                <p className='my-2'>North Avenue, corner Epifanio de los Santos Ave, Quezon City, 1100 Metro Manila</p>
                <p className='flex items-center'><BsTelephoneFill className='mr-2'/>+12345689</p>
            </div>
            <div className='p-[2rem] border text-start'>
                <h1 className='text-[25px] font-semibold flex items-center my-2'>SM North <FaLocationDot className='text-[20px] mx-2'/></h1>
                <p className='my-2'>North Avenue, corner Epifanio de los Santos Ave, Quezon City, 1100 Metro Manila</p>
                <p className='flex items-center'><BsTelephoneFill className='mr-2'/>+12345689</p>
            </div>
            <div className='p-[2rem] border text-start'>
                <h1 className='text-[25px] font-semibold flex items-center my-2'>SM North <FaLocationDot className='text-[20px] mx-2'/></h1>
                <p className='my-2'>North Avenue, corner Epifanio de los Santos Ave, Quezon City, 1100 Metro Manila</p>
                <p className='flex items-center'><BsTelephoneFill className='mr-2'/>+12345689</p>
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
