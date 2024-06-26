import Showcase from "./sections/homepage/Showcase";
import Brands from "./sections/homepage/Brands";
import AppFeatures from "./sections/homepage/appFeature/AppFeatures";
import Slider from "./sections/homepage/Slider";
import Features from "./sections/homepage/Features";
import Testimonials from "./sections/homepage/Testimonials";
import Subscribe from "./sections/homepage/Subscribe";
import FAQ from "./sections/homepage/faq/FAQ";

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <AppFeatures />
      <Slider />
      <Features />
      <Testimonials />
      <FAQ />
      <Subscribe />
    </main>
  );
};

export default Home;
