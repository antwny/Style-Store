import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategorySection.css';

const categories = [
  { name: "Hombre", image: "https://www.lagarrocha.es/contenidos/contenidos/entradas/0/38-camisas-fondo-de-armario-hombre.jpg", link: "/hombres" },
  { name: "Mujer", image: "https://danimateluna.cl/wp-content/uploads/2022/01/Estilos-de-ropa.jpg.webp", link: "/mujeres" },
  { name: "Infantil", image: "https://sumaqmercados.pe/wp-content/uploads/2023/06/sumaq-mercados-blog-tipos-de-ropas-para-ninos.jpg", link: "/infantil" },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Categorías Destacadas</h2>
      <div className="category-grid">
        {categories.map((cat, i) => (
          <Link key={i} to={cat.link} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <div className="category-overlay">
              <h3>{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
