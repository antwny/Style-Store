// src/components/Navbar.js
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const [busqueda, setBusqueda] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const safeTotalItems = isNaN(totalItems) ? 0 : totalItems;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(busqueda)}`);
      setBusqueda("");
      setIsOpen(false);
    }
  };

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4 py-2 d-flex align-items-center justify-content-between">
        <Link
          className="navbar-brand d-flex align-items-center me-2"
          to="/"
          onClick={closeMenu}
        >
          <span className="style-logo">Style</span>
          <span className="store-logo">Store</span>
        </Link>

        {/* agrupador del toggler + carrito para que queden juntos en móvil */}
        <div className="d-flex align-items-center ms-auto ms-lg-0">
          <button
            className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
            type="button"
            aria-controls="navbarContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Carrito siempre visible (fuera del collapse) */}
          <Link
            to="/cart"
            className="navbar-cart position-relative d-inline-block ms-2"
            aria-label="Ver carrito"
            onClick={closeMenu}
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

        <div
          className={
            "collapse navbar-collapse justify-content-between" +
            (isOpen ? " show" : "")
          }
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hombres" onClick={closeMenu}>
                Hombre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mujeres" onClick={closeMenu}>
                Mujer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/infantil" onClick={closeMenu}>
                Infantil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>

          <form className="navbar-searchbar me-3" onSubmit={handleSubmit}>
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;