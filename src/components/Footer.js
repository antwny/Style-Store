import { Link } from "react-router-dom";
import "../styles/Footer.css";
import facebookIcon from "../assets/social/icons8-facebook-40.png";
import instagramIcon from "../assets/social/icons8-instagram-40.png";
import tiktokIcon from "../assets/social/icons8-tiktok-40.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Style Store</h2>
          <p className="slogan">Vístete con estilo, destaca con actitud.</p>
        </div>

        <div className="footer-links">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/hombres">Hombres</Link></li>
            <li><Link to="/mujeres">Mujeres</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/infantil">Infantil</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <p>Email: contacto@stylestore.pe</p>
          <p>Tel: +51 987 654 321</p>
          <p>Lima, Perú</p>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="footer-redes">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-img" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-img" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src={tiktokIcon} alt="TikTok" className="social-img" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Style Store — Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
