
let productos = [
    {
        id: 0,
        imagen:"/img.png/productos.img/Imagen de WhatsApp 2023-10-10 a las 12.45.26_1d7300e9.jpg",
        nombre:"ORO ARGAN(SHAMPOO 500ML)",
        precio: 2000,
    },
    {
        id: 1,
        imagen:"D:/PP2/PP2/img.png/sombra.jpeg",
        nombre:"BIOTINA_SHAMPOO 500ML",
        precio: 2100
    }, {
        id: 2,
        imagen:"imag",
        nombre:"NUTRITIVO_SHAMPOO 500ML",
        precio: 2000
    }, {
        id: 3,
        imagen:"imag",
        nombre:"POST ALISADO_SHAMPOO 500ML",
        precio: 2100
    }, {
        id: 4,
        imagen:"imag",
        nombre:"ORO ARGAN_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 5,
        imagen:"imag",
        nombre:"BIOTINA_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 6,
        imagen:"imag",
        nombre:"PREMIUM_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 7,
        imagen:"imag",
        nombre:"NUTRICION_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 8,
        imagen:"imag",
        nombre:"KERATINA_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 9,
        imagen:"imag",
        nombre:"ORO LIQUIDO_PROTECTORES TERMICOS 250ML",
        precio: 200
    }, {
        id: 10,
        imagen:"imag",
        nombre:"DIFICIL DE CONSEGUIR_PROTECTORES TERMICOS 250ML",
        precio: 1500
    }, {
        id: 11,      
        imagen:"imag",
        nombre:"AFTER PARTY_PROTECTORES TERMICOS 250ML",
        precio: 1500
    }, {
        id: 12,
        imagen:"imag",
        nombre:",BIOTINA_LOCION 250ML",
        precio: 1800
    }, {
        id: 13,
        imagen:"imag",
        nombre:"ORO ARGAN_SHAMPOO 500ML",
        precio: 2000
    }, {
        id: 14,
        imagen:"imag",
        nombre:"BIOTINA_SHAMPOO 500ML",
        precio: 2100
    }, {
        id: 15,
        imagen:"imag",
        nombre:"NUTRITIVO_SHAMPOO 500ML",
        precio: 2000
    }, {
        id: 16,
        imagen:"imag",
        nombre:"POST ALISADO_SHAMPOO 500ML",
        precio: 2100
    }, {
        id: 17,
        imagen:"imag",
        nombre:"ORO ARGAN_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 18,
        imagen:"imag",
        nombre:"BIOTINA_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 19,
        imagen:"imag",
        nombre:"PREMIUM_ACONDICIONADOR 500ML",
        precio: 2000
    }, {
        id: 21,
        imagen:"imag",
        nombre:"NUTRICION_ACONDICIONADOR 500ML",
        precio: 2000
    },
    {
        id: 22,
        imagen:"imag",
        nombre:"KERATINA_ACONDICIONADOR 500ML",
        precio: 2000
    },
    {
        id: 23,
        imagen:"imag",
        nombre:"ORO LIQUIDO_PROTECTORES TERMICOS 250ML",
        precio: 1500
    },
    {
        id: 24,
        imagen:"imag",
        nombre:"DIFICIL DE CONSEGUIR_PROTECTORES TERMICOS 250ML",
        precio: 1500
    },
    {
        id: 25,
        imagen:"imag",
        nombre:"AFTER PARTY_PROTECTORES TERMICOS 250ML",
        precio: 1500
    },
    {
        id: 26,
        imagen:"imag",
        nombre:"BIOTINA_LOCION 250ML",
        precio: 1800
    },
]
let carrito = []
let cardList = document.getElementById("card-list")
productos.forEach(prop => {
    let card = document.createElement("div")
    card.className = "col-12 col-sm-3 mt-5"
    card.innerHTML=`<div class="card" >
    <img src="${prop.imagen}" class="card-img-top" alt="img.card">
    <div class="card-body">
      <h5 class="card-title">${prop.nombre}</h5>
      <p class="card-text">$${prop.precio}</p>
      <a href="#" id="comprar" onclick="Comprar(${productos.indexOf(prop)})" class="btn btn-primary">comprar</a>
    </div>
    <div class="card.error">
   
  </div>
  </div>
    `

 
cardList.append(card)
})
//eventos..
let btnComprar = document.getElementById("comprar")

    console.log("Excelente elección.!");

 
const comprar = (x) => {
    carrito.push(productos[x])
}
