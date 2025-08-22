// src/components/Navbar.js
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  // Asegura que siempre sea un número válido
  const safeTotalItems = isNaN(totalItems) ? 0 : totalItems;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(busqueda)}`);
      setBusqueda("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4 py-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="style-logo">Style</span>
          <span className="store-logo">Store</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hombres">
                Hombre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mujeres">
                Mujer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/infantil">
                Infantil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>

          <form
            className="navbar-searchbar me-3"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Buscar productos..."
              aria-label="Buscar"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <span className="search-icon">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.65" y1="16.65" x2="21" y2="21" />
              </svg>
            </span>
          </form>

          {/* 🔥 Carrito corregido con /cart */}
          <Link
            to="/cart"
            className="position-relative d-inline-block"
            aria-label="Ver carrito"
          >
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/?size=32&id=M5FruzZetXVn&format=png"
              alt="shopping-cart"
            />
            {safeTotalItems > 0 && (
              <span
                className="badge bg-danger cart-badge"
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  fontSize: 12,
                }}
              >
                {safeTotalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;