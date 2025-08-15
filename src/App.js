import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Hombres from "./pages/Hombres";
import Footer from "./components/Footer";
import Mujeres from "./pages/Mujeres";
import Infantil from "./pages/Infantil";
import ProductoDetalle from "./pages/ProductoDetalle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/mujeres" element={<Mujeres />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
