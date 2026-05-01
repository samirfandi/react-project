import "../assets/style/productList.css";

const ProductFilter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer les produits..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default ProductFilter;
