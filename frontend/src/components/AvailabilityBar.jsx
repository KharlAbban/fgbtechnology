import React, { useRef, useState } from 'react'
import Button from './Button';
import { animateItemNoScroll } from '../utils/gsapAnimations';
import AvailabilityModal from './AvailabilityModal';

const AvailabilityBar = ({sampleLocations}) => {
  const [location, setLocation] = useState("");
  const errorRef = useRef();

  animateItemNoScroll("#availabilityBar", 1);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  }

  const handleBtnClick = (Event) => {
    Event.preventDefault();
    if (location === "") {
      errorRef.current.classList.remove("hidden");
      return;
    } else {
      errorRef.current.classList.add("hidden");
      document.querySelector("#availabilityModal").showModal();
    }
  }
  
  return (
    <div className='flex flex-col gap-4' id="availabilityBar">
      <div className='flex gap-4 items-center justify-center max-md:flex-col'>
        <input placeholder='Enter your business location' type="text" className='text-lg py-2 px-4 rounded-sm border-none outline-none min-w-96 text-primaryBlack transition-all duration-75 focus:border-blue-500 focus:outline-blue-500' value={location} onChange={(Event) => handleLocationChange(Event.target.value)} />
        <Button onClick={handleBtnClick} text="Check Availability" shouldGrow={true} bgColor="bg-green-600" hoverColor="hover:bg-green-500" classNames="font-semibold max-md:w-full" />
      </div>
      <p ref={errorRef} className="text-sm text-red-400 hidden">Please enter a location</p>
      <div className='flex gap-6 text-xs text-gray-200 max-md:hidden'>
        {sampleLocations.map(location => (
          <span key={location} onClick={() => handleLocationChange(location)} className='transition-all duration-75 cursor-pointer py-1 rounded-sm bg-gray-500 px-2 hover:bg-gray-400'>{location}</span>
        ))}
      </div>
      <AvailabilityModal locationSelected={location} />
    </div>
  )
}

export default AvailabilityBar
