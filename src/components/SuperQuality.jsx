import { shoe8 } from "../assets/images";
import Button from "./Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div data-aos="fade-right" className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin sm:text-4xl capitalize text-xl font-bold lg:max-w-lg">
          We provide you
          <span className=" text-coral-red ">Super</span>
          <span className=" text-coral-red ">Quality</span>
          Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation,and a touxh of elegance.{" "}
        </p>
        <p className="info-text mt-6 lg:max-w-lg ">
          Our dedication to detail and exelience ensure your satifaction{" "}
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div data-aos="fade-left" className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="Shoe8" height={570} width={511} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
