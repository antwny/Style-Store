// src/pages/Hombres.jsx
import React from "react";
import "../styles/Hombres.css"; // Asegúrate de tener este CSS actualizado
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css"; // Asegúrate de tener este CSS actualizado

function Hombres() {
  const newProducts = [
    {
      name: "Casaca Hombre Aiden Beige",
      price: 160.93,
      oldPrice: 229.9,
      discount: 40,
      sizes: ["S", "M", "L"],
      color: "Beige",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/386728-500-auto?v=638870108111870000&width=500&height=auto&aspect=true",
    },
    {
      name: "Jogger Hombre Marco Verde Militar",
      price: 55.96,
      oldPrice: 139.9,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Verde Militar",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/344018-500-auto?v=638449833623900000&width=500&height=auto&aspect=true",
    },
    {
      name: "Polera Hombre Core",
      price: 49.95,
      oldPrice: 99,
      discount: 39,
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/366519/1687364_1.jpg?v=638630743888200000",
    },
    {
      name: "Camisa Hombre Thomas",
      price: 69.93,
      oldPrice: 99.9,
      discount: 39,
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387324/3141954_1.jpg?v=638887968182270000",
    },
    {
      name: "Polo Hombre José Core",
      price: 27.93,
      oldPrice: 39.9,
      discount: 22,
      sizes: ["S", "M", "L", "XL"],
      color: "Blanco",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/294385/1682195_1.jpg?v=638265194837100000",
    },
    {
      name: "Casaca Hombre Bose",
      price: 67.96,
      oldPrice: 69.9,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Verde Salvia",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/383795/3109871_1.jpg?v=638816355436370000",
    },
    {
      name: "Polera Hombre Hawk",
      price: 51.96,
      oldPrice: 129.9,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Gris Melange",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/378436/2078335_1.jpg?v=638764046319330000",
    },
    {
      name: "Pantalón Hombre Bernardo",
      price: 97.93,
      oldPrice:  139.90,
      discount: 30,
      sizes: ["S", "M", "L", "XL"],
      color: "Negro Jazpe",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/386712/3112817_1.jpg?v=638870106205230000",
    },
    // Agrega más productos si deseas
  ];

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
            {newProducts.map((product, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hombres;
