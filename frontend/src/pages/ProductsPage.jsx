import React from 'react'
import { CTACard, MiscPageHeader, ProductsSection } from '../components'

const ProductsPage = () => {
  return (
    <>
      <MiscPageHeader pageTitle="Products & Services" subTitle="View our wide array of offers tailored to your specific needs" />
      <ProductsSection />
      <CTACard isReverse={true} />
    </>
  )
}

export default ProductsPage