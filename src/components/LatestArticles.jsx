import { latestArticles } from "../utils/contents";

const LatestArticles = () => {
  return (
    <section className="bg-veryLightGray">
      <div className="w-11/12 lg:w-10/12 mx-auto py-[2.5rem] xl:py-[5rem]">
        <h2 className="xl:text-4xl xl:font-normal text-3xl text-darkBlue font-semibold leading-[130%] mb-4 text-center xl:text-left">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:justify-between justify-center gap-[1.25rem] md:items-start">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col xl:items-start my-6 rounded-[0.5rem] bg-white text-darkBlue shadow-md"
            >
              <div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[250px] rounded-t-[0.5rem]"
                />
              </div>
              <div className="p-7 ">
                <h4 className="">{article.author}</h4>
                <h3 className="text-[1.4rem] leading-[130%] font-semibold my-2">
                  {article.title}
                </h3>
                <p className="text-base">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
