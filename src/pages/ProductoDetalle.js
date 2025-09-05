import React, { useState, useContext, useEffect } from "react";
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

  const imagenes = producto.images && producto.images.length > 0
    ? producto.images
    : [producto.image];

  const [indiceImagen, setIndiceImagen] = useState(0);

  // --- Carrusel automático ---
  useEffect(() => {
    if (imagenes.length <= 1) return; // No auto-carrusel si solo hay una imagen
    const timer = setTimeout(() => {
      setIndiceImagen((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 3500); // 4 segundos
    return () => clearTimeout(timer);
  }, [indiceImagen, imagenes.length]);
  // ---------------------------

  const handlePrev = () => {
    setIndiceImagen((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndiceImagen((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 2200);
  };

  if (!producto) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Producto no encontrado</h2>
      </div>
    );
  }

  const handleAgregarAlCarrito = () => {
    if (!tallaSeleccionada) {
      showToast("Selecciona una talla antes de agregar al carrito.");
      return;
    }
    const item = {
      id: producto.id,
      name: producto.name,
      price: producto.price,
      image: producto.image,
      talla: tallaSeleccionada,
      cantidad: cantidad,
      color: producto.color,
      descripcion: producto.descripcion,
    };
    addToCart(item);
    showToast(
      `${cantidad} x "${producto.name}" (Talla ${tallaSeleccionada}) agregado al carrito.`
    );
  };

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-start">
        <div className="col-md-6">
          <div className="carousel-producto position-relative mb-3">
            <img
              src={imagenes[indiceImagen]}
              alt={producto.name}
              className="img-fluid rounded shadow-sm"
              style={{
                width: "100%",
                height: 680, 
                objectFit: "contain",
                background: "#F3F3F3",
                display: "block",
              }}
            />
            {imagenes.length > 1 && (
              <>
                <button
                  className="carousel-btn carousel-btn-left"
                  onClick={handlePrev}
                  aria-label="Anterior"
                  type="button"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  className="carousel-btn carousel-btn-right"
                  onClick={handleNext}
                  aria-label="Siguiente"
                  type="button"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
                <div className="carousel-indicators">
                  {imagenes.map((_, idx) => (
                    <span
                      key={idx}
                      className={`carousel-dot${idx === indiceImagen ? " active" : ""}`}
                      onClick={() => setIndiceImagen(idx)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
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

      {toast.show && (
        <div
          style={{
            position: "fixed",
            bottom: 32, 
            right: 32,  
            zIndex: 2000,
            background: "#222",
            color: "#fff",
            padding: "1rem 1.5rem",
            borderRadius: 10,
            boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
            fontWeight: 500,
            fontSize: 16,
            minWidth: 220,
            textAlign: "center",
            opacity: toast.show ? 1 : 0,
            transition: "opacity 0.3s"
          }}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default ProductoDetalle;
