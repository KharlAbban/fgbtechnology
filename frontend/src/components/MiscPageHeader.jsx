import React from 'react'

const MiscPageHeader = ({pageTitle, subTitle}) => {
  return (
    <header className='miscPageHeader text-white mb-6 w-screen h-64 mt-16 pointer-events-none bg-gray-400 flex flex-col gap-6 justify-center items-center'>
        <h2 className='squiggly-text font-bold text-6xl max-sm:text-2xl'>{pageTitle}</h2>
        <p className='font-light text-gray-100 max-sm:text-sm max-sm:text-center'>{subTitle}</p>
    </header>
  )
}

export default MiscPageHeader