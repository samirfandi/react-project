import "../assets/style/product.css";
import "../assets/style/cart.css";
import poubelleImg from "../assets/images/poubelle.jpg";

const ProductInCart = ({ product, onRemove, onQuantityChange }) => {
  return (
    <div className="product">
      <div className="info">
        <div className="name">{product.name}</div>
      </div>
      <div className="imageProduit">
        <img src={product.image} alt={product.name} />
      </div>

      <input
        className="input"
        type="number"
        min="1"
        max={product.stock}
        defaultValue={1}
        onChange={(e) => onQuantityChange(product.id, e.target.value)}
      />

      <img src={poubelleImg} className="button" onClick={onRemove} />
    </div>
  );
};

export default ProductInCart;
