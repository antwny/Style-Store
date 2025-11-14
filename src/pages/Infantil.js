// src/pages/Hombres.jsx
import React from "react";
import "../styles/Hombres.css"; 
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";
import productos from "../data/productosInfantil" 

function Mujeres() {

  return (
    <div className="hombres-page">
      <div className="banner-hombres">
        <img
          src="/Style-Store/img/banners/infantil.png"
          alt="Banner Infantil"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Infantil</h1>
          <p>Descubre la colección destacada para niños y niñas</p>
        </div>
      </div>
      <div className="home-container">
        <h2 className="section-title">Lo más nuevo</h2>
        <p className="section-description">
          Explora nuestra colección de ropa infantil.
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
