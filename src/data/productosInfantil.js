// productosInfantil.js
const productos = [
  {
    id: 201,
    name: "Polo Niña Mariamanda",
    price: 15.96,
    oldPrice: 39.9,
    discount: 60,
    sizes: ["4", "6", "8", "10"],
    color: "Beige",
    image: "/Style-Store/img/products/polo_mariamanda_1.png",
    images: [
      "/Style-Store/img/products/polo_mariamanda_1.png",
      "/Style-Store/img/products/polo_mariamanda_2.png",
      "/Style-Store/img/products/polo_mariamanda_3.png",
      "/Style-Store/img/products/polo_mariamanda_4.png"
    ],
    descripcion: {
      resumen:
        "Polo de niña con detalles en lentejuelas y gasa, perfecto para darle un toque delicado al atuendo.",
      detalles: {
        clase: "Polo",
        tipoTela: "Jersey llano",
        manga: "Larga",
        tejido: "Punto",
        especificaciones: "Detalles en lentejuelas y gasa",
        uso: "Casual / Diario",
        composicion: "100% algodón",
        elaboracion: "Teñido",
        bolsillos: "No",
        cuello: "Redondo",
      },
    },
  },
  {
    id: 202,
    name: "Polera Niña Cayetana",
    price: 58.44,
    oldPrice: 89.9,
    discount: 35,
    sizes: ["S", "M", "L", "XL"],
    color: "Rosado Chicle",
    image: "/Style-Store/img/products/polera_cayetana_1.png",
    images: [
      "/Style-Store/img/products/polera_cayetana_1.png",
      "/Style-Store/img/products/polera_cayetana_2.png",
      "/Style-Store/img/products/polera_cayetana_3.png",
      "/Style-Store/img/products/polera_cayetana_4.png"
    ],
    descripcion: {
      resumen:
        "Polera dulce en tono rosado con estampados suaves, ideal para el día a día con estilo.",
      detalles: {
        clase: "Polera",
        tipoTela: "Algodón suave",
        manga: "Corta",
        tejido: "Punto",
        especificaciones: "Estampado frontal",
        uso: "Casual / Diario",
        composicion: "100% algodón",
        elaboracion: "Confeccionado",
        bolsillos: "No",
        cuello: "Redondo",
      },
    },
  },
  {
    id: 203,
    name: "Casaca Niño Alfredo",
    price: 134.93,
    oldPrice: 179.9,
    discount: 25,
    sizes: ["S", "M", "L", "XL"],
    color: "Aqua Pastel",
    image: "/Style-Store/img/products/casaca_alfredo_1.png",
    images: [
      "/Style-Store/img/products/casaca_alfredo_1.png",
      "/Style-Store/img/products/casaca_alfredo_2.png",
      "/Style-Store/img/products/casaca_alfredo_3.png",
      "/Style-Store/img/products/casaca_alfredo_4.png"
    ],
    descripcion: {
      resumen:
        "Casaca suave en tono aqua pastel, ideal para mantener a los pequeños abrigados en climas frescos.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Tejido acanalado",
        manga: "Larga",
        tejido: "Mixto poliéster",
        especificaciones: "Cierre frontal, capucha",
        uso: "Casual / Otoño",
        composicion: "100% poliéster",
        elaboracion: "Confeccionado",
        bolsillos: "Sí, frontales",
        cuello: "Con capucha",
      },
    },
  },
  {
    id: 204,
    name: "Vestido Denim Niña Violeta",
    price: 54.95,
    oldPrice: 99.9,
    discount: 45,
    sizes: ["S", "M", "L", "XL"],
    color: "Blue Wash",
    image: "/Style-Store/img/products/vestido_denim_violeta_1.png",
    images: [
      "/Style-Store/img/products/vestido_denim_violeta_1.png",
      "/Style-Store/img/products/vestido_denim_violeta_2.png",
      "/Style-Store/img/products/vestido_denim_violeta_3.png",
      "/Style-Store/img/products/vestido_denim_violeta_4.png"
    ],
    descripcion: {
      resumen:
        "Vestido en estilo denim blue wash con corte juvenil, perfecto para combinaciones casuales.",
      detalles: {
        clase: "Vestido",
        tipoTela: "Denim ligero",
        manga: "Sin mangas",
        tejido: "Tejido plano",
        especificaciones: "Tirantes ajustables",
        uso: "Casual / Verano",
        composicion: "100% algodón",
        elaboracion: "Teñido",
        bolsillos: "Sí, delanteros",
        cuello: "Cuello cuadrado",
      },
    },
  },
  {
    id: 205,
    name: "Casaca Niño Gregor",
    price: 97.93,
    oldPrice: 139.9,
    discount: 30,
    sizes: ["S", "M", "L", "XL"],
    color: "Plomo Intenso",
    image: "/Style-Store/img/products/casaca_gregor_1.png",
    images: [
      "/Style-Store/img/products/casaca_gregor_1.png",
      "/Style-Store/img/products/casaca_gregor_2.png",
      "/Style-Store/img/products/casaca_gregor_3.png",
      "/Style-Store/img/products/casaca_gregor_4.png"
    ],
    descripcion: {
      resumen:
        "Casaca robusta en color plomo, con diseño juvenil y funcional, ideal para el día a día activo.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Tejido plano resistente",
        manga: "Larga",
        tejido: "Poliéster mezclado",
        especificaciones: "Cierre frontal y bolsillos laterales",
        uso: "Casual / Clima frío",
        composicion: "100% poliéster",
        elaboracion: "Confeccionado",
        bolsillos: "Sí, laterales",
        cuello: "Alto",
      },
    },
  },
  {
    id: 206,
    name: "Cardigan Niña Miriam Rosemen",
    price: 51.94,
    oldPrice: 79.9,
    discount: 35,
    sizes: ["S", "M", "L", "XL"],
    color: "Rosado",
    image: "/Style-Store/img/products/cardigan_miriam_rosemen_1.png",
    images: [
      "/Style-Store/img/products/cardigan_miriam_rosemen_1.png",
      "/Style-Store/img/products/cardigan_miriam_rosemen_2.png",
      "/Style-Store/img/products/cardigan_miriam_rosemen_3.png",
      "/Style-Store/img/products/cardigan_miriam_rosemen_4.png"
    ],
    descripcion: {
      resumen:
        "Cardigan suave en color rosado, ideal para añadir un toque acogedor y femenino al outfit.",
      detalles: {
        clase: "Cardigan",
        tipoTela: "Tejido de punto fino",
        manga: "Larga",
        tejido: "Mezclado",
        especificaciones: "Abierto frontal sin botones",
        uso: "Casual / Oficina",
        composicion: "60% algodón, 40% poliéster",
        elaboracion: "Confeccionado",
        bolsillos: "No",
        cuello: "Cuello redondo",
      },
    },
  },
  {
    id: 207,
    name: "Jean Niña Mafer Light Wash",
    price: 65.94,
    oldPrice: 109.9,
    discount: 40,
    sizes: ["S", "M", "L", "XL"],
    color: "Azul",
    image: "/Style-Store/img/products/jean_mafer_light_wash_1.png",
    images: [
      "/Style-Store/img/products/jean_mafer_light_wash_1.png",
      "/Style-Store/img/products/jean_mafer_light_wash_2.png",
      "/Style-Store/img/products/jean_mafer_light_wash_3.png",
      "/Style-Store/img/products/jean_mafer_light_wash_4.png"
    ],
    descripcion: {
      resumen:
        "Jean en lavado claro con corte clásico y elasticidad, para mayor libertad y estilo.",
      detalles: {
        clase: "Jean",
        tipoTela: "Denim stretch",
        manga: "Sin mangas",
        tejido: "Algodón con elastano",
        especificaciones: "Tiro medio, pretina con elástico",
        uso: "Casual / Diario",
        composicion: "98% algodón, 2% elastano",
        elaboracion: "Confeccionado",
        bolsillos: "Sí, 5 bolsillos",
        cuello: "N/A",
      },
    },
  },
  {
    id: 208,
    name: "Casaca Niña Isabel",
    price: 107.94,
    oldPrice: 179.9,
    discount: 40,
    sizes: ["S", "M", "L", "XL"],
    color: "Aqua",
    image: "/Style-Store/img/products/casaca_niña_isabel_1.png",
    images: [
      "/Style-Store/img/products/casaca_niña_isabel_1.png",
      "/Style-Store/img/products/casaca_niña_isabel_2.png",
      "/Style-Store/img/products/casaca_niña_isabel_3.png",
      "/Style-Store/img/products/casaca_niña_isabel_4.png"
    ],
    descripcion: {
      resumen:
        "Casaca infantil en tono aqua, ideal para combinar y proteger en climas templados.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Tejido acolchado",
        manga: "Larga",
        tejido: "Poliéster",
        especificaciones: "Zipper, bolsillos laterales",
        uso: "Casual / Otoño",
        composicion: "100% poliéster",
        elaboracion: "Confeccionado",
        bolsillos: "Sí, laterales",
        cuello: "Alto con capucha",
      },
    },
  },
];

export default productos;
