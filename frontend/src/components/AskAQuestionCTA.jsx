import {CTAFormInfo} from "../utils/data"
import { animateItem } from "../utils/gsapAnimations";
import CTAForm from "./CTAForm";

const AskAQuestionCTA = () => {
  const {sectionHeading, sectionTitle} = CTAFormInfo;
  animateItem(".question-section", null, {stagger: 0.2});

  return (
    <section className='py-48 max-lg:py-36 max-md:py-28 -mt-12 w-full flex justify-around max-lg:justify-center items-center ctaBg2 relative overflow-hidden'>
      <div className="max-lg:hidden max-lg:pl-4">
        <p className="mb-5 text-sm max-lg:text-xs text-gray-200 question-section">{sectionHeading}</p>
        <h1 className="heading font-semibold max-lg:text-3xl text-5xl text-white question-section">
          {sectionTitle[0]} <br />
          {sectionTitle[1]}
        </h1>
        <p className="text-gray-100 my-6">{}</p>
      </div>
      <div className='flex flex-col items-center gap-8 max-lg:w-screen max-lg:px-4'>
      <h2 className="text-white lg:hidden heading text-3xl underline">Say Something</h2>
      <div className='w-full px-6 py-12 max-lg:py-8 rounded-sm askForm lg:bg-white'>
        <CTAForm />
      </div>
    </div>
    </section>
  )
}

export default AskAQuestionCTA