import { IoCall, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube, IoMailOpenOutline, IoPhoneLandscape } from "react-icons/io5";
import {footer} from "../utils/data"

const Footer = () => {
  const {partOne, partTwo, partThree, footerBigImage, footerSmallImage} = footer;

  return (
    <footer className="footer pt-12 max-lg:pt-6 relative">
      <img src={footerBigImage} alt="Footer Big Image" className="footerImage bottom-0 left-0" />
      <img src={footerSmallImage} alt="Footer Small Image" className="footerImage right-8 top-9" />
      <section className="footer-section flex justify-between max-lg:justify-around">
        <div className="w-1/4 flex flex-col gap-8 justify-start max-md:hidden">
          <img src={partOne.logo} alt="FG&B" className="w-40" />
          <p className="text-sm text-gray-200 font-normal">{partOne.description}</p>
          <p className="flex gap-2 items-center">
            <IoCall size={20} className="" />
            <span className="text-green-300">{partOne.phoneNumber}</span>
          </p>
          <p className="flex gap-2 items-center -mt-4">
            <IoMailOpenOutline size={20} className="" />
            <span className="text-green-300">{partOne.contactEmail}</span>
          </p>
        </div>

        <div className="w-1/2 flex justify-around max-md:w-full max-md:gap-10 max-sm:flex-col">
          {partTwo.map(subPart => (
            <div key={subPart.title}>
              <h4 className="footer-title">{subPart.title}</h4>
              {subPart.links.map((link, index) => (
                <p key={link.id} className={`text-white mb-3 hover:text-gray-400 cursor-pointer duration-75 transition-all ${index == 0 && 'mt-3'}`}>{link.content}</p>
              ))}
            </div>
          ))}
        </div>
        
        <div className="w-1/4 max-lg:hidden">
          <h4 className="footer-title">{partThree.title}</h4>
          <div className="flex gap-8 items-center mb-8">
            <span className="grid place-items-center rounded-full p-3 bg-white hover:bg-primaryBlue duration-100 transition-all hover:text-white"><IoLogoFacebook size={18} /></span>
            <span className="grid place-items-center rounded-full p-3 bg-white hover:bg-primaryBlue duration-100 transition-all hover:text-white"><IoLogoTwitter size={18} /></span>
            <span className="grid place-items-center rounded-full p-3 bg-white hover:bg-primaryBlue duration-100 transition-all hover:text-white"><IoLogoYoutube size={18} /></span>
            <span className="grid place-items-center rounded-full p-3 bg-white hover:bg-primaryBlue duration-100 transition-all hover:text-white"><IoLogoLinkedin size={18} /></span>
          </div>
          <p className="text-white mb-4">&copy; <span>{new Date().getFullYear()}</span> {partThree.companyName}</p>
          <p className="text-white">All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer