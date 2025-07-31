import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductCard.css";

function ProductCard({ name, price, oldPrice, discount, sizes, color, image }) {
  return (
    <div className="card h-100 shadow-sm product-card">
      <img
        src={image}
        alt={name}
        className="card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-2">
          <strong>S/. {price.toLocaleString()}</strong>
          {oldPrice && (
            <>
              <span className="text-muted ms-2 text-decoration-line-through">
                S/. {oldPrice.toLocaleString()}
              </span>
              <span className="badge bg-danger ms-2">-{discount}%</span>
            </>
          )}
        </p>
        <p className="card-text mb-1">
          <strong>Tallas:</strong> {sizes.join(", ")}
        </p>
        <p className="card-text mb-2">
          <strong>Color:</strong> {color}
        </p>
        <button className="btn btn-dark mt-auto">Ver más</button>
      </div>
    </div>
  );
}

export default ProductCard;