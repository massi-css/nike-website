import { offer } from "../assets/images";
import Button from "./Button";
import arrowRight from "../assets/icons/arrow-right.svg";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div data-aos="fade-right" className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object contain w-full"
        />
      </div>
      <div data-aos="fade-left" className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin sm:text-4xl capitalize text-xl font-bold lg:max-w-lg">
          <span className=" text-coral-red ">Special</span>
          Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg ">
          Navigate a realm of possibilities designed to fulfill your unique
          desirea, surpassing the liftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn more" BackgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
