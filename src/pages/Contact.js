import React from "react";
import "../styles/Contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img
          src="https://topitop.vtexassets.com/arquivos/banner-contactanos-desktop.jpg"
          alt="Personas usando ropa estilo StyleStore"
        />
      </div>

      <form className="contact-form">
        <h2>Contáctanos</h2>

        <input type="text" placeholder="Nombres" required />
        <input type="text" placeholder="Apellidos" required />
        <textarea placeholder="Comentario" rows="4" required />

        <label className="checkbox-container">
          <input type="checkbox" required />
          <span>Acepto los términos y condiciones</span>
        </label>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default Contact;
