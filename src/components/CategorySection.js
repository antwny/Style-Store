import React from 'react';
import '../styles/CategorySection.css';

const categories = [
  { name: "Hombres", image: "https://www.lagarrocha.es/contenidos/contenidos/entradas/0/38-camisas-fondo-de-armario-hombre.jpg", link: "/hombres" },
  { name: "Mujeres", image: "https://danimateluna.cl/wp-content/uploads/2022/01/Estilos-de-ropa.jpg.webp", link: "/mujeres" },
  { name: "Niños", image: "https://sumaqmercados.pe/wp-content/uploads/2023/06/sumaq-mercados-blog-tipos-de-ropas-para-ninos.jpg", link: "/ninos" },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Categorías Destacadas</h2>
      <div className="category-grid">
        {categories.map((cat, i) => (
          <a key={i} href={cat.link} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <div className="category-overlay">
              <h3>{cat.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
