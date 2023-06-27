import { Link } from "react-router-dom";
import FilterPanel from "../component/FilterPanel";

function AllProduct() {
  return (
    <>
      <div className="Home_blog blog_text_h1">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <span className="blog_home_icon">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <li>Bütün Məhsullar</li>
        </ul>
      </div>

      <div className="allProducts_filter">
        <div className="filter_panel">
          <FilterPanel />
        </div>
      </div>
    </>
  );
}

export default AllProduct;
