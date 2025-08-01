// src/pages/Hombres.jsx
import React from "react";
import "../styles/Hombres.css"; // Asegúrate de tener este CSS actualizado
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css"; // Asegúrate de tener este CSS actualizado
import productos from "../data/productosHombres";
function Hombres() {
  return (
    <div className="hombres-page">
      <div className="banner-hombres">
        <img
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/f5e9cc42-0c58-46f1-b0e0-ff00e870d64f___1ca792e01845d6a502b5e0412b09e723.png"
          alt="Banner Hombres"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Hombre</h1>
          <p>Estilo, comodidad y tendencia para cada ocasión.</p>
        </div>
      </div>
      <div className="home-container">
        <h2 className="section-title">Lo más nuevo</h2>
        <p className="section-description">
          Descubre la colección destacada para hombres
        </p>

        <div className="container my-4">
          <div className="row g-4">
            {productos.map((product, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <ProductCard key={product.id} {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hombres;
