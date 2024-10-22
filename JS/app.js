//GALERIA DE PRODUCTOS
class Producto {
    constructor(id, imagen, nombre, precio) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new Producto(1, '../MULTIMEDIA/vogue.jpg', 'Vogue', 3000),
    new Producto(2, '../MULTIMEDIA/weekend.jpg', 'Weekend', 2000),
    new Producto(3, '../MULTIMEDIA/vino.jpg', 'Vino', 1500),
    new Producto(4, '../MULTIMEDIA/rules.jpg', 'Rules', 4000),
    new Producto(5, '../MULTIMEDIA/new-york.jpg', 'New York', 5000),
    new Producto(6, '../MULTIMEDIA/new-york-times.jpg', 'I don´t care', 5000),
    new Producto(7, '../MULTIMEDIA/more-amore.jpg', 'More Amore', 4500),
    new Producto(8, '../MULTIMEDIA/euphoria.jpg', 'Euphoria', 3000),
    new Producto(9, '../MULTIMEDIA/angel-numbers.jpg', 'Angel Numbers', 6000),
];


const productosContainer = document.getElementById('cont-productos');
console.log ("productos", productosContainer)

if (productosContainer) {
    productos.forEach(producto => {
        let productoHTML = `
            <div class="producto" id=${producto.id}>
                <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button id="agregar-carrito" class="btn" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;
        productosContainer.innerHTML += productoHTML
    });
}



//AGREGAR AL CARRITO
const carritoContainer = document.getElementById ("carrito")
const carrito = []

const agregarAlCarrito = (productoid) => {
    const productoSeleccionado = productos.find(producto => producto.id === productoid) 
    carrito.push(productoSeleccionado)
    console.log ("carrito", carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}  

let carritoStorage = localStorage.getItem("carrito")
carritoStorage= JSON.parse(carritoStorage) || []
console.log ("carrito", carritoStorage)
let botonComprar = document.createElement('btn-comprar');

if (carritoStorage.length > 0) {
    console.log ("if mostrar carrito lleno")
    carritoStorage.forEach(producto => {
    let productoCarritoHTML = `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button id="quitar-carrito" class="btn" onclick="quitarCarrito(${producto.id})">Quitar del carrito</button>
        </div>
    `;
    carritoContainer.innerHTML += productoCarritoHTML;
    })

    const containerBtn = document.getElementById ("container-btn")
    botonComprar.innerText = 'Comprar';
    botonComprar.classList.add('btn', 'btn-comprar');
    containerBtn.appendChild(botonComprar);

} else {
    console.log ("if mostrar carrito vacio")
    let carritoVacioHTML = `
        <div class= "carrito-vacio">
            <img src="../MULTIMEDIA/carrito.jpg" alt="carrito de compras" class="img-fluid carrito-img">
            <h6 class="carrito-texto"> Aún no tienes nada en tu carrito de compras </h6>
        </div>
    `;
    carritoContainer.innerHTML = carritoVacioHTML
}

const quitarCarrito = (productoid) => {
    console.log ("carrito storage", carritoStorage)

    const carritoGetItem = localStorage.getItem("carrito")
    const prodParseado = JSON.parse(carritoGetItem)

    let carritoFiltrado = prodParseado.filter ((producto) => producto.id !== productoid)
    console.log ("carrito filtrado", carritoFiltrado)
    
    localStorage.setItem("carrito", JSON.stringify(carritoFiltrado))
}



//SUMAR TOTAL
botonComprar.addEventListener("click", () => {
    let total = 0;
    carritoStorage.forEach(producto => {
    total += producto.precio;
    });
    let mensajeTotal = document.createElement('mensaje-comprar')
    mensajeTotal.innerText = `El total es: $${total}`;
    mensajeTotal.classList.add('mensajes');
    console.log('total', mensajeTotal)
    carritoContainer.appendChild(mensajeTotal);
})

