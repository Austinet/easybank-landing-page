import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <LatestArticles />
        <Footer />
      </main>
    </>
  );
};

export default Home;
