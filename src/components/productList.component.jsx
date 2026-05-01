import products from "../data/products.js";
import "../assets/style/productList.css";
import ProductFilter from "./productFilter.component.jsx";
import ForSaleProduct from "./forSaleProduct.componenet.jsx";
import { useState } from "react";

const ProductList = ({ onAddToCart }) => {
  // A state to fitlter the products by its name
  const [filter, setFilter] = useState("");

  return (
    <div className="productList">
      <h4> Boutique</h4>
      <ProductFilter onFilterChange={setFilter} />

      <div className="productsZone">
        {products
          .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
          .map((p) => (
            <ForSaleProduct key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
