import "../assets/style/cart.css";

const TotalCart = ({ total }) => {
  return (
    <div className="total">
      <span>total commande : {total} €</span>
    </div>
  );
};

export default TotalCart;
