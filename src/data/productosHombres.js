const productos = [
  {
    id: 1,
    name: "Casaca Hombre Aiden Beige",
    price: 160.93,
    oldPrice: 229.9,
    discount: 40,
    sizes: ["S", "M", "L"],
    color: "Beige",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/386728-500-auto?v=638870108111870000",
    descripcion: {
      resumen:
        "Renueva tu guardarropa con esta Casaca Hombre en el color de tu preferencia y combínala para armar tu look perfecto.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Poliéster",
        manga: "Larga",
        tejido: "Plano",
        especificaciones: "Casaca gruesa con bolsillo interno",
        uso: "No lavar, no planchar, no usar blanqueador, limpieza al seco",
        composicion: "100% poliéster",
        elaboracion: "Teñido",
        bolsillos: "Con bolsillos delanteros",
        cuello: "Camisa",
      },
    },
  },
  {
    id: 2,
    name: "Jogger Hombre Marco Verde Militar",
    price: 55.96,
    oldPrice: 139.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Verde Militar",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/344018-500-auto?v=638449833623900000",
    descripcion: {
      resumen:
        "Jogger de estilo deportivo para uso casual. Ideal para entrenamientos ligeros o días relajados.",
      detalles: {
        clase: "Jogger",
        tipoTela: "Algodón mezclado con poliéster",
        manga: "Sin mangas",
        tejido: "De punto",
        especificaciones: "Cintura elástica con cordón, bolsillos laterales",
        uso: "Lavado a máquina en frío, no blanquear, secado a baja temperatura",
        composicion: "80% algodón, 20% poliéster",
        elaboracion: "Confeccionado",
        bolsillos: "Laterales",
        cuello: "Sin cuello",
      },
    },
  },
  {
    id: 3,
    name: "Polera Hombre Core",
    price: 49.95,
    oldPrice: 99,
    discount: 39,
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/366519/1687364_1.jpg?v=638630743888200000",
    descripcion: {
      resumen:
        "Polera casual perfecta para clima fresco. Combina con jeans o joggers para un look moderno.",
      detalles: {
        clase: "Polera",
        tipoTela: "Algodón",
        manga: "Larga",
        tejido: "De punto",
        especificaciones: "Interior afelpado, cuello redondo",
        uso: "Lavar con prendas del mismo color, planchar a baja temperatura",
        composicion: "100% algodón",
        elaboracion: "Teñido",
        bolsillos: "Sin bolsillos",
        cuello: "Redondo",
      },
    },
  },
  {
    id: 4,
    name: "Camisa Hombre Thomas",
    price: 69.93,
    oldPrice: 99.9,
    discount: 39,
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/387324/3141954_1.jpg?v=638887968182270000",
    descripcion: {
      resumen:
        "Camisa elegante para ocasiones formales o laborales. Corte moderno que estiliza la figura.",
      detalles: {
        clase: "Camisa",
        tipoTela: "Algodón",
        manga: "Larga",
        tejido: "Plano",
        especificaciones: "Botones frontales, corte recto",
        uso: "Lavado en seco recomendado",
        composicion: "100% algodón",
        elaboracion: "Teñido",
        bolsillos: "Sin bolsillos",
        cuello: "Camisa",
      },
    },
  },
  {
    id: 5,
    name: "Polo Hombre José Core",
    price: 27.93,
    oldPrice: 39.9,
    discount: 22,
    sizes: ["S", "M", "L", "XL"],
    color: "Blanco",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/294385/1682195_1.jpg?v=638265194837100000",
    descripcion: {
      resumen:
        "Polo básico ideal para uso diario. Fresco y cómodo, se adapta a cualquier estilo.",
      detalles: {
        clase: "Polo",
        tipoTela: "Algodón",
        manga: "Corta",
        tejido: "De punto",
        especificaciones: "Cuello redondo, costuras reforzadas",
        uso: "Lavado a máquina suave",
        composicion: "100% algodón",
        elaboracion: "Confeccionado",
        bolsillos: "Sin bolsillos",
        cuello: "Redondo",
      },
    },
  },
  {
    id: 6,
    name: "Casaca Hombre Bose",
    price: 67.96,
    oldPrice: 69.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Verde Salvia",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/383795/3109871_1.jpg?v=638816355436370000",
    descripcion: {
      resumen:
        "Casaca liviana ideal para media estación. Combínala con jeans o joggers para un look urbano.",
      detalles: {
        clase: "Casaca",
        tipoTela: "Nylon",
        manga: "Larga",
        tejido: "Plano",
        especificaciones: "Con capucha desmontable, cierre frontal",
        uso: "Limpieza en seco preferente",
        composicion: "100% nylon",
        elaboracion: "Repelente al agua",
        bolsillos: "Con bolsillos laterales",
        cuello: "Alto",
      },
    },
  },
  {
    id: 7,
    name: "Polera Hombre Hawk",
    price: 51.96,
    oldPrice: 129.9,
    discount: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Gris Melange",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/378436/2078335_1.jpg?v=638764046319330000",
    descripcion: {
      resumen:
        "Polera moderna con diseño minimalista. Perfecta para combinar con prendas deportivas.",
      detalles: {
        clase: "Polera",
        tipoTela: "Algodón con poliéster",
        manga: "Larga",
        tejido: "De punto",
        especificaciones: "Interior semi-afelpado, cuello redondo",
        uso: "Lavar a mano o máquina con agua fría",
        composicion: "70% algodón, 30% poliéster",
        elaboracion: "Pre-teñido",
        bolsillos: "Sin bolsillos",
        cuello: "Redondo",
      },
    },
  },
  {
    id: 8,
    name: "Pantalón Hombre Bernardo",
    price: 97.93,
    oldPrice: 139.9,
    discount: 30,
    sizes: ["S", "M", "L", "XL"],
    color: "Negro Jazpe",
    image:
      "https://topitop.vtexassets.com/arquivos/ids/386712/3112817_1.jpg?v=638870106205230000",
    descripcion: {
      resumen:
        "Pantalón de tela resistente con corte moderno. Ideal para ocasiones casuales y urbanas.",
      detalles: {
        clase: "Pantalón",
        tipoTela: "Mezcla de algodón con fibras sintéticas",
        manga: "Sin mangas",
        tejido: "Plano",
        especificaciones: "Pretina fija, cierre con botón y cremallera",
        uso: "Lavar en frío, secado al aire",
        composicion: "65% algodón, 35% poliéster",
        elaboracion: "Confeccionado",
        bolsillos: "Laterales y traseros",
        cuello: "Sin cuello",
      },
    },
  },
];

export default productos;
