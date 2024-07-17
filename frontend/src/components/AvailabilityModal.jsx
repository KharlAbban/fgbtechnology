import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { IoArrowForwardOutline } from 'react-icons/io5'

const AvailabilityModal = ({locationSelected}) => {
  return (
    <dialog id='availabilityModal' className='modal modal-bottom sm:modal-middle rounded-none text-base'>
        <div className='modal-box bg-white rounded-none'>
            <h3 className='font-semibold text-xl'>Yes! We serve {locationSelected}.</h3>
            <p className='py-4'>Get more details about our service in this area by <Link to="/contact">contacting us</Link> or using the forms all over the website.</p>
            <p>We'd love to hear from you.</p>
            <br />
            <Button text={<Link to="/contact" className="flex items-center">Get Started <IoArrowForwardOutline size={25} className="ml-4" /></Link>} bgColor="bg-blue-600" hoverColor="hover:bg-blue-500" whiteText={true} classNames="py-3 px-5" />

            <div className='modal-action'>
                <form method='dialog'>
                    <button className='underline'>Close</button>
                </form>
            </div>
        </div>
    </dialog>
  )
}

export default AvailabilityModal