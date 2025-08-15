// src/pages/Hombres.jsx
import React from "react";
import "../styles/Hombres.css";
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";
import productos from "../data/productosMujeres" 

function Mujeres() {
  return (
    <div className="hombres-page">
      <div className="banner-hombres">
        <img
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/a1dbad5d-bcd1-479d-a6c2-c80e454aae31___26b690ee5c6ddd61ee5eae9eac087343.png"
          alt="Banner Mujer"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Mujer</h1>
          <p>Estilo, comodidad y tendencia para cada ocasión.</p>
        </div>
      </div>
      <div className="home-container">
        <h2 className="section-title">Lo más nuevo</h2>
        <p className="section-description">
          Descubre la colección destacada para mujeres
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

export default Mujeres;
