import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

function Home() {
  const products = [
            {
      name: "Polera Hombre Core Negro",
      price: 49.95,
      oldPrice: 99,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      image: "https://topitop.vtexassets.com/arquivos/ids/366519/1687364_1.jpg?v=638630743888200000",
    },
        {
      name: "Camisa Casual",
      price: 89.90,
      oldPrice: 99,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      color: "Marron",
      image: "https://topitop.vtexassets.com/arquivos/ids/387324/3141954_1.jpg?v=638887968182270000",
    },
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