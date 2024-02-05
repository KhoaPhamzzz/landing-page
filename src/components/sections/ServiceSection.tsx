import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/dental1.png",
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with Porcelain Veneers. Custom-made shells correct crooked, stained, or broken teeth, enhancing appearance and resisting stains.",
    },
    {
      id: 1,
      iconUrl: "/images/dental3.png",
      title: "Teeth Straightening",
      description:
        "Braces are a tried-and-true method for straightening teeth. These orthodontic devices gently align your teeth over time, giving you a confident, straighter smile.",
    },
    {
      id: 2,
      iconUrl: "/images/dental2.png",
      title: "Check-Up",
      description:
        "Regular dental check-ups are the key to a healthy smile. Our comprehensive exams ensure your oral health is in top shape, preventing issues before they start.",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
