import "./home.scss";
import Slider from "../../components/silder/Slider";
import FeaturedProducts from ".././../components/featuredProducts/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="treading" />
    </div>
  );
};

export default Home;
