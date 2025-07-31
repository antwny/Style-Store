// src/pages/Hombres.jsx
import React from "react";
import "../styles/Hombres.css"; // Asegúrate de tener este CSS actualizado
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css"; // Asegúrate de tener este CSS actualizado

function Mujeres() {
  const newProducts = [
    {
      name: "Vestido Mujer Martina Print",
      price:  43.96,
      oldPrice: 109.90,
      discount: 60, 
      sizes: ["S", "M", "L"],
      color: "Rosado Agua",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/373227/2052261_1.jpg?v=638690081663830000",
    },
    {
      name: "Casaca Mujer Daroy",
      price: 91.96,
      oldPrice: 229.90,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Coco",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/381267/3092347_1.jpg?v=638793216304270000",
    },
    {
      name: "Falda Short Mujer Fan",
      price: 39.96,
      oldPrice: 99.90,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/381227/3095159_1.jpg?v=638793211547400000",
    },
    {
      name: "Casaca Mujer Eru",
      price: 91.96,
      oldPrice: 229.90,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Beige",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387285/3095361_1.jpg?v=638873484598630000",
    },
    {
      name: "Jean Mujer Zara Total Dirty",
      price: 87.95,
      oldPrice:  159.90,
      discount: 45,
      sizes: ["S", "M", "L", "XL"],
      color: "Stone",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387368/3151866_1.jpg?v=638887973312970000",
    },
    {
      name: "Chompa Mujer Alto Niquel Poly Htr",
      price: 39.96,
      oldPrice:  99.90,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Gris",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/384530/3115616_1.jpg?v=638816526564430000",
    },
    {
      name: "Jean Mujer Yildaz",
      price:  87.95,
      oldPrice: 159.90,
      discount: 45,
      sizes: ["S", "M", "L", "XL"],
      color: "Azul",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387380/3148383_1.jpg?v=638887974655200000",
    },
    {
      name: "Casaca Mujer Fernanda",
      price: 59.96,
      oldPrice:  149.90,
      discount: 60,
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/381417/3093772_1.jpg?v=638793751568900000",
    },
    // Agrega más productos si deseas
  ];

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

export default Mujeres;
