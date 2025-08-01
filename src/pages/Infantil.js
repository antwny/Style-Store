// src/pages/Hombres.jsx
import React from "react";
import "../styles/Hombres.css"; // Asegúrate de tener este CSS actualizado
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css"; // Asegúrate de tener este CSS actualizado

function Mujeres() {
  const newProducts = [
    {
      name: "Polo Niña Mariamanda",
      price:  15.96,
      oldPrice:  39.90,
      discount: 60, 
      sizes: ["S", "M", "L"],
      color: "Beige",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/364044/1998599_1.jpg?v=638572585776130000",
    },
    {
      name: "Polera Niña Cayetana",
      price: 58.44,
      oldPrice: 89.90,
      discount: 35,
      sizes: ["S", "M", "L", "XL"],
      color: "Rosado Chicle",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/386515-500-auto?v=638854382024470000&width=500&height=auto&aspect=true",
    },
    {
      name: "Casaca Niño Alfredo",
      price: 134.93,
      oldPrice: 179.90,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      color: "Aqua Pastel",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387229-500-auto?v=638873478388570000&width=500&height=auto&aspect=true",
    },
    {
      name: "Vestido Denim Niña Violeta",
      price: 54.95,
      oldPrice: 99.90,
      discount: 45,
      sizes: ["S", "M", "L", "XL"],
      color: "Blue Wash",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387052/3093189_1.jpg?v=638870308127500000",
    },
    {
      name: "Casaca Niño Gregor",
      price: 97.93,
      oldPrice:  139.90,
      discount: 30,
      sizes: ["S", "M", "L", "XL"],
      color: "Plomo Intenso",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387088/3100904_1.jpg?v=638870312053070000",
    },
    {
      name: "Cardigan Niña Miriam Rosemen",
      price: 51.94,
      oldPrice:   79.90,
      discount: 35,
      sizes: ["S", "M", "L", "XL"],
      color: "Rosado",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/386469/3093647_1.jpg?v=638853506702470000",
    },
    {
      name: "Jean Niña Mafer Light Wash",
      price:  65.94,
      oldPrice: 109.90,
      discount: 40,
      sizes: ["S", "M", "L", "XL"],
      color: "Azul",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/386473/3109200_1.jpg?v=638853507178230000",
    },
    {
      name: "Casaca Niña Isabel ",
      price: 107.94,
      oldPrice:  179.90,
      discount: 40,
      sizes: ["S", "M", "L", "XL"],
      color: "Aqua",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/386507/2003582_1.jpg?v=638854381115770000",
    },
    // Agrega más productos si deseas
  ];

  return (
    <div className="hombres-page">
      <div className="banner-hombres">
        <img
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/e6d1087e-0206-4df5-b71e-e6b78033b0ec___7fb142306c956d13ccdc870705cd839b.png"
          alt="Banner Mujer"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Infantil</h1>
          <p>
            Descubre la colección destacada para niños y niñas
          </p>
        </div>
      </div>
      <div className="home-container">
        <h2 className="section-title">Lo más nuevo</h2>
        <p className="section-description">
            Explora nuestra colección de ropa infantil, diseñada para brindar comodidad y estilo a los más pequeños.
            
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
