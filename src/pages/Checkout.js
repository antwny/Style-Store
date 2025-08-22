import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

const initialForm = {
  nombre: "",
  email: "",
  direccion: "",
  telefono: "",
  metodoPago: "",
};

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple
    if (
      !form.nombre.trim() ||
      !form.email.trim() ||
      !form.direccion.trim() ||
      !form.telefono.trim() ||
      !form.metodoPago
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 1800);
  };

  if (success) {
    return (
      <div className="cart-container" style={{ textAlign: "center" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu pedido ha sido registrado correctamente.</p>
        <p>Te enviaremos un correo con los detalles.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Finalizar compra</h2>
      <div className="checkout-flex">
        {/* Resumen del pedido con imágenes */}
        <div className="checkout-summary">
          <h4>Resumen del pedido</h4>
          <ul>
            {cart.map((item) => (
              <li key={item.id + item.talla}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <strong>{item.name}</strong> <br />
                  Talla: {item.talla} | Cantidad: {item.cantidad} <br />
                  <span>S/. {(item.price * item.cantidad).toLocaleString()}</span>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: S/. {totalPrice.toLocaleString()}</h3>
        </div>
        {/* Formulario */}
        <form className="checkout-form" onSubmit={handleSubmit} autoComplete="off">
          <h4>Datos de envío</h4>
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            required
          />
          <label>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
          <label>Método de pago</label>
          <select
            name="metodoPago"
            value={form.metodoPago}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona...</option>
            <option value="tarjeta">Tarjeta de crédito/débito</option>
            <option value="yape">Yape/Plin</option>
            <option value="efectivo">Pago contra entrega</option>
          </select>
          {error && <div className="error-msg">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? "Procesando pedido..." : "Confirmar pedido"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;