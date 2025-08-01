import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Hombres from "./pages/Hombres";
import Footer from "./components/Footer";
import Mujeres from "./pages/Mujeres";
import Infantil from "./pages/Infantil";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/mujeres" element={<Mujeres />} />
        <Route path="/infantil" element={<Infantil />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
