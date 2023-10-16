import React, { useContext } from 'react'

// import product context
import { ProductContext } from '../contexts/ProductContext'

// import components
import Product from '../components/Product'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

// import icons
import { AiOutlineShopping } from 'react-icons/ai';
// import link
import { Link } from 'react-router-dom'


const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext)
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
  })

  const aStyle = "p-[15px] hover:text-[#1450A3]"
  return <div className='md:mt-[5rem] max-md:mt-[1.5rem]'>
    <div className="container text-center text-[18px] max-sm:hidden py-3">
          <a className={aStyle} href="#store">Store locations</a>
          <a className={aStyle} href="/">FAQs</a>
          <a className={aStyle} href="/">News</a>
          <a className={aStyle} href="/">Careers</a>
          <a className={aStyle} href="/">Contact Us</a>
          <a className={aStyle} href="/">About</a>
      </div>
    <Hero />
      <section className='md:px-[30px] max-md:px-[30px]'>
        <div className='text-[35px] flex justify-center mb-[1.5rem] max-md:text-[30px]'>
          SHOP<AiOutlineShopping className='text-[25px]' />
        </div>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
              {filteredProducts.map(product => {
                return <Product product={product} key={product.id} />
              })}
            </div>
          </div>
      </section>
    <Banner />
  </div>
}

export default Home
