import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import img1 from "../../../public/img/pic-1.jpg";
import img2 from "../../../public/img/pic-2.jpg";

interface Img {
  img1?: string;
  img2?: string;
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
];

const Cart = () => {
  return (
    <div className="cart">
      <h1>Product is your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img.img1 ?? item.img.img2 ?? ""} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              reprehenderit.
            </p>
            <div className="price">1 x {item.price}</div>
          </div>
        </div>
      ))}
      <DeleteOutlinedIcon className="delete" />
    </div>
  );
};

export default Cart;
