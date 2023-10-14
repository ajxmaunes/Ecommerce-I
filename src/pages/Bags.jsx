import React, { useContext } from 'react'

// import product context
import { ProductContext } from '../contexts/ProductContext'

// import components
import Product from '../components/Product'

// import icons


const Bags = () => {
  // get products from product context
  const { products } = useContext(ProductContext)
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.price === 109.95
  })

  return (
      <div>
          <section className='md:px-[30px] max-md:px-[30px] py-[8rem]'>
            <div className='text-[35px] flex justify-center mb-[2rem] items-center'>
              BAGS
            </div>
              <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                  {filteredProducts.map(product => {
                    return <Product product={product} key={product.id} />
                  })}
                </div>
              </div>
          </section>
      </div>
  )
}

export default Bags