const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
