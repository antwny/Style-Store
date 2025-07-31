// src/pages/Hombres.jsx
import React from "react";
import "../styles/Hombres.css"; // Asegúrate de tener esta hoja o adaptar al estilo actual

function Hombres() {
  return (
    <div className="hombres-page">
      <div className="banner-hombres">
        <h1>Ropa para Hombres</h1>
        <p>
          Explora nuestra colección pensada para estilo y comodidad masculina.
        </p>
      </div>

      <div className="hombres-grid">
        <div className="producto">
          <img
            src="https://topitop.vtexassets.com/arquivos/ids/387324/3141954_1.jpg?v=638887968182270000"
            alt="Camisa Casual"
          />
          <h3>Camisa Casual</h3>
          <p>S/ 89.90</p>
          <button>Agregar al carrito</button>
        </div>
        <div className="producto">
          <img
            src="https://topitop.vtexassets.com/arquivos/ids/386654/3143786_1.jpg?v=638870099725300000"
            alt="Polo Deportivo Blanco"
          />
          <h3>Polo Deportivo Blanco</h3>
          <p>S/ 59.90</p>
          <button>Agregar al carrito</button>
        </div>
        <div className="producto">
          <img
            src="https://topitop.vtexassets.com/arquivos/ids/366519/1687364_1.jpg?v=638630743888200000"
            alt="Polera Hombre Core Negro"
          />
          <h3>Polera Hombre Core Negro</h3>
          <p>S/ 49.95</p>
          <button>Agregar al carrito</button>
        </div>
        <div className="producto">
          <img
            src="https://topitop.vtexassets.com/arquivos/ids/380905/3080182_1.jpg?v=638793174174300000"
            alt="Casaca Hombre Adonis Azul"
          />
          <h3>Casaca Hombre Adonis Azul</h3>
          <p>S/ 75.96</p>
          <button>Agregar al carrito</button>
        </div>
        {/* Agrega más productos aquí */}
      </div>
    </div>
  );
}

export default Hombres;
