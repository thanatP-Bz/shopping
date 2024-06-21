import "./List.scss";
import img1 from "../../../public/img/pic-1.jpg";
import img2 from "../../../public/img/pic-2.jpg";
import img3 from "../../../public/img/pic-3.jpg";
import img4 from "../../../public/img/pic-4.jpg";

import ListCard from "./ListCard";

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

const data: Item[] = [
  {
    id: 1,
    img: { img1 },
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: { img2 },
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: { img3 },
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: { img4 },
    oldPrice: 19,
    price: 12,
  },
];

interface MyComponentProps {
  catId: number | null;
  maxPrice: number;
  sort: string | null;
}

const List: React.FC<MyComponentProps> = ({ catId, maxPrice, sort }) => {
  return (
    <div className="list">
      {data?.map((item) => (
        <ListCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
