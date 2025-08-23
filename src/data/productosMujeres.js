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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/373227/2052261_1.jpg?v=638690081663830000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/373228/2052261_2.jpg?v=638690081699300000",
      "https://topitop.vtexassets.com/arquivos/ids/373229/2052261_3.jpg?v=638690081736170000",
      "https://topitop.vtexassets.com/arquivos/ids/373230/2052261_4.jpg?v=638690081772400000",
      "https://topitop.vtexassets.com/arquivos/ids/373227/2052261_1.jpg?v=638690081663830000"
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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/381267/3092347_1.jpg?v=638793216304270000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/381267/3092347_1.jpg?v=638793216304270000",
      "https://topitop.vtexassets.com/arquivos/ids/381268/3092347_2.jpg?v=638793216304370000",
      "https://topitop.vtexassets.com/arquivos/ids/381269/3092347_3.jpg?v=638793216304470000",
      "https://topitop.vtexassets.com/arquivos/ids/381270/3092347_4.jpg?v=638793216304570000"
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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/381227/3095159_1.jpg?v=638793211547400000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/381227/3095159_1.jpg?v=638793211547400000",
      "https://topitop.vtexassets.com/arquivos/ids/381228/3095159_2.jpg?v=638793211547500000",
      "https://topitop.vtexassets.com/arquivos/ids/381229/3095159_3.jpg?v=638793211547600000",
      "https://topitop.vtexassets.com/arquivos/ids/381230/3095159_4.jpg?v=638793211547700000"
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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/387285/3095361_1.jpg?v=638873484598630000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/387285/3095361_1.jpg?v=638873484598630000",
      "https://topitop.vtexassets.com/arquivos/ids/387286/3095361_2.jpg?v=638873484598730000",
      "https://topitop.vtexassets.com/arquivos/ids/387287/3095361_3.jpg?v=638873484598830000",
      "https://topitop.vtexassets.com/arquivos/ids/387288/3095361_4.jpg?v=638873484598930000"
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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/387368/3151866_1.jpg?v=638887973312970000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/387368/3151866_1.jpg?v=638887973312970000",
      "https://topitop.vtexassets.com/arquivos/ids/387369/3151866_2.jpg?v=638887973313070000",
      "https://topitop.vtexassets.com/arquivos/ids/387370/3151866_3.jpg?v=638887973313170000",
      "https://topitop.vtexassets.com/arquivos/ids/387371/3151866_4.jpg?v=638887973313270000"
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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/384530/3115616_1.jpg?v=638816526564430000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/384530/3115616_1.jpg?v=638816526564430000",
      "https://topitop.vtexassets.com/arquivos/ids/384531/3115616_2.jpg?v=638816526564530000",
      "https://topitop.vtexassets.com/arquivos/ids/384532/3115616_3.jpg?v=638816526564630000",
      "https://topitop.vtexassets.com/arquivos/ids/384533/3115616_4.jpg?v=638816526564730000"
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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/387380/3148383_1.jpg?v=638887974655200000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/387380/3148383_1.jpg?v=638887974655200000",
      "https://topitop.vtexassets.com/arquivos/ids/387381/3148383_2.jpg?v=638887974655300000",
      "https://topitop.vtexassets.com/arquivos/ids/387382/3148383_3.jpg?v=638887974655400000",
      "https://topitop.vtexassets.com/arquivos/ids/387383/3148383_4.jpg?v=638887974655500000"
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
    image:
      "https://topitop.vtexassets.com/arquivos/ids/381417/3093772_1.jpg?v=638793751568900000",
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/381417/3093772_1.jpg?v=638793751568900000",
      "https://topitop.vtexassets.com/arquivos/ids/381418/3093772_2.jpg?v=638793751569000000",
      "https://topitop.vtexassets.com/arquivos/ids/381419/3093772_3.jpg?v=638793751569100000",
      "https://topitop.vtexassets.com/arquivos/ids/381420/3093772_4.jpg?v=638793751569200000"
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
