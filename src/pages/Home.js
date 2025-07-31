import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  const products = [
    {
      name: "Camiseta Básica Premium",
      price: 49,
      oldPrice: 99,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      color: "Blanco",
      image: "https://topitop.vtexassets.com/arquivos/ids/294385/1682195_1.jpg?v=638265194837100000",
    },
    {
      name: "Vestido Floral Elegante",
      price: 89,
      oldPrice: 99,
      discount: 25,
      sizes: ["XS", "S", "M", "L"],
      color: "Blanco",
      image: "https://topitop.vtexassets.com/arquivos/ids/373227/2052261_1.jpg?v=638690081663830000",
    },
    // Puedes agregar más productos aquí
  ];

  return (
    <div className="home-container">
      <div className="promo-banner">
        Envío gratis en compras mayores a S/. 50
      </div>

      <h2 className="section-title">Todos los productos</h2>
      <p className="section-description">
        Descubre nuestra colección de {products.length} productos
      </p>

      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;