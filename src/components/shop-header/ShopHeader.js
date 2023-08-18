import "./ShopHeader.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/">
        <div className="logo text-dark">BookStore</div>
      </Link>
      <Link to="/card">
        <i className="card-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;
