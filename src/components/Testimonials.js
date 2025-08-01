import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "María L.",
    comment:
      "La calidad del producto superó mis expectativas. Entrega rápida y excelente atención.",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Carlos R.",
    comment:
      "Muy buena experiencia de compra. Definitivamente volveré a comprar.",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Lucía G.",
    comment:
      "Me encantó todo, desde el empaque hasta el servicio. Recomendado al 100%.",
    image: "https://i.pravatar.cc/100?img=15",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <img src={t.image} alt={t.name} />
            <p>"{t.comment}"</p>
            <h4>{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
