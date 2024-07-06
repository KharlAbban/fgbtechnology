import React from 'react'
import { companyStory } from '../utils/aboutData'
import { Link } from 'react-router-dom'

const CompanyStory = () => {
  return (
    <>
        <section className='section'>
            <div className="md:3/4 lg:w-2/3 md:mx-auto font-medium">
                <span className='text-4xl block float-left leading-10 mr-2'>FG&B</span>{companyStory.introduction}
            </div>
        </section>
        <section className='section'>
            <div className="md:3/4 lg:w-2/3 md:mx-auto">
                <h2 className="heading section-title-sm underline">Why We Exist</h2>
                <p>{companyStory.story1}</p>
                <br />
                <p>{companyStory.story2}</p>
                <br />
                <p>{companyStory.story3}</p>
                <br />
                <Link to="/contact" className="text-lg underline text-secondaryBlue hover:text-primaryBlue duration-75 transition-all cursor-pointer">Click here to start</Link>
            </div>
        </section>
    </>
  )
}

export default CompanyStory