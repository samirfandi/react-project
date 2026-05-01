import Product from "./product.component.jsx";
import "../assets/style/productList.css";

const ForSaleProduct = ({ product, onAddToCart }) => {
  return (
    <div>
      <Product product={product} onAddToCart={onAddToCart} />
    </div>
  );
};

export default ForSaleProduct;
