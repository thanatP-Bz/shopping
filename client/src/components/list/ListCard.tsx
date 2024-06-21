import "./ListCard.scss";
import { Link } from "react-router-dom";

interface Img {
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
}

interface Item {
  id: number;
  img: Img;
  oldPrice: number;
  price: number;
}

interface CardProps {
  item: Item;
}

const ListCard: React.FC<CardProps> = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.img.img1} alt="" className="mainImg" />
          <img src={item.img.img2} alt="" className="secondaryImg" />
          <img src={item.img.img3} alt="" className="secondaryImg" />
          <img src={item.img.img4} alt="" className="secondaryImg" />
        </div>
        <h2>shirt</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
