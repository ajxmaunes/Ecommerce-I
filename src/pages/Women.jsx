import React, { useContext } from 'react'

// import product context
import { ProductContext } from '../contexts/ProductContext'

// import components
import Product from '../components/Product'

// import icons
import { IoIosArrowBack } from 'react-icons/io';
// import link
import { Link } from 'react-router-dom'


const Women = () => {
  // get products from product context
  const { products } = useContext(ProductContext)
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "women's clothing"
  })
  return (
        <div className='pt-[6rem]'>
     
          <div className="container text-start text-[18px] max-md:text-[16px] py-3 bg-gray-200">
            <Link to="/" className="ml-[5rem] max-md:ml-[1rem] items-center flex font-semibold hover:text-[#1450A3]"><IoIosArrowBack/>Home</Link>
          </div>

          <section className='md:px-[30px] max-md:px-[30px] pt-[2rem] pb-[4rem]'>
            <div className='text-[35px] max-md:text-[30px] flex justify-center mb-[3rem] items-center'>
              <h1 className='border-b-4'>WOMEN</h1>
            </div>
              <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                  {filteredProducts.map(product => {
                    return <Product product={product} key={product.id} />
                  })}
                </div>
              </div>
          </section>
      </div>
  )
}

export default Women