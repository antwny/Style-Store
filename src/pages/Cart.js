import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container cart-empty">
        <h3>Tu carrito está vacío</h3>
        <Link className="btn btn-dark mt-3" to="/">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito ({totalItems} artículos)</h2>
      <div>
        {cart.map((item) => (
          <div
            key={`${item.id}_${item.talla}`}
            className="cart-item"
          >
            <img
              src={item.image}
              alt={item.name}
            />
            <div className="cart-item-details">
              <div className="cart-item-title">{item.name}</div>
              <div className="cart-item-size">
                Talla: <strong>{item.talla}</strong>
              </div>
              <div className="cart-item-price">
                S/. {item.price.toLocaleString()} c/u
              </div>
              <div className="cart-item-quantity mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.talla, item.cantidad - 1)}
                  disabled={item.cantidad <= 1}
                >
                  −
                </button>
                <span>{item.cantidad}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.talla, item.cantidad + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="cart-item-price mb-2">
                <strong>S/. {(item.price * item.cantidad).toLocaleString()}</strong>
              </div>
              <button
                className="btn-remove"
                title="Eliminar"
                onClick={() => removeFromCart(item.id, item.talla)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: S/. {totalPrice.toLocaleString()}</h3>
        <button className="btn btn-outline-danger me-2" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="btn btn-dark">Ir a pagar</button>
      </div>
    </div>
  );
}

export default Cart;
