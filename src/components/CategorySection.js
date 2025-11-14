import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategorySection.css';

const categories = [
  { name: "Hombre", image: "/Style-Store/img/categorias/sec_hombre.png", link: "/hombres" },
  { name: "Mujer", image: "/Style-Store/img/categorias/sec_mujer.png", link: "/mujeres" },
  { name: "Infantil", image: "/Style-Store/img/categorias/sec_infantil.png", link: "/infantil" },
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
