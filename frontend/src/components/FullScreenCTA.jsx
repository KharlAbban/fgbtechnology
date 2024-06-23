import {CTA} from "../utils/data"
import { animateItem } from "../utils/gsapAnimations";
import Button from "./Button";

const FullScreenCTA = () => {
  const {sectionContent, sectionHeading, sectionTitle} = CTA;
  animateItem(".fullscreencta", 0.5, {y: 0}, {start: 'top 80%'})

  return (
    <section className='py-60 -mt-12 w-full text-white grid place-items-center ctaBg relative overflow-hidden'>
      <div className="greenDiv greenOne"></div>
      <div className="greenDiv greenTwo"></div>
      <p className="mb-5 text-sm text-gray-200">{sectionHeading}</p>
      <h1 className="heading font-semibold text-5xl text-center fullscreencta">
        {sectionTitle[0]} <br />
        {sectionTitle[1]}
      </h1>
      <p className="text-gray-100 my-6">{sectionContent}</p>
      <Button text="Let's go!" bgColor="bg-green-500" hoverColor="hover:bg-green-600" classNames="text-primaryBlack py-3 text-lg" />
    </section>
  )
}

export default FullScreenCTA
