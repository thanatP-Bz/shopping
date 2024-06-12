import "./categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="" alt="" />
          <button>
            <Link className="link" to="/product/1">
              sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="" alt="" />
          <button>
            <Link className="link" to="/product/1">
              sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="" alt="" />
          <button>
            <Link className="link" to="/product/1">
              sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="" alt="" />
              <button>
                <Link className="link" to="/product/1">
                  sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="" alt="" />
              <button>
                <Link className="link" to="/product/1">
                  sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="" alt="" />
          <button>
            <Link className="link" to="/product/1">
              sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
