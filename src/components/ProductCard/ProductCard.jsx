import { NavLink } from "react-router-dom";
import "./Productcard.css";

const ProductCard = ({ productCategory, productName, image, price, priceDiscount }) => {

    return (
      <NavLink to={"/detalhes-item"} className={"link-product-page"}>
        <div className="card">
          <img src={image} className="card-img-top" alt={productName} />
          <div className="card-body">
            <h5 className="card-title">{productCategory}</h5>
            <p className="card-text product-name">{productName}</p>
            <div className="price-group">
              <p className="card-text product-price">$ {price}</p>
              <p className="card-text product-discount">$ {priceDiscount}</p>
            </div>
          </div>
        </div>
      </NavLink>
    );
}

export default ProductCard;