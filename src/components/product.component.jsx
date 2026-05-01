import AddToCart from "./addToCart.component.jsx";
import "../assets/style/product.css";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <div className="info">
        <div className="name">{product.name}</div>
        <span className="description">{product.description}</span>
        <span className="weight">{product.weight} </span>
      </div>

      <div className="imageProduit">
        <img src={product.image} alt={product.name} />
      </div>
      <span className="stock">qté {product.stock}</span>
      <span className="price">{product.price}</span>

      <AddToCart product={product} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Product;
