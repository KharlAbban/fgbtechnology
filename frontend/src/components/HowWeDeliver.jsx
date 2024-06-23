import {howWeDeliver} from "../utils/data"
import { animateItem } from "../utils/gsapAnimations";
import StepCard from "./StepCard";

const HowWeDeliver = () => {
  const {sectionHeading, sectionTitle, steps} = howWeDeliver;
  animateItem(".stepContent", 0.2, {stagger: 0.3})

  return (
    <div className="w-full section-gray pb-12">
      <section className="section my-8">
        <header>
            <h4 className="heading section-heading">{sectionHeading}</h4>
            <h2 className="heading section-title">{sectionTitle}</h2>
        </header>
        <div className="flex gap-10 items-center pt-12">
          {steps.map(step => <StepCard key={step.id} {...step} />)}
        </div>
      </section>
    </div>
  )
}

export default HowWeDeliver
