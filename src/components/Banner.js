import React from "react";
import "../styles/Banner.css";

function Banner({ mensaje, colorFondo, imagen, botonTexto, onBotonClick }) {
  return (
    <div className="banner-advanced" style={{ backgroundColor: colorFondo }}>
      {imagen && (
        <img src={imagen} alt="Banner" className="banner-img" />
      )}
      <div className="banner-content">
        <span>{mensaje}</span>
        {botonTexto && (
          <button className="banner-btn" onClick={onBotonClick}>
            {botonTexto}
          </button>
        )}
      </div>
    </div>
  );
}

export default Banner;