import { useLocation } from "react-router-dom";
import productosHombres from "../data/productosHombres";
import productosMujeres from "../data/productosMujeres";
import productosInfantil from "../data/productosInfantil";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const allProducts = [
  ...productosHombres,
  ...productosMujeres,
  ...productosInfantil,
];

function Busqueda() {
  const query = useQuery();
  const termino = query.get("q") || "";

  const resultados = allProducts.filter((p) =>
    p.name.toLowerCase().includes(termino.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2 className="section-title">
        Resultados para: <span style={{ color: "#222" }}>{termino}</span>
      </h2>
      {resultados.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>
          No se encontraron productos.
        </p>
      ) : (
        <div className="products-grid">
          {resultados.map((producto) => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Busqueda;