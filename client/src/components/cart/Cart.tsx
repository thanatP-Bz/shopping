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
  desc: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
}

const data: Item[] = [
  {
    id: 1,
    img: { img1 },
    title: "long sleeve shirt",
    desc: "The Everyday Shirt is the button-down that puts in work eight days a week.",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: { img2 },
    title: "shirt",
    desc: "The Everyday Shirt is the button-down that puts in work eight days a week.",
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
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUPTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCESS TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
