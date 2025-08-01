import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productosHombres";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductCard.css";

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const [cantidad, setCantidad] = useState(1);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("S"); // S por defecto

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
    console.log("Producto agregado:", {
      id: producto.id,
      cantidad,
      talla: tallaSeleccionada,
    });
  };

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-start">
        <div className="col-md-6">
          <img
            src={producto.image}
            alt={producto.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{producto.name}</h2>
          <p className="fs-5">
            <strong className="text-dark">
              S/. {producto.price.toLocaleString()}
            </strong>{" "}
            <span className="text-muted text-decoration-line-through">
              S/. {producto.oldPrice.toLocaleString()}
            </span>{" "}
            <span className="badge bg-danger">-{producto.discount}%</span>
          </p>
          <p>
            <strong>Color:</strong> {producto.color}
          </p>

          {/* Selector visual de Talla */}
          <div className="mb-3">
            <strong>Talla:</strong>
            <div className="d-flex flex-wrap mt-2">
              {producto.sizes.map((talla, index) => (
                <div
                  key={index}
                  className={`talla-btn ${
                    tallaSeleccionada === talla ? "selected" : ""
                  }`}
                  onClick={() => setTallaSeleccionada(talla)}
                >
                  {talla}
                </div>
              ))}
            </div>
          </div>

          {/* Selector de Cantidad */}
          <div className="d-flex align-items-center mb-3">
            <label className="me-2">
              <strong>Cantidad:</strong>
            </label>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCantidad((c) => Math.max(1, c - 1))}
            >
              −
            </button>
            <span className="mx-2">{cantidad}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCantidad((c) => c + 1)}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-dark w-100"
            onClick={handleAgregarAlCarrito}
          >
            Agregar {cantidad > 1 ? `${cantidad} unidades` : "al carrito"}
          </button>

          <div className="mt-4 text-sm text-gray-700 leading-relaxed">
            <p>{producto.descripcion.resumen}</p>
            <ul className="list-disc pl-4 mt-2">
              <li>
                <strong>Clase:</strong> {producto.descripcion.detalles.clase}
              </li>
              <li>
                <strong>Tipo de tela:</strong>{" "}
                {producto.descripcion.detalles.tipoTela}
              </li>
              <li>
                <strong>Tipo de manga:</strong>{" "}
                {producto.descripcion.detalles.manga}
              </li>
              <li>
                <strong>Tipo de tejido:</strong>{" "}
                {producto.descripcion.detalles.tejido}
              </li>
              <li>
                <strong>Especificaciones:</strong>{" "}
                {producto.descripcion.detalles.especificaciones}
              </li>
              <li>
                <strong>Instrucciones de uso:</strong>{" "}
                {producto.descripcion.detalles.uso}
              </li>
              <li>
                <strong>Composición:</strong>{" "}
                {producto.descripcion.detalles.composicion}
              </li>
              <li>
                <strong>Elaboración:</strong>{" "}
                {producto.descripcion.detalles.elaboracion}
              </li>
              <li>
                <strong>Bolsillos:</strong>{" "}
                {producto.descripcion.detalles.bolsillos}
              </li>
              <li>
                <strong>Tipo de cuello:</strong>{" "}
                {producto.descripcion.detalles.cuello}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
