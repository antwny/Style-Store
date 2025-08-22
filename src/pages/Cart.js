import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Tu carrito está vacío</h3>
        <Link className="btn btn-dark mt-3" to="/">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h3>Carrito ({totalItems} artículos)</h3>

      <div className="list-group mt-4">
        {cart.map((item) => (
          <div
            key={`${item.id}_${item.talla}`} // Cambiado de item.size a item.talla
            className="list-group-item d-flex align-items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 90, height: 90, objectFit: "cover" }}
              className="me-3 rounded"
            />
            <div className="flex-grow-1">
              <h5 className="mb-1">{item.name}</h5>
              <p className="mb-1">
                Talla: <strong>{item.talla}</strong> {/* Cambiado de item.size a item.talla */}
              </p>
              <p className="mb-1">S/. {item.price.toLocaleString()} c/u</p>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => updateQuantity(item.id, item.talla, item.cantidad - 1)} // Cambiado de item.size y item.quantity
                >
                  −
                </button>
                <span className="mx-2">{item.cantidad}</span> {/* Cambiado de item.quantity a item.cantidad */}
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => updateQuantity(item.id, item.talla, item.cantidad + 1)} // Cambiado de item.size y item.quantity
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-end">
              <p className="mb-1">
                S/. {(item.price * item.cantidad).toLocaleString()} {/* Cambiado de item.quantity a item.cantidad */}
              </p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id, item.talla)} // Cambiado de item.size a item.talla
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-end">
        <h4>Total: S/. {totalPrice.toLocaleString()}</h4>
        <button className="btn btn-outline-danger me-2" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="btn btn-dark">Ir a pagar</button>
      </div>
    </div>
  );
}

export default Cart;
