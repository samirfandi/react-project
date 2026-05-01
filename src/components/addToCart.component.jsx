import panierImg from "../assets/images/panier.jpg";

const AddToCart = ({ product, onAddToCart }) => {
  return (
    <div>
      <img
        className="button"
        src={panierImg}
        onClick={() => onAddToCart(product)}
      />
    </div>
  );
};

export default AddToCart;
