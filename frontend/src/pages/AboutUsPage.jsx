import React from 'react'
import { CompanyStory, CTACard, MiscPageHeader, OurValues } from '../components'

const AboutUsPage = () => {
  return (
    <>
      <MiscPageHeader pageTitle="About Us" subTitle="Get to know who we are and what we do for you!" />
      <CompanyStory />
      <OurValues />
      <CTACard />
    </>
  )
}

export default AboutUsPage