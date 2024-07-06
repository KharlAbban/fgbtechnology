import React, { useRef, useState } from 'react'
import { ourvalues } from '../utils/aboutData'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const OurValues = () => {
  const {values} = ourvalues;
  const [valueId, setValueId] = useState(values["mission"]);
  const valuesRef = useRef(null);
  const imageRef = useRef(null);
  const {contextSafe} = useGSAP({scope: valuesRef.current});

  useGSAP(() => {
    gsap.to(".activePar", {
      opacity: 1,
      height: "96px",
      duration: 0.5,
      delay: 0.5
    });
    gsap.fromTo(imageRef.current, {
      opacity: 0,
      duration: 1
    }, {
      opacity:1,
      duration: 1
    });
  }, {dependencies: [valueId]});

  const changeValueType = contextSafe((Event, valueType) => {
    if (Event.target.textContent === valueId.title) return null;
    
    //fade out currently active paragraph
    gsap.to(".activePar", {
      opacity: 1,
      height: 0,
      duration: 0.5
    });
    
    //fade out currently active image
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => setValueId(() => values[valueType])
    });
  });

  return (
    <section className='section'>
        <header className=''>
            <h2 className='heading section-heading'>{ourvalues.sectionHeading}</h2>
            <h4 className='heading section-title'>{ourvalues.sectionTitle}</h4>
        </header>
        <div className='w-full flex mt-12 max-h-[680px]' ref={valuesRef}>
            <div className="w-1/2 overflow-hidden relative pointer-events-none">
                <img src={valueId.image} className='opacity-100' ref={imageRef} id='valuesImage' />
            </div>
            <div className="w-1/2 pl-7 pr-2 pt-28 max-lg:pt-24">
              <div className={`pb-8 mb-10 border-b ${valueId.image === '/ourvalues1.jpg' ? 'border-b-black' : 'border-b-gray-300'}`} onClick={(Event) => changeValueType(Event, "mission")}>
                <h2 className='font-semibold text-3xl mb-3 cursor-pointer hover:text-primaryBlue/75 duration-100'>{values.mission.title}</h2>
                <p className={`${valueId.image === '/ourvalues1.jpg' ? 'activePar' : ''} h-0 overflow-hidden`}>{values.mission.content}</p>
              </div>
              <div className={`pb-8 border-b mb-10 ${valueId.image === '/ourvalues2.jpg' ? 'border-b-black' : 'border-b-gray-300'}`} onClick={(Event) => changeValueType(Event, "vision")}>
                <h2 className='font-semibold text-3xl mb-3 cursor-pointer hover:text-primaryBlue/75 duration-100'>{values.vision.title}</h2>
                <p className={`${valueId.image === '/ourvalues2.jpg' ? 'activePar' : ''} h-0 overflow-hidden`}>{values.vision.content}</p>
              </div>
              <div className={`pb-8 border-b ${valueId.image === '/ourvalues3.jpg' ? 'border-b-black' : 'border-b-gray-500'}`} onClick={(Event) => changeValueType(Event, "goal")}>
                <h2 className='font-semibold text-3xl mb-3 cursor-pointer hover:text-primaryBlue/75 duration-100'>{values.goal.title}</h2>
                <p className={`${valueId.image === '/ourvalues3.jpg' ? 'activePar' : ''} h-0 overflow-hidden`}>{values.goal.content}</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default OurValues