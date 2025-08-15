import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import SpecialOffers from "../components/SpecialOffers";
import Testimonials from "../components/Testimonials";
import React, { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Polera Hombre Core Negro",
      price: 49.95,
      oldPrice: 99,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/366519/1687364_1.jpg?v=638630743888200000",
    },
    {
      name: "Camisa Casual",
      price: 89.9,
      oldPrice: 99,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      color: "Marron",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/387324/3141954_1.jpg?v=638887968182270000",
    },
    {
      name: "Camiseta Básica Premium",
      price: 49,
      oldPrice: 99,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      color: "Blanco",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/294385/1682195_1.jpg?v=638265194837100000",
    },
    {
      name: "Vestido Mujer Martina Print",
      price: 43.96,
      oldPrice: 109.9,
      discount: 60,
      sizes: ["XS", "S", "M", "L"],
      color: "Rosado Agua",
      image:
        "https://topitop.vtexassets.com/arquivos/ids/373227/2052261_1.jpg?v=638690081663830000",
    },
    // Puedes agregar más productos aquí
  ];

  let imagenes = [
    "https://eu.gymshark.com/_next/image?url=https:%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6i2Ans0cuf9CVhT6QnqZl7%2F625849eec8404b9014874d544456c7cf%2F3840x1140_Dual.jpg&w=1920&q=85",
    "https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2025/01/SyNFEmHIJx.jpeg",
    "https://kinsta.altitude-sports.com/wp-content/uploads/2018/02/Altitude-Blog-Rains-Stutterheim-Urban-Unisex-Raincoats-COVER.jpg",
    "https://static.fendi.com/cms/resource/image/637260/landscape_ratio8x3/1144/429/acbe7b887843cbe50a833a2af77ea8a9/0DAEE12D74D0674454F124B084B691FF/ms-adv-fw22-digital-16-9-14-1-.jpg",
  ];

  const [ruta, setRuta] = useState(imagenes[0]);
  const indexRef = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % imagenes.length;
      setRuta(imagenes[indexRef.current]);
    }, 2500);

    return () => clearInterval(interval); // limpieza para evitar bugs
  }, []);

  return (
    <div>
      <Banner
        mensaje="¡Descuento del 20% en toda la tienda esta semana!"
        colorFondo="#000000ff"
        imagen={ruta}
        botonTexto="Ver ofertas"
        onBotonClick={() => navigate("/hombres")} // <-- Cambia esto
      />
      <CategorySection />

      <div className="home-container">
        <h2 className="section-title">Lo más Vendido</h2>

        <div className="container my-4">
          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Testimonials />
      <SpecialOffers />
    </div>
  );
}

export default Home;
