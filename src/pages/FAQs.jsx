import React from 'react'
// import icons
import { MdKeyboardArrowDown } from 'react-icons/md';

function FAQs() {
  return (
    <div className='container h-auto pb-[5rem] pt-[5rem] flex flex-col items-center'>
        <div className='w-[44rem] max-md:w-[22rem] p-4'>
            <div className='text-[35px] max-md:text-[30px] flex justify-center items-center'>
                <h1 className='border-b-4'>FAQs</h1>
            </div>
            <div className='text-[20px] max-md:text-[18px] font-semibold text-gray-500 flex justify-center items-center py-2'>
                Frequently Asked Questions
            </div>
            <div className='text-[16px] max-md:text-[16px] text-gray-400 flex justify-center text-center py-2'>
                Frequently Asked Questions About the Shop on Our Website: Answers to Common Concerns and Inquiries.
            </div>
        </div>

        <div className='shadow-xl'>
            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    1. What countries do you ship to?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-180 peer-checked:rotate-0'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-80 peer-checked:max-h-0'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>

            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border border-t-0'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    2. What is your return/exchange policy?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>

            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border border-t-0'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    3. How long will it take to get my order?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>

            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border border-t-0'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    4. What payment methods do you accept?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>
            
            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border border-t-0'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    5. How long does order processing take?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>

            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border border-t-0'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    6. How do I cancel/modify an order?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>

            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border border-t-0'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    7. How can I track my order?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>

            <div className='relative w-[42rem] max-md:w-[22rem] overflow-hidden border border-t-0'>
                <input className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' type="checkbox" />
                <div className='h-12 w-full pl-5'>
                    <h1 className='text-[17px] max-sm:text-[15px] py-3 font-medium'>
                    8. What if my order arrives damaged?
                    </h1>
                </div>

                {/* Arrow Icon */}
                <div className='text-[2rem] max-md:text-[1.7rem] absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'><MdKeyboardArrowDown/></div>

                {/* Content */}
                <div className='bg-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                    <p className='p-6 max-md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum porro vitae. Dicta maxime a vitae architecto quae laboriosam dolor explicabo delectus amet blanditiis aspernatur libero officiis, beatae error quibusdam accusamus consequatur provident corrupti porro corporis nisi obcaecati aliquid nihil ut. Odit, itaque atque? Natus velit provident culpa repellat saepe?</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FAQs
