import {services} from "../utils/data"
import ServiceCard from "./ServiceCard";

const Services = () => {
  const {sectionHeading, sectionTitle, serviceItems} = services;

  return (
    <div className="w-full section-gray pb-12">
      <section className="section">
        <header className="">
          <h4 className="heading section-heading">{sectionHeading}</h4>
          <h2 className="heading section-title">{sectionTitle}</h2>
          <p>Try out Bento box layout</p>
        </header>
        <div className="p-2 grid grid-cols-3">
          {serviceItems.map(serviceCard => <ServiceCard key={serviceCard.title} {...serviceCard} />)}
        </div>
      </section>
    </div>
  )
}

export default Services
