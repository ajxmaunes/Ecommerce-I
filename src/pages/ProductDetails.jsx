import React, { useContext } from 'react'
// import useParams
import { useParams } from 'react-router-dom'
// import cart context
import { CartContext } from '../contexts/CartContext'
// import product context
import { ProductContext } from '../contexts/ProductContext'
// import link
import { Link } from 'react-router-dom'
// import icon
import { IoIosArrowBack } from 'react-icons/io';

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id)
  })

  // if the product is not found
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  }

  console.log(product)

  // destructure product
  const { title, price, description, image } = product
  return (
    <div className='pt-[6rem]'>

      <div className="container text-start text-[18px] max-md:text-[16px] py-3 bg-gray-200">
          <Link to="/" className="ml-[5rem] max-md:ml-[1rem] items-center flex font-semibold hover:text-[#1450A3]"><IoIosArrowBack/>Back</Link>
      </div>

    <section className='pt-[6rem] pb-[8rem] lg:-ml-[4rem] flex items-center max-md:py-[3rem] max-md:h-auto'>

      <div className='container mx-auto'>
        {/* image & text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='text-xl text-[#1450A3] font-medium mb-6'>$ {price}</div>
            <p className='mb-8'>{description}</p>
            <button onClick={() => addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ProductDetails
