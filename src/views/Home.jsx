import Showcase from "./sections/homepage/Showcase";
import Brands from "./sections/homepage/Brands";
import AppFeatures from "./sections/homepage/appFeature/AppFeatures";
import Slider from "./sections/homepage/Slider";

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <AppFeatures />
      <Slider />
    </main>
  );
};

export default Home;
