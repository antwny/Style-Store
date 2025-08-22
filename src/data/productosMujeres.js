// productosMujer.js
const productos = [
  {
    id: 101, // Cambiado de 9 a 101
    name: "Vestido Mujer Martina Print",
    price: 43.96,
    oldPrice: 109.9,
    discount: 60,
    sizes: ["S", "M", "L"],
    color: "Rosado Agua",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/373227/2052261_1.jpg?v=638690081663830000",
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
    id: 102, // Cambiado de 2 a 102
    name: "Casaca Mujer Daroy",
    price: 91.96,
    oldPrice: 229.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Coco",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/381267/3092347_1.jpg?v=638793216304270000",
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
    id: 103, // Cambiado de 3 a 103
    name: "Falda Short Mujer Fan",
    price: 39.96,
    oldPrice: 99.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/381227/3095159_1.jpg?v=638793211547400000",
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
    id: 104, // Cambiado de 4 a 104
    name: "Casaca Mujer Eru",
    price: 91.96,
    oldPrice: 229.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Beige",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/387285/3095361_1.jpg?v=638873484598630000",
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
    id: 105, // Cambiado de 5 a 105
    name: "Jean Mujer Zara Total Dirty",
    price: 87.95,
    oldPrice: 159.9,
    discount: 45,
    sizes: ["S", "M", "L", "XL"],
    color: "Stone",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/387368/3151866_1.jpg?v=638887973312970000",
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
    id: 106, // Cambiado de 6 a 106
    name: "Chompa Mujer Alto Niquel Poly Htr",
    price: 39.96,
    oldPrice: 99.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Gris",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/384530/3115616_1.jpg?v=638816526564430000",
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
    id: 107, // Cambiado de 7 a 107
    name: "Jean Mujer Yildaz",
    price: 87.95,
    oldPrice: 159.9,
    discount: 45,
    sizes: ["S", "M", "L", "XL"],
    color: "Azul",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/387380/3148383_1.jpg?v=638887974655200000",
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
    id: 108, // Cambiado de 8 a 108
    name: "Casaca Mujer Fernanda",
    price: 59.96,
    oldPrice: 149.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/381417/3093772_1.jpg?v=638793751568900000",
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
