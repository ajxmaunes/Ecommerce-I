import React, { useContext, useState } from 'react'

// import product context
import { ProductContext } from '../contexts/ProductContext'

// import components
import Product from '../components/Product'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Slider from '../components/Slider'

// import icons
import { AiOutlineShopping } from 'react-icons/ai';
// import link
import { Link } from 'react-router-dom'
// import css
import "./ScrollText.css";



const Home = ({product}) => {
  // get products from product context
  const { products } = useContext(ProductContext)
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
  })
  

  console.log(products)

  const [search, setSearch] = useState('')
  

  const aStyle = "px-[15px] hover:text-[#1450A3]"
  return <div className='md:mt-[6rem] max-md:mt-[1.5rem]'>
    <div className="container text-center text-[18px] max-md:hidden py-3 bg-gray-200">
          <a className={aStyle} href='#shop'>Shop</a>
          <Link className={aStyle} to='/store'>Store locations</Link>
          <Link className={aStyle} to="/faqs">FAQs</Link>
          <Link className={aStyle} to="/careers">Careers</Link>
          <Link className={aStyle} to="/contact">Contact Us</Link>
          <Link className={aStyle} to="/about">About</Link>
      </div>
    <Hero />
      <div id='shop' className='container max-lg:hidden'>
        <div className='scroll-container'>
          <h1 className='scroll-text font-semibold'>| 20% <span className='italic text-red-800'>OFF</span> Christmas Promo from December 15-30 🎄 | Nationwide <span className='italic text-red-800'>Free Delivery</span> on orders above $100 💸 | Shop now! |</h1>
        </div>
      </div>

      <section className='md:px-[30px] max-md:px-[30px] mb-[3rem]'>
        <div className='container text-[#1e293b] justify-center text-[35px] flex pt-[3rem] pb-[1rem] max-md:text-[30px]'>
         <span className='border-b-4 border-[#1450A3] flex items-center'>SHOP<AiOutlineShopping className='ml-1'/></span>
        </div>


        <div className='container pb-[1rem] flex max-md:flex-col justify-between items-center'>
          <div className="md:w-[48.8%] shadow-inner max-md:w-full border relative flex items-center h-12 focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>

          <input
          onChange={(e) => setSearch(e.target.value)}
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search item.." /> 
          </div>

          <div className='md:w-[48.8%] max-md:hidden h-12 bg-gray-200 md:bg-gray-100 px-8 max-lg:px-4'></div>

      </div>


        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.filter((products) => {
              return search.toLowerCase() === '' ? products : products.title.toLowerCase().includes(search);
            }).map(product => {
                return <Product product={product} key={product.id} />
            })}

            
          </div>
        </div>
      </section>
    <Slider />
    <Banner />
  </div>
}

export default Home
