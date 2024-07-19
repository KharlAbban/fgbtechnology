import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {Button} from "../components"
import { IoArrowForwardOutline } from 'react-icons/io5';

const ProductCard = ({productDetails}) => {
  const [isActive, setIsActive] = useState(false);

  const handleProdClick = (Event) => {
    setIsActive(!isActive)
  }

  return (
    <div className={`p-2 m-0 transition-all w-full duration-300 rounded-sm ${isActive ? 'lg:w-full' : 'lg:w-1/2'}`}>
      <div className={`${productDetails.classname} duration-200 transition-all ease-in-out text-white relative servCard backdrop-blur flex flex-col justify-between gap-0 mb-2 px-6 py-4 rounded-sm ${isActive ? 'min-h-[35rem] pb-4' : 'min-h-80'} shadow w-full h-full`}>
        {productDetails.name === "Consultancy" ?<Link to="/consultancy" className='py-1 px-4 rounded-full border-2 border-white w-max hover:bg-white hover:text-secondaryBlue hover:font-semibold duration-100 transition-all cursor-pointer'>READ MORE</Link> :<span onClick={handleProdClick} className='cursor-pointer py-1 px-4 rounded-full border-2 border-white w-max hover:bg-white hover:text-secondaryBlue hover:font-semibold duration-100 transition-all'>READ MORE</span>}
        <div>
          <h3 className='font-semibold text-2xl mb-2'>{productDetails.name}</h3>
          <p className='font-light w-2/3 text-sm max-lg:hidden'>{productDetails.description}</p>
        </div>
        {isActive && 
          <div className='w-full p-2 min-h-[22rem]'>
            <h4 className="underline mb-2">Service Details</h4>
            <p className='lg:w-3/4 lg:text-base text-sm'>{productDetails.detailedInfo}</p>
            <p className="text-lg mt-2">This service is available to:</p>
            <ul className='mb-3'>
              <li className='my-1'> - Individuals</li>
              <li className='my-1'> - SMEs</li>
              <li> - Huge Enterprises</li>
            </ul>
            <Button text={<Link to="/about" className="flex items-center">Join the Revolution <IoArrowForwardOutline size={27} className="ml-4" /></Link>} bgColor="bg-blue-600" hoverColor="hover:bg-blue-500" whiteText={true} classNames="py-3 px-5" />
          </div>
        }
      </div>
    </div>
  )
}

export default ProductCard