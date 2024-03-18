import Showcase from "./sections/homepage/Showcase";
import Brands from "./sections/homepage/Brands";
import AppFeatures from "./sections/homepage/appFeature/AppFeatures";
import Slider from "./sections/homepage/Slider";
import Features from "./sections/homepage/Features";

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <AppFeatures />
      <Slider />
      <Features />
    </main>
  );
};

export default Home;
