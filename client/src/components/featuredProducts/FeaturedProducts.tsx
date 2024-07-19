import "./featuredProducts.scss";
import Card from "../card/Card";
import Item from "../card/Card";

import img1 from "../../../public/img/pic-1.jpg";
import img2 from "../../../public/img/pic-2.jpg";
import img3 from "../../../public/img/pic-3.jpg";
import img4 from "../../../public/img/pic-4.jpg";

interface Img {
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
}

interface Item {
  id: number;
  img: Img;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
}

const data: Item[] = [
  {
    id: 1,
    img: { img1 },
    title: "shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: { img2 },
    title: "shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: { img3 },
    title: "shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: { img4 },
    title: "shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

interface FeatureProps {
  type: string;
}

const FeaturedProducts: React.FC<FeatureProps> = ({ type }) => {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
