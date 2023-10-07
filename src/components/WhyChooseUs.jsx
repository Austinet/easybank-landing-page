import { features } from "../utils/contents";

const WhyChooseUs = () => {
  return (
    <section className="bg-lightGrayishBlue">
      <div className="w-11/12 lg:w-10/12 mx-auto py-[2.5rem] xl:pt-[6rem] xl:pb-[5rem]">
        <div className="mb-7 xl:mb-9 text-center xl:text-left md:w-1/2 md:mx-auto xl:mx-0">
          <h2 className="xl:text-4xl xl:font-normal text-3xl text-darkBlue font-semibold leading-[130%] mb-4">
            Why choose Easybank?
          </h2>
          <p className="text-[1.25rem] text-grayishBlue ">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:justify-between justify-center gap-[1.25rem]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-[1.88rem] text-center xl:text-left justify-center xl:items-start items-center my-6"
            >
              <div>
                <img src={feature.image} alt={feature.title} />
              </div>
              <div>
                <h3 className="text-[1.5rem] text-darkBlue font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[1.25rem] text-grayishBlue">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
