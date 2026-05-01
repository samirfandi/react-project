import ProductInCart from "./productInCart.component.jsx";
import TotalCart from "./totalCart.component.jsx";
import "../assets/style/cart.css";
import { useEffect, useState } from "react";

const ShoppingCart = ({ cart, setCart }) => {
  // A state to stock the quantities of products choosed by the user
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, p) => {
      acc[p.id] = 1;
      return acc;
    }, {}),
  );

  // remove a product in the state after the user click in trash can image
  const removeProduct = (id) => {
    setCart(cart.filter((p) => p.id !== id));
    const { [id]: _, ...newQuantities } = quantities;
    setQuantities(newQuantities);
  };

  const updateQuantity = (id, qty) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, Number(qty) || 1),
    }));
  };
  const total = cart.reduce(
    (acc, p) => acc + p.price * (quantities[p.id] || 1),
    0,
  );

  // a hook that used to update quantities after the user add a product  
  useEffect(() => {
    setQuantities((prev) => {
      const updated = { ...prev };

      cart.forEach((p) => {
        if (!updated[p.id]) {
          updated[p.id] = 1;
        }
      });

      return updated;
    });
  }, [cart]);

  return (
    <div className="cart">
      <h4>Panier</h4>

      {cart.map((p) => (
        <ProductInCart
          key={p.id}
          product={p}
          onQuantityChange={updateQuantity}
          onRemove={() => removeProduct(p.id)}
        />
      ))}

      <TotalCart total={total} />
    </div>
  );
};

export default ShoppingCart;
