import mockup from "../assets/images/image-mockups.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative md:py-[6rem] py-[2rem]">
      <div className="lg:w-10/12 md:w-11/12  mx-auto flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between md:gap-5 top-[-6rem] md:top-[-1rem] relative md:static">
        <div className=" lg:w-2/5 md:w-1/2 w-11/12 md:mx-0 mx-auto md:mt-10 md:text-left text-center py-4 ">
          <h1 className="text-4xl xl:text-6xl text-darkBlue leading-[130%] xl:leading-[120%]">
            Next generation digital banking
          </h1>
          <p className="text-[1.25rem] xl:text-[1.35rem] text-grayishBlue mt-5 mb-8">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link className="block w-[13.5rem] py-[0.9rem] px-7 rounded-[2.35rem] bg-gradient-to-r from-limeGreen to-brightCyan text-white font-semibold text-[1.25rem] text-center hover:opacity-[0.85]">
              Request Invite
            </Link>
          </div>
        </div>
        <div className="md:w-1/2  md:bg-[url('/src/assets/images/bg-intro-desktop.svg')] bg-[url('/src/assets/images/bg-intro-mobile.svg')] bg-cover md:bg-contain bg-no-repeat bg-center md:absolute overflow-hidden  right-0">
          <img
            src={mockup}
            alt="Mobile App mockup"
            className="lg:relative right-[-6.5rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
