const products = [
    {
        id: 1,
        title: "EA SPORTS FC 25 Standard Edition Código de XBOX LIVE",
        description: "Experimentá la emoción del fútbol con EA SPORTS FC 25. Con nuevas mecánicas realistas y licencias oficiales, jugá con tus equipos favoritos en Xbox.",
        price: 25,
        stock: 10,
        image: "/img/2_3//img_juegos/fc25_2_3.jpg",
        category: "juegos"
    },
    {
        id: 2,
        title: "God of War Ragnarök (PC) Código de Steam GLOBAL",
        description: "Acompañá a Kratos y Atreus en su épica aventura nórdica. Acción brutal, historia profunda y gráficos impresionantes en God of War Ragnarök para PC.",
        price: 50,
        stock: 15,
        image: "/img/2_3//img_juegos/gowr_2_3.jpg",
        category: "juegos"
        
    },
    {
        id: 3,
        title: "HELLDIVERS 2 (PC) Código de Steam GLOBAL",
        description: "Enlistate en la lucha galáctica contra la amenaza alienígena. HELLDIVERS 2 ofrece combates cooperativos intensos y estrategia táctica.",
        price: 34,
        stock: 20,
        image: "/img/2_3//img_juegos/hd2_2_3.jpg",
        category: "juegos"
    },
    {
        id: 4,
        title: "Minecraft: Java & Bedrock Edition (PC) Official website Key GLOBAL",
        description: "Minecraft Java & Bedrock Edition para PC te da acceso a dos versiones del juego más creativo del mundo. Construí, explorá y sobreviví sin límites.",
        price: 16,
        stock: 10,
        image: "/img/2_3//img_juegos/mc_2_3.jpg",
        category: "juegos"
    },
    {
        id: 5,
        title: "Assassin’s Creed Shadows (PC) Código de Ubisoft Connect GLOBAL",
        description: "Descubrí el Japón feudal como nunca antes en Assassin's Creed Shadows. Acción, sigilo y mundo abierto en una nueva era del credo.",
        price: 60,
        stock: 5,
        image: "/img/2_3//img_juegos/acs_2_3.jpg",
        category: "juegos"
    }, 
    { 
        id: 6,
        title: "Tarjetas de Regalo Fortnite", 
        description: "Añadí V-Bucks a tu cuenta de Fortnite y desbloqueá skins, pases de batalla y más. Ideal para fans del juego.",
        price: 10, 
        stock: 30,
        image: "/img/2_3//img_tarjetas_juegos/fortnite_2_3.jpg",
        category: "monedas"

    },
    { 
        id: 7,
        title: "Ps Plus Essential 3 meses", 
        description: "Disfrutá de juegos online y una colección de títulos mensuales con PS Plus Essential por 3 meses.",
        price: 20,
        stock: 50,
        image: "/img/2_3//img_tarjetas_juegos/ps_plus_2_3.jpg" ,
        category: "regalos"
    },
    {
        id: 8, 
        title: "Tarjetas de Regalo Steam", 
        description: "Tarjeta de regalo de Steam ideal para canjear por miles de juegos y contenido digital. Código global.",
        price: 5, 
        stock: 30,
        image: "/img/2_3//img_tarjetas_juegos/regalo_steam_2_3.jpeg",
        category: "regalos"

    },
    { 
        id: 9,
        title: "Xbox Game Pass Ultimate 12 meses", 
        description: "Accedé a más de 100 juegos con Xbox Game Pass Ultimate por 12 meses. Incluye Xbox Live Gold y EA Play.",
        price: 60,
        stock: 35,
        image: "/img/2_3//img_tarjetas_juegos/regalo_xbox_2_3.webp",
        category: "regalos"

    },
    { 
        id: 10,
        title: "Tarjeta de Regalo Robux", 
        description: "Agregá Robux a tu cuenta de Roblox y desbloqueá objetos, ropa y juegos exclusivos dentro de la plataforma.",
        price: 5, 
        stock: 40,
        image: "/img/2_3//img_tarjetas_juegos/roblox_2_3.jpg" ,
        category: "monedas"

    },
    { 
        id: 11,
        title: "Tarjetas de Regalo Fortnite", 
        description: "Añadí V-Bucks a tu cuenta de Fortnite y desbloqueá skins, pases de batalla y más. Ideal para fans del juego.",
        price: 25, 
        stock: 25,
        image: "/img/2_3//img_tarjetas_juegos/fortnite_2_3.jpg",
        category: "monedas"

    },
    { 
        id: 12,
        title: "Ps Plus Essential 3 meses", 
        description: "Disfrutá de juegos online y una colección de títulos mensuales con PS Plus Essential por 3 meses.",
        price: 30, 
        image: "/img/2_3//img_tarjetas_juegos/ps_plus_2_3.jpg",
        category: "regalos"

    },
    { 
        id: 13,
        title: "Tarjetas de Regalo Steam", 
        description: "Tarjeta de regalo de Steam ideal para canjear por miles de juegos y contenido digital. Código global.",
        price: 10,
        stock: 10, 
        image: "/img/2_3//img_tarjetas_juegos/regalo_steam_2_3.jpeg",
        category: "regalos"

    },
    { 
        id: 14,
        title: "Xbox Game Pass Ultimate 12 meses", 
        description: "Accedé a más de 100 juegos con Xbox Game Pass Ultimate por 12 meses. Incluye Xbox Live Gold y EA Play.",
        price: 120,
        stock: 60, 
        image: "/img/2_3//img_tarjetas_juegos/regalo_xbox_2_3.webp", 
        category: "regalos"

    },
    { 
        id: 15,
        title: "Tarjeta de Regalo Robux", 
        description: "Agregá Robux a tu cuenta de Roblox y desbloqueá objetos, ropa y juegos exclusivos dentro de la plataforma.",
        price: 10,
        stock: 50, 
        image: "/img/2_3//img_tarjetas_juegos/roblox_2_3.jpg",
        category: "monedas"

    },
    { 
        id: 16,
        title: "Tarjetas de Regalo Fortnite", 
        description: "Añadí V-Bucks a tu cuenta de Fortnite y desbloqueá skins, pases de batalla y más. Ideal para fans del juego.",
        price: 40,
        stock: 30, 
        image: "/img/2_3//img_tarjetas_juegos/fortnite_2_3.jpg" ,
        category: "monedas"

    },
    {
        id: 17, 
        title: "Tarjeta de Regalo Robux", 
        description: "Agregá Robux a tu cuenta de Roblox y desbloqueá objetos, ropa y juegos exclusivos dentro de la plataforma.",
        price: 25,
        stock: 15, 
        image: "/img/2_3//img_tarjetas_juegos/roblox_2_3.jpg",
        category: "monedas"

    },
]
const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        }, 3000);
    });
};

const getProductById = (productId) => {
  return new Promise((resolve, reject)=> {

    setTimeout(()=> {
      const product = products.find((product)=> product.id === Number(productId) );
      resolve(product);
    }, 3000);

  });
};

export {getProducts, getProductById};