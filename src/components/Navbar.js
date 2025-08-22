// src/components/Navbar.js
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useContext(CartContext);

  // Asegura que siempre sea un número válido
  const safeTotalItems = isNaN(totalItems) ? 0 : totalItems;

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