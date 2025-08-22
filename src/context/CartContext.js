import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar (item debe traer: id, name, price, image, talla, cantidad)
  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex(p => p.id === item.id && p.talla === item.talla);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], cantidad: copy[idx].cantidad + item.cantidad };
        return copy;
      }
      return [...prev, item];
    });
  };

  // Actualizar cantidad
  const updateQuantity = (id, talla, nuevaCantidad) => {
    setCart((prev) => {
      if (nuevaCantidad <= 0) {
        return prev.filter(p => !(p.id === id && p.talla === talla));
      }
      return prev.map(p =>
        p.id === id && p.talla === talla ? { ...p, cantidad: nuevaCantidad } : p
      );
    });
  };

  // Eliminar
  const removeFromCart = (id, talla) => {
    setCart((prev) => prev.filter(p => !(p.id === id && p.talla === talla)));
  };

  // Vaciar
  const clearCart = () => setCart([]);

  // Totales
  const totalItems = cart.reduce((acc, it) => acc + it.cantidad, 0);
  const totalPrice = cart.reduce((acc, it) => acc + it.price * it.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        // Alias opcionales por si algún componente viejo los usa:
        removeItem: removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
