import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({icon, title, description, linkTo}) => {
  return (
    <Link to={linkTo} className='p-3'>
        <div className="service-card">
            <img src={icon} alt={title} className='h-20' />
            <h3 className='font-semibold text-2xl'>{title}</h3>
            <p className='text-sm text-gray-600'>{description}</p>
        </div>
    </Link>
  )
}

export default ServiceCard