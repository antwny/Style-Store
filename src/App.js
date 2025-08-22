// src/App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Hombres from "./pages/Hombres";
import Footer from "./components/Footer";
import Mujeres from "./pages/Mujeres";
import Infantil from "./pages/Infantil";
import ProductoDetalle from "./pages/ProductoDetalle";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart"; 
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      {/* ScrollToTop debe estar DENTRO del BrowserRouter */}
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/mujeres" element={<Mujeres />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/carrito" element={<Cart />} /> {/* Soporte para /carrito */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
