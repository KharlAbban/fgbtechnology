import {CTAFormInfo} from "../utils/data"
import { animateItem } from "../utils/gsapAnimations";
import CTAForm from "./CTAForm";

const AskAQuestionCTA = () => {
  const {dottedShape, ovalImg, sectionHeading, sectionTitle} = CTAFormInfo;
  animateItem(".question-section", null, {stagger: 0.2});

  return (
    <section className='py-48 -mt-12 w-full flex justify-around items-center ctaBg2 relative overflow-hidden'>
      <div>
        <p className="mb-5 text-sm text-gray-200 question-section">{sectionHeading}</p>
        <h1 className="heading font-semibold text-5xl text-white question-section">
          {sectionTitle[0]} <br />
          {sectionTitle[1]}
        </h1>
        <p className="text-gray-100 my-6">{}</p>
      </div>
      <CTAForm dottedShape={dottedShape} ovalImg={ovalImg} />
    </section>
  )
}

export default AskAQuestionCTA