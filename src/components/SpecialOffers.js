import React from 'react';
import '../styles/SpecialOffers.css';

const offers = [
  {
    name: 'Polera Niña Cayetana Rosado Chicle',
    image: 'https://topitop.vtexassets.com/arquivos/ids/386515/3096640_1.jpg?v=638854382024470000',
    originalPrice: 89.90,
    discountedPrice: 58.44,
  },
  {
    name: 'Casaca Hombre Aiden Beige',
    image: 'https://topitop.vtexassets.com/arquivos/ids/386728-500-auto?v=638870108111870000&width=500&height=auto&aspect=true',
    originalPrice: 229.90,
    discountedPrice: 160.93,
  },
  {
    name: 'Jogger Hombre Marco Verde Militar',
    image: 'https://topitop.vtexassets.com/arquivos/ids/344018-500-auto?v=638449833623900000&width=500&height=auto&aspect=true',
    originalPrice:  139.90,
    discountedPrice: 55.96,
  },
    {
    name: 'Falda Short Mujer Fan Negro',
    image: 'https://topitop.vtexassets.com/arquivos/ids/381227/3095159_1.jpg?v=638793211547400000',
    originalPrice:   99.90,
    discountedPrice: 39.96,
  },
];

const SpecialOffers = () => {
  return (
    <section className="offers-section">
      <h2>Ofertas Especiales</h2>
      <div className="offers-grid">
        {offers.map((item, i) => (
          <div className="offer-card" key={i}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="prices">
              <span className="original">S/ {item.originalPrice.toFixed(2)}</span>
              <span className="discounted">S/ {item.discountedPrice.toFixed(2)}</span>
            </div>
            <button className="buy-btn">Comprar ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
