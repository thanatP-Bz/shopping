import "./home.scss";
import Slider from "../../components/silder/Slider";
import FeaturedProducts from ".././../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="treading" />
      <Contact />
    </div>
  );
};

export default Home;
