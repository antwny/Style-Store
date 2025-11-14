// productosMujer.js
const productos = [
  {
    id: 101,
    name: "Vestido Mujer Martina Print",
    price: 43.96,
    oldPrice: 109.9,
    discount: 60,
    sizes: ["S", "M", "L"],
    color: "Rosado Agua",
    image: "/Style-Store/img/products/vestido_martina_print_1.png",
    images: [
      "/Style-Store/img/products/vestido_martina_print_2.png",
      "/Style-Store/img/products/vestido_martina_print_3.png",
      "/Style-Store/img/products/vestido_martina_print_4.png",
      "/Style-Store/img/products/vestido_martina_print_1.png"
    ],
    descripcion: {
      resumen:
        "Vestido ligero con estampado floral, ideal para días soleados. Diseño fresco y femenino.",
      detalles: {
        clase: "Vestido",
        tipoTela: "Tejido plano",
        manga: "Sin mangas",
        tejido: "Poliéster con spandex",
        especificaciones: "Corte recto, falda suelta",
        uso: "Casual / Verano",
        composicion: "95% Poliéster, 5% Spandex",
        elaboracion: "Confeccionado en Perú",
        bolsillos: "No",
        cuello: "Cuello redondo",
      },
    },
  },
  {
    id: 102,
    name: "Casaca Mujer Daroy",
    price: 91.96,
    oldPrice: 229.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Coco",
    image: "/Style-Store/img/products/casaca_daroy_1.png",
    images: [
      "/Style-Store/img/products/casaca_daroy_1.png",
      "/Style-Store/img/products/casaca_daroy_2.png",
      "/Style-Store/img/products/casaca_daroy_3.png",
      "/Style-Store/img/products/casaca_daroy_4.png"
    ],
    descripcion: {
      resumen:
        "Casaca acolchada con capucha desmontable y cierre frontal. Perfecta para climas fríos.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Acolchada",
        manga: "Manga larga",
        tejido: "Poliéster impermeable",
        especificaciones: "Bolsillos laterales con cierre",
        uso: "Invierno / Casual",
        composicion: "100% Poliéster",
        elaboracion: "Importado",
        bolsillos: "Sí, 2 frontales",
        cuello: "Alto con cierre",
      },
    },
  },
  {
    id: 103,
    name: "Falda Short Mujer Fan",
    price: 39.96,
    oldPrice: 99.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    image: "/Style-Store/img/products/falda_short_fan_1.png",
    images: [
      "/Style-Store/img/products/falda_short_fan_1.png",
      "/Style-Store/img/products/falda_short_fan_2.png",
      "/Style-Store/img/products/falda_short_fan_3.png",
      "/Style-Store/img/products/falda_short_fan_4.png"
    ],
    descripcion: {
      resumen:
        "Falda con short interno para mayor comodidad. Diseño juvenil y versátil.",
      detalles: {
        clase: "Falda/Short",
        tipoTela: "Stretch",
        manga: "Sin mangas",
        tejido: "Poliéster con elastano",
        especificaciones: "Pretina elástica",
        uso: "Casual / Diario",
        composicion: "92% Poliéster, 8% Elastano",
        elaboracion: "Confeccionado en Perú",
        bolsillos: "No",
        cuello: "N/A",
      },
    },
  },
  {
    id: 104,
    name: "Casaca Mujer Eru",
    price: 91.96,
    oldPrice: 229.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Beige",
    image: "/Style-Store/img/products/casaca_eru_1.png",
    images: [
      "/Style-Store/img/products/casaca_eru_1.png",
      "/Style-Store/img/products/casaca_eru_2.png",
      "/Style-Store/img/products/casaca_eru_3.png",
      "/Style-Store/img/products/casaca_eru_4.png"
    ],
    descripcion: {
      resumen:
        "Casaca bomber con detalles en rib y cierre metálico. Estilo urbano y moderno.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Tejido plano",
        manga: "Manga larga",
        tejido: "Poliéster",
        especificaciones: "Cierre frontal y bolsillos laterales",
        uso: "Casual / Otoño",
        composicion: "100% Poliéster",
        elaboracion: "Importado",
        bolsillos: "Sí, 2 laterales",
        cuello: "Cuello bomber",
      },
    },
  },
  {
    id: 105,
    name: "Jean Mujer Zara Total Dirty",
    price: 87.95,
    oldPrice: 159.9,
    discount: 45,
    sizes: ["S", "M", "L", "XL"],
    color: "Stone",
    image: "/Style-Store/img/products/jean_zara_dirty_1.png",
    images: [
      "/Style-Store/img/products/jean_zara_dirty_1.png",
      "/Style-Store/img/products/jean_zara_dirty_2.png",
      "/Style-Store/img/products/jean_zara_dirty_3.png",
      "/Style-Store/img/products/jean_zara_dirty_4.png"
    ],
    descripcion: {
      resumen:
        "Jean skinny fit con efecto desgastado. Ideal para un look moderno y casual.",
      detalles: {
        clase: "Jean",
        tipoTela: "Denim stretch",
        manga: "Sin mangas",
        tejido: "Algodón con elastano",
        especificaciones: "Tiro medio, cierre y botón",
        uso: "Casual / Diario",
        composicion: "98% Algodón, 2% Elastano",
        elaboracion: "Confeccionado en Perú",
        bolsillos: "Sí, 5 bolsillos",
        cuello: "N/A",
      },
    },
  },
  {
    id: 106,
    name: "Chompa Mujer Alto Niquel Poly Htr",
    price: 39.96,
    oldPrice: 99.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Gris",
    image: "/Style-Store/img/products/chompa_alto_niquel_1.png",
    images: [
      "/Style-Store/img/products/chompa_alto_niquel_1.png",
      "/Style-Store/img/products/chompa_alto_niquel_2.png",
      "/Style-Store/img/products/chompa_alto_niquel_3.png",
      "/Style-Store/img/products/chompa_alto_niquel_4.png"
    ],
    descripcion: {
      resumen:
        "Chompa ligera de cuello redondo y textura jaspeada. Cómoda y versátil.",
      detalles: {
        clase: "Chompa",
        tipoTela: "Tejido de punto",
        manga: "Manga larga",
        tejido: "Poliéster y algodón",
        especificaciones: "Corte regular",
        uso: "Casual / Oficina",
        composicion: "60% Poliéster, 40% Algodón",
        elaboracion: "Confeccionado en Perú",
        bolsillos: "No",
        cuello: "Redondo",
      },
    },
  },
  {
    id: 107,
    name: "Jean Mujer Yildaz",
    price: 87.95,
    oldPrice: 159.9,
    discount: 45,
    sizes: ["S", "M", "L", "XL"],
    color: "Azul",
    image: "/Style-Store/img/products/jean_yildaz_1.png",
    images: [
      "/Style-Store/img/products/jean_yildaz_1.png",
      "/Style-Store/img/products/jean_yildaz_2.png",
      "/Style-Store/img/products/jean_yildaz_3.png",
      "/Style-Store/img/products/jean_yildaz_4.png"
    ],
    descripcion: {
      resumen:
        "Jean recto con lavado sutil y tiro alto. Clásico y fácil de combinar.",
      detalles: {
        clase: "Jean",
        tipoTela: "Denim",
        manga: "Sin mangas",
        tejido: "Algodón",
        especificaciones: "Corte recto, cierre y botón",
        uso: "Casual",
        composicion: "100% Algodón",
        elaboracion: "Confeccionado en Perú",
        bolsillos: "Sí, 5 bolsillos",
        cuello: "N/A",
      },
    },
  },
  {
    id: 108,
    name: "Casaca Mujer Fernanda",
    price: 59.96,
    oldPrice: 149.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    image: "/Style-Store/img/products/casaca_fernanda_1.png",
    images: [
      "/Style-Store/img/products/casaca_fernanda_1.png",
      "/Style-Store/img/products/casaca_fernanda_2.png",
      "/Style-Store/img/products/casaca_fernanda_3.png",
      "/Style-Store/img/products/casaca_fernanda_4.png"
    ],
    descripcion: {
      resumen:
        "Casaca larga con cinturón y solapas. Ideal para un look elegante en climas fríos.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Tejido plano",
        manga: "Manga larga",
        tejido: "Poliéster",
        especificaciones: "Cierre frontal oculto, cinturón ajustable",
        uso: "Casual / Oficina",
        composicion: "100% Poliéster",
        elaboracion: "Importado",
        bolsillos: "Sí, 2 laterales",
        cuello: "Solapa ancha",
      },
    },
  },
];

export default productos;
