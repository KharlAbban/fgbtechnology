import { IoLocationOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import Button from "./Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react";

const JobCard = ({jobInfo}) => {
  const {description,jobType, location, qualifications, remuneration, responsibilities, title} = jobInfo;
  const [openDetails, setOpenDetails] = useState(false);
  
  return (
    <div className='border border-primaryBlue rounded-sm p-5 shadow mb-6'>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-between max-lg:flex-col">
        <div>
          <p className="text-sm text-gray-700">{description}</p>
          <div className="flex items-center gap-3 mt-2 mb-3">
            <span className="flex gap-2 items-center text-gray-600 text-sm max-md:text-xs py-2 px-4 rounded-full border border-secondaryBlue hover:bg-secondaryBlue hover:text-white duration-100 cursor-pointer">
              <BsClock size={20} className="max-md:hidden" />
              {jobType}
            </span>
            {location?.map(location => (
              <span key={location} className="hover:bg-secondaryBlue hover:text-white duration-100 cursor-pointer text-gray-600 text-sm max-md:text-xs py-2 px-4 rounded-full border border-secondaryBlue flex items-center gap-1">
                <IoLocationOutline size={21} className="max-md:hidden" />
                {location}
              </span>
            ))}
          </div>
          <p>Remuneration: <span className="underline font-semibold">{remuneration}</span></p>
          <span onClick={() => setOpenDetails(!openDetails)} className="cursor-pointer text-sm hover:underline mb-2">Job details</span>
        </div>
        <Button text="Apply Now" onClick={() => document.querySelector("#careerModal").showModal()} iconRight={<MdOutlineArrowOutward size={21} />} bgColor="bg-blue-500" hoverColor="hover:bg-blue-600 hover:text-white" classNames="h-12 w-44" />
      </div>
      {openDetails && <div className="p-2 w-full shadow flex justify-between border-t border-t-secondaryBlue max-lg:flex-col max-lg:gap-2">
        <div>
          <h4 className="underline">Responsibilites</h4>
          {responsibilities.map(reponsibility => (
            <li key={reponsibility} className="text-sm text-gray-800">{reponsibility}</li>
          ))}
        </div>
        <div>
          <h4 className="underline mt-2">Qualifications</h4>
          {qualifications.map(qualification => (
            <li key={qualification} className="text-sm text-gray-800">{qualification}</li>
          ))}
        </div>
      </div>}
    </div>
  )
}

export default JobCard