import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Primer timeout: espera al siguiente ciclo de render
    setTimeout(() => {
      // Segundo timeout: espera a que imágenes y otros recursos se monten
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 100);
    }, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
