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

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // quita tildes
}

function getVariantes(termino) {
  // Si termina en 's', agrega la versión sin 's' y viceversa
  const variantes = [termino];
  if (termino.endsWith("s")) {
    variantes.push(termino.slice(0, -1));
  } else {
    variantes.push(termino + "s");
  }
  return variantes;
}

function Busqueda() {
  const query = useQuery();
  const termino = query.get("q") || "";
  const variantes = getVariantes(normalize(termino));

  const resultados = allProducts.filter((p) => {
    const nombre = normalize(p.name);
    const clase = normalize(p.descripcion?.detalles?.clase || "");
    // Coincidencia en nombre o clase, en singular o plural
    return variantes.some(
      (v) => nombre.includes(v) || clase.includes(v)
    );
  });

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