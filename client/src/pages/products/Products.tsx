import "./Products.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import List from "../../components/list/List";
import img5 from "../../../public/img/pic-5.jpg";

const Products = () => {
  const { id } = useParams<{ id: string }>();
  const catId = id ? parseInt(id) : null;

  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sort, setSort] = useState<null | string>(null);

  return (
    <div className="products">
      <div className="left-products">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">pants</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Shirts</label>
          </div>
        </div>
        <div className="fliterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaxPrice(Number(e.target.value))
              }
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="fliterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSort("asc")
              }
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSort("desc")
              }
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right-products">
        <img src={img5} alt="catImg" className="catImg" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};
export default Products;
