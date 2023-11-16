const productos = [



    {
    id: 1,
    imagen:"img.png/productos.img/Protectores Termicos.jpg/oroargan.jpg",
        titulo:"ORO ARGAN",
        categoria: {
        nombre:"ORO ARGAN ", 
        id:"Protectores Termicos"
        },
        precio: 2000
    },
   
    {
        id: 2,
        imagen:"img.png/productos.img/Protectores Termicos.jpg/biotina6.jpg",
  titulo:"BIOTINA",
        categoria: {
            nombre:"BIOTINA",
            id:"Protectores Termicos"
        },
        precio: 2100
    },
     
    {
        id: 3,
        imagen:"img.png/productos.img/Shampoo.jpg/shanutri.jpg",
  titulo:"NUTRITIVO",
        categoria: {
            nombre:"NUTRITIVO",
            id: "Shampoo"
        },
        precio: 2000
    }, 

    {
        id: 4,
        imagen:"img.png/productos.img/Acondicionadores.jpg/postalisado1.jpg",
  titulo:"POST ALISADO",
        categoria: {
            nombre:"POST ALISADO",
            id: "Acondicionadores"
        },
        precio: 2100
    }, 
    
    {
        id: 5,
        imagen:"img.png/productos.img/Shampoo.jpg/oroargan5.jpg",
  titulo:"ORO ARGAN",
        categoria: {
            nombre:"ORO ARGAN",
            id: "Shampoo"
        },
        precio: 2000
    }, 
    
    {
        id: 6,
        imagen:"img.png/productos.img/Protectores Termicos.jpg/biotina1.jpg",
  titulo:"BIOTINA",
        categoria: {
            nombre:"BIOTINA",
            id: "Acondicionadores"
        },
        precio: 2000
    }, 
    
    {
        id: 7,
        imagen:"img.png/productos.img/Acondicionadores.jpg/premium7.jpg",
  titulo:"PREMIUM",
        categoria: {
            nombre:"PREMIUM",
            id: "Acondicionadores"
        },
        precio: 2000
    }, 
    
    {
        id: 8,
        imagen:"img.png/productos.img/Acondicionadores.jpg/nutracond.jpg",
  titulo:"NUTRICION",
        categoria: {
            nombre:"NUTRICION",
            id: "Acondicionadores"
        },
        precio: 2000
    }, 
    
    {
        id: 9,
        imagen:"img.png/productos.img/Shampoo.jpg/kera9.jpg",
  titulo:"KERATINA",
        categoria: {
            nombre:"KERATINA",
            id: "Shampoo"
        },
        precio: 2000
    }, 
    
    {
        id: 10,
        imagen:"img.png/productos.img/Shampoo.jpg/oroliq10.jpg",
  titulo:"ORO LIQUIDO",
        categoria: {
            nombre:"ORO LIQUIDO",
            id: "Shampoo"
        },
        precio: 200
    }, 
    
    {
        id: 11,
        imagen:"img.png/productos.img/Protectores Termicos.jpg/difcons.jpg",
  titulo:"DIFICIL DE CONSEGUIR",
        categoria: {
            nombre:"DIFICIL DE CONSEGUIR",
            id:"Protectores Termicos"
        },
        precio: 1500
    }, 
    
    {
        id: 12,
        imagen:"img.png/productos.img/Protectores Termicos.jpg/afterparty.jpg",
  titulo:"AFTER PARTY",
        categoria: {
            nombre:"AFTER PARTY",
            id: "Protectores Termicos"
        },
        precio: 1500
    }, 
    
    {
        id: 13,
        imagen:"img.png/productos.img/Protectores Termicos.jpg/biotina1.jpg",
  titulo:"BIOTINA",
        categoria: {
            nombre:"BIOTINA",
            id: "Protectores Termicos"
        },
        precio: 1800
    }, 
    
    {
        id: 14,
        imagen:"img.png/productos.img/Shampoo.jpg/oroargan5.jpg",
  titulo:"ORO ARGAN",
        categoria: {
            nombre:"ORO ARGAN",
            id: "Shampoo"
        },
        precio: 2000
    },
    
    {
        id: 15,
        imagen:"img.png/productos.img/Shampoo.jpg/kera9.jpg",
  titulo:"KERATINA",
        categoria: {
            nombre:"KERATINA",
            id: "Shampoo"
        },
        precio: 2100
    }, 
    
    {
        id: 16,
        imagen:"img.png/productos.img/Acondicionadores.jpg/nutracond.jpg",
  titulo:"NUTRITIVO",
        categoria: {
            nombre:"NUTRITIVO",
            id: "Acondicionadores"
        },
        precio: 2000
    }, 
    
    {
        id: 17,
        imagen:"img.png/productos.img/Acondicionadores.jpg/postalisado1.jpg",
  titulo:"POST ALISADO",
        categoria: {
        nombre:"POST ALISADO",
            id: "Acondicionadores"
        },
        precio: 2100
    },
    
    {
        id: 18,
        imagen:"img.png/productos.img/Protectores Termicos.jpg/oroargan.jpg",
  titulo:"ORO ARGAN",
        categoria: {
            nombre:"ORO ARGAN",
            id: "Shampoo"
        },
        precio: 2000
    }, 
    
    {
        id: 19,
        imagen:"img.png/productos.img/Protectores Termicos.jpg/biotina6.jpg",
  titulo:"BIOTINA",
        categoria: {
            nombre:"BIOTINA",
            id: "Protectores Termicos"
        },
        precio: 2000
    }, 
    
    {
        id: 20,
        imagen:"img.png/productos.img/Acondicionadores.jpg/premium7.jpg",
  titulo:"PREMIUM",
        categoria: {
            nombre:"PREMIUM",
            id: "Acondicionadores"
        },
        precio: 2000
    }, 
    
    {
        id: 21,
        imagen:"C:/Users/cepal/Documents/PP2/img.png/productos.img/Acondicionadores.jpg/nutricion8.jpg",
  titulo:"NUTRICION",
        categoria: {
            nombre:"NUTRICION",
            id: "Acondicionadores"
        },
        precio: 2000
    }
]

fetch("./index.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}