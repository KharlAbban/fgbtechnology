import React from 'react'

const ProductCard = ({productDetails}) => {
  return (
    <div className={`${productDetails.classname} text-white relative servCard backdrop-blur flex flex-col justify-between flex-1 gap-0 mb-2 px-6 py-4 w-full rounded-sm min-h-80 shadow cursor-pointer`}>
      <span className='py-1 px-4 rounded-full border-2 border-white w-max hover:bg-white hover:text-secondaryBlue hover:font-semibold duration-100 transition-all'>READ MORE</span>
      <div>
        <h3 className='font-semibold text-2xl mb-2'>{productDetails.name}</h3>
        <p className='font-light w-2/3 text-sm'>{productDetails.description}</p>
      </div>
    </div>
  )
}

export default ProductCard