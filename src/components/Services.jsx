import { services } from "../constants";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <div data-aos="flip-right" data-aos-delay={index*200} key={service.label}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
