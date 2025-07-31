import "./ProductCard.css";

function ProductCard({ name, price, oldPrice, discount, sizes, color, image }) {
  return (
    <div className="card product-card">
      <img src={image} alt={name} className="card-img-top" />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>S/. {price.toLocaleString()}</strong>
          {oldPrice && (
            <>
              <span className="old-price"> S/. {oldPrice.toLocaleString()}</span>
              <span className="discount-tag">-{discount}%</span>
            </>
          )}
        </p>
        <p className="card-text"><strong>Tallas:</strong> {sizes.join(", ")}</p>
        <p className="card-text"><strong>Color:</strong> {color}</p>
      </div>
    </div>
  );
}

export default ProductCard;