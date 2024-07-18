import "./Product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import img6 from "../../../public/img/pic-6.jpg";
import img7 from "../../../public/img/pic-7.jpg";

const images = [img6, img7];

const Product = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);

  return (
    <div className="product">
      <>
        <div className="left">
          <div className="images">
            <img
              src={images[0]}
              alt="img-6"
              onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                setSelectedImg(0)
              }
            />
            <img
              src={images[1]}
              alt="img-7"
              onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                setSelectedImg(1)
              }
            />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="img*8" />
          </div>
        </div>
        <div className="right">
          <h1>title</h1>
          <span className="price">$199</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            accusamus blanditiis modi. Quia explicabo enim officia, consequuntur
            molestias mollitia qui possimus laborum sunt porro rerum fugit
            consectetur repudiandae ab quisquam.
          </p>
          <div className="quantity">
            <button>-</button>

            <button>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
