// src/pages/Hombres.jsx
import React from 'react';
import './Hombres.css'; // Asegúrate de tener esta hoja o adaptar al estilo actual

function Hombres() {
  return (
    <div className="hombres-page">
      <div className="banner-hombres">
        <h1>Ropa para Hombres</h1>
        <p>Explora nuestra colección pensada para estilo y comodidad masculina.</p>
      </div>

      <div className="hombres-grid">
        <div className="producto">
          <img src="https://topitop.vtexassets.com/arquivos/ids/387324/3141954_1.jpg?v=638887968182270000" alt="Camisa Casual" />
          <h3>Camisa Casual</h3>
          <p>S/ 89.90</p>
          <button>Agregar al carrito</button>
        </div>
        <div className="producto">
          <img src="https://topitop.vtexassets.com/arquivos/ids/386654/3143786_1.jpg?v=638870099725300000" alt="Polo Deportivo" />
          <h3>Polo Deportivo</h3>
          <p>S/ 59.90</p>
          <button>Agregar al carrito</button>
        </div>
        {/* Agrega más productos aquí */}
      </div>
    </div>
  );
}

export default Hombres;