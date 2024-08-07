import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const CTACard = ({isReverse}) => {
  return (
    <section className={`section flex ${isReverse && 'flex-row-reverse'}`}>
        <div className='text-white pt-12 md:pt-16 max-md:pb-4 px-12 w-full md:w-1/2 bg-primaryBlue h-80'>
            <h2 className='heading text-sm max-lg:text-xs text-white font-semibold'>We are the</h2>
            <h4 className='heading section-title'>Gateway to the future</h4>
            <p className='-mt-3 mb-3 text-gray-300'>Join us as we transform the digital space. </p>
            <br />
            <Button bgColor="bg-secondaryBlue" hoverColor="hover:bg-transparent hover:border hover:border-white" text={<Link to="/contact">Let's talk!</Link>} />
        </div>
        <div className="md:w-1/2 bg-secondaryBlue h-80"></div>
    </section>
  )
}

export default CTACard