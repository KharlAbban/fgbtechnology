import React from 'react'

const ServiceCard = ({icon, title, description}) => {
  return (
    <div className='py-3'>
        <div className="service-card">
            <img src={icon} alt={title} className='h-20' />
            <h3 className='font-semibold text-2xl'>{title}</h3>
            <p className='text-sm text-gray-600'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard