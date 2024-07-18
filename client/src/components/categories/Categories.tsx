import "./categories.scss";
import { Link } from "react-router-dom";

import catImg1 from "../../../public/img/cat-1.jpg";
import catImg2 from "../../../public/img/cat-2.jpg";
import catImg3 from "../../../public/img/cat-3.jpg";
import catImg4 from "../../../public/img/cat-4.jpg";
import catImg5 from "../../../public/img/cat-5.jpg";
import catImg6 from "../../../public/img/cat-6.jpg";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={catImg1} alt="catImg-1" />
          <button>
            <Link className="link" to="/product/1">
              sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src={catImg2} alt="catImg-2" />
          <button>
            <Link className="link" to="/product/2">
              sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={catImg3} alt="catImg-3" />
          <button>
            <Link className="link" to="/product/3">
              sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={catImg4} alt="catImg-4" />
              <button>
                <Link className="link" to="/product/4">
                  sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={catImg5} alt="catImg-5" />
              <button>
                <Link className="link" to="/product/5">
                  sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={catImg6} alt="catImg-6" />
          <button>
            <Link className="link" to="/product/6">
              sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
