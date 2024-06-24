import { Link } from "react-router-dom";
import {aboutus} from "../utils/data"
import { animateItem } from "../utils/gsapAnimations";
import Button from "./Button";
import {IoArrowForwardOutline} from "react-icons/io5"

const AboutUs = () => {
  const {aboutImage, sectionHeading, sectionParOne, sectionParTwo, sectionTitle} = aboutus;
  animateItem(".section-anim", null, {stagger: 0.2});
  animateItem(".paragraph", null, {stagger: 0.1});
  animateItem(".aboutImg", null, {y: 0}, {start: 'top 95%'});

  return (
    <section className='section flex justify-between items-center relative'>
      <header className="h-full w-1/2 text-start py-24 max-lg:px-4 max-md:w-full">
        <h4 className="section-heading heading section-anim">{sectionHeading}</h4>
        <h2 className="section-title heading section-anim">{sectionTitle[0]} <br /> {sectionTitle[1]}</h2>
        <p className="max-w-[30rem] text-gray-700 paragraph">{sectionParOne}</p>
        <p className="max-w-[30rem] mt-3 mb-5 text-gray-700 paragraph">{sectionParTwo}</p>
        <Button text={<Link to="/about" className="flex items-center">Join the Revolution <IoArrowForwardOutline size={27} className="ml-4" /></Link>} bgColor="bg-blue-600" hoverColor="hover:bg-blue-500" whiteText={true} classNames="py-3 px-5" />
      </header>
      <div className="grid place-items-center w-1/2 h-full py-16">
        <img src={aboutImage} className="max-h-[35rem] aboutImg max-lg:h-[25rem] max-md:hidden" alt="." />
      </div>
    </section>
  )
}

export default AboutUs
