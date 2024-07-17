import React from 'react'
import { JobOpenings, MiscPageHeader } from '../components'

const CareersPage = () => {
  return (
    <>
      <MiscPageHeader pageTitle="Careers" subTitle="Be part of our mission! Take a look at the offers below" />
      <JobOpenings />
    </>
  )
}

export default CareersPage