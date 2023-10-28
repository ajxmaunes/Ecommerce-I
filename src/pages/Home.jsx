import React, { useContext } from 'react'

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



const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext)
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
  }) 


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
        <div className='container text-[#1e293b] justify-center text-[35px] flex py-[3rem] max-md:text-[30px]'>
         <span className='border-b-4 border-[#1450A3] flex items-center'>SHOP<AiOutlineShopping className='ml-1'/></span>
        </div>

        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
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
