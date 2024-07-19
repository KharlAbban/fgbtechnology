import React from 'react'
import { productsInfo } from '../utils/productsData'
import ProductCard from './ProductCard'

const ProductsSection = () => {
  return (
    <section className='section'>
        <header>
            <h2 className='heading section-heading'>Since you're here,</h2>
            <h4 className='heading section-title'>Let's get to it</h4>
        </header>
        <div className='mt-4 py-2 pr-2 flex flex-wrap'>
            {productsInfo.map((product) => <ProductCard key={product.id} productDetails={product} />)}
        </div>
    </section>
  )
}

export default ProductsSection