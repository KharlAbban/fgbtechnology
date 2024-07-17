import React from 'react'
import { CareerModal, JobCard } from '.'

const JobOpenings = () => {
  return (
    <section className='lg:max-w-[1000px] w-screen mx-auto py-6 px-1 mb-12 max-lg:px-3'>
        <header>
            <h4 className="heading section-title">Available Offers</h4>
            <div className="flex gap-1 flex-wrap">
              <span className='px-5 text-sm cursor-pointer md:mr-4 py-2 rounded-full bg-primaryBlue text-white'>Sales (1)</span>
              <span className='px-5 text-sm cursor-not-allowed md:mr-4 py-2 rounded-full bg-gray-300 text-primaryBlue'>Finance (0)</span>
              <span className='px-5 text-sm cursor-not-allowed md:mr-4 py-2 rounded-full bg-gray-300 text-primaryBlue'>Development (0)</span>
              <span className='px-5 text-sm cursor-not-allowed py-2 md:mr-4 rounded-full bg-gray-300 text-primaryBlue'>NOC (0)</span>
              <span className='px-5 text-sm cursor-not-allowed py-2 md:mr-4 rounded-full bg-gray-300 text-primaryBlue'>R & D (0)</span>
              <span className='px-5 text-sm cursor-not-allowed py-2 md:mr-4 rounded-full bg-gray-300 text-primaryBlue'>Planning (0)</span>
            </div>
        </header>
        <div className="my-1 py-6 lg:pl-1 pr-2 mb-12 w-full relative">
            <JobCard />
        </div>
        <CareerModal />
    </section>
  )
}

export default JobOpenings