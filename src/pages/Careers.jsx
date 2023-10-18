import React from 'react'

function Careers() {

    const buttonStyle = 'border mr-2 my-1 py-2 px-4 text-sm max-md:text-[14px] bg-[#1450A3] text-white rounded-[10px]'
  return (
    <div>
        <section className='container pt-[6rem] pb-[5rem] max-md:pt-[6rem]'>
            <div className='text-[30px] max-md:text-[25px] flex justify-center items-center'>
                <h1 className='border-b-4'>CAREERS</h1>
            </div>
            <div className='text-[22px] max-md:text-[18px] font-semibold text-gray-500 flex justify-center items-center mt-2'>
                Hey there. Join our team
            </div>

            <div className='flex max-lg:flex-col justify-between max-md:text-center items-center'>
                <div className='mt-[2rem] w-[49%] max-md:w-[92%] max-lg:w-[85%] border p-8 max-md:px-4'>
                    <div className='md:w-[55px] max-md:mx-[40%]'>
                        <h1 className='text-[25px] mb-4 max-md:text-[23px] font-medium border-solid border-2 px-2 border-black text-center'>f'O</h1>
                    </div>
                    
                    <h1 className='text-[25px] max-md:text-[22px] font-semibold'>Front-end Web Developer</h1>
                    <div className='my-4'>
                        <button className={buttonStyle}>Apply on Indeed</button>
                        <button className={buttonStyle}>Apply on LinkedIn</button>
                        <button className={buttonStyle}>Apply on Kalibrr</button>
                    </div>
                    <div className='text max-md:text-[15px] text-gray-600'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo aperiam nihil cum asperiores iste dolore atque delectus est esse corrupti facere, aut laudantium quaerat praesentium tenetur amet molestias, dignissimos culpa aliquid? Vero ipsam quo inventore fugiat quam, perspiciatis amet et consequuntur cum nobis provident fugit ducimus. Reiciendis ab reprehenderit vero dolore quo cupiditate optio rerum dignissimos veritatis voluptas omnis, sequi laboriosam officia distinctio officiis eaque dolorem sit. Esse magnam omnis facere, atque dolorem quos non adipisci quis inventore maiores.</p>
                    </div>
                </div>

                <div className='mt-[2rem] w-[49%] max-md:w-[92%] max-lg:w-[85%] border p-8 max-md:px-4'>
                    <div className='md:w-[55px] max-md:mx-[40%]'>
                        <h1 className='text-[25px] mb-4 max-md:text-[23px] font-medium border-solid border-2 px-2 border-black text-center'>f'O</h1>
                    </div>

                    <h1 className='text-[25px] font-semibold'>Back-end Web Developer</h1>
                    <div className='my-4'>
                        <button className={buttonStyle}>Apply on Indeed</button>
                        <button className={buttonStyle}>Apply on LinkedIn</button>
                        <button className={buttonStyle}>Apply on Kalibrr</button>
                    </div>
                    <div className='text text-gray-600'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo aperiam nihil cum asperiores iste dolore atque delectus est esse corrupti facere, aut laudantium quaerat praesentium tenetur amet molestias, dignissimos culpa aliquid? Vero ipsam quo inventore fugiat quam, perspiciatis amet et consequuntur cum nobis provident fugit ducimus. Reiciendis ab reprehenderit vero dolore quo cupiditate optio rerum dignissimos veritatis voluptas omnis, sequi laboriosam officia distinctio officiis eaque dolorem sit. Esse magnam omnis facere, atque dolorem quos non adipisci quis inventore maiores.</p>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Careers
