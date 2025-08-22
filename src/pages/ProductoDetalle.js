import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import productosHombres from "../data/productosHombres";
import productosMujeres from "../data/productosMujeres";
import productosInfantil from "../data/productosInfantil";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductCard.css";
import { CartContext } from "../context/CartContext";

function ProductoDetalle() {
  const { id } = useParams();
  const producto =
    productosHombres.find((p) => p.id === Number(id)) ||
    productosInfantil.find((p) => p.id === Number(id)) ||
    productosMujeres.find((p) => p.id === Number(id));

  const { addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(producto?.sizes?.[0] ?? "");

  if (!producto) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Producto no encontrado</h2>
      </div>
    );
  }

  const handleAgregarAlCarrito = () => {
    if (!tallaSeleccionada) {
      alert("Selecciona una talla antes de agregar al carrito.");
      return;
    }
    const item = {
      id: producto.id,
      name: producto.name,
      price: producto.price,
      image: producto.image,
      talla: tallaSeleccionada, // Correcto
      cantidad: cantidad,       // Correcto
      color: producto.color,
      descripcion: producto.descripcion,
    };
    addToCart(item);
    alert(`${cantidad} x "${producto.name}" (Talla ${tallaSeleccionada}) agregado al carrito.`);
  };

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-start">
        <div className="col-md-6">
          <img src={producto.image} alt={producto.name} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{producto.name}</h2>
          <p className="fs-5">
            <strong className="text-dark">S/. {producto.price.toLocaleString()}</strong>{" "}
            <span className="text-muted text-decoration-line-through">
              S/. {producto.oldPrice.toLocaleString()}
            </span>{" "}
            <span className="badge bg-danger">-{producto.discount}%</span>
          </p>
          <p><strong>Color:</strong> {producto.color}</p>

          <div className="mb-3">
            <strong>Talla:</strong>
            <div className="d-flex flex-wrap mt-2">
              {producto.sizes.map((talla, index) => (
                <div
                  key={index}
                  className={`talla-btn ${tallaSeleccionada === talla ? "selected" : ""}`}
                  onClick={() => setTallaSeleccionada(talla)}
                  style={{
                    cursor: "pointer",
                    padding: "6px 10px",
                    border: tallaSeleccionada === talla ? "2px solid #000" : "1px solid #ddd",
                    borderRadius: 6,
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                >
                  {talla}
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex align-items-center mb-3">
            <label className="me-2"><strong>Cantidad:</strong></label>
            <button className="btn btn-outline-secondary" onClick={() => setCantidad((c) => Math.max(1, c - 1))}>−</button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-outline-secondary" onClick={() => setCantidad((c) => c + 1)}>+</button>
          </div>

          <button className="btn btn-dark w-100" onClick={handleAgregarAlCarrito}>
            Agregar {cantidad > 1 ? `${cantidad} unidades` : "al carrito"}
          </button>

          <div className="mt-4 text-sm text-gray-700 leading-relaxed">
            <p>{producto.descripcion.resumen}</p>
            <ul className="list-disc pl-4 mt-2">
              <li><strong>Clase:</strong> {producto.descripcion.detalles.clase}</li>
              <li><strong>Tipo de tela:</strong> {producto.descripcion.detalles.tipoTela}</li>
              <li><strong>Tipo de manga:</strong> {producto.descripcion.detalles.manga}</li>
              <li><strong>Tipo de tejido:</strong> {producto.descripcion.detalles.tejido}</li>
              <li><strong>Especificaciones:</strong> {producto.descripcion.detalles.especificaciones}</li>
              <li><strong>Instrucciones de uso:</strong> {producto.descripcion.detalles.uso}</li>
              <li><strong>Composición:</strong> {producto.descripcion.detalles.composicion}</li>
              <li><strong>Elaboración:</strong> {producto.descripcion.detalles.elaboracion}</li>
              <li><strong>Bolsillos:</strong> {producto.descripcion.detalles.bolsillos}</li>
              <li><strong>Tipo de cuello:</strong> {producto.descripcion.detalles.cuello}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
