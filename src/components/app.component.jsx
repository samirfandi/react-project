import "../assets/style/app.css";
import ProductList from "./productList.component.jsx";
import ShoppingCart from "./shoppingCart.component.jsx";
import { useState } from "react";

const App = () => {
  // A state that link productList and ShoppingCart
  const [cart, setCart] = useState([]);

  // add a product in the shoppingCart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // find the product
      const isProductInTheList = prevCart.find((p) => p.id === product.id);

      // if the product already exist in the list
      if (isProductInTheList) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="app">
      <ProductList onAddToCart={addToCart} />

      <ShoppingCart cart={cart} setCart={setCart} />
    </div>
  );
};
export default App;
