import "./home.scss";
import Slider from "../../components/silder/Slider";
import FeaturedProducts from ".././../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="treading" />
    </div>
  );
};

export default Home;
