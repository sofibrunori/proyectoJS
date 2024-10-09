//PRODUCTOS
class Producto {
    constructor(id, imagen, nombre, descripcion, precio) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

const productos = [
    new Producto(1, 'img/producto1.jpg', 'Producto 1', 'Descripción 1', 10),
    new Producto(2, 'img/producto2.jpg', 'Producto 2', 'Descripción 2', 20),
    new Producto(3, 'img/producto3.jpg', 'Producto 3', 'Descripción 3', 30),
    new Producto(4, 'img/producto4.jpg', 'Producto 4', 'Descripción 4', 40),
    new Producto(5, 'img/producto5.jpg', 'Producto 5', 'Descripción 5', 50),
    new Producto(6, 'img/producto6.jpg', 'Producto 6', 'Descripción 6', 60),
    new Producto(7, 'img/producto7.jpg', 'Producto 7', 'Descripción 7', 70),
    new Producto(8, 'img/producto8.jpg', 'Producto 8', 'Descripción 8', 80),
    new Producto(9, 'img/producto9.jpg', 'Producto 9', 'Descripción 9', 90),
];

const productosContainer = document.getElementById('cont-productos');

productos.forEach(producto => {
    let productoHTML = `
        <div>
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
    `;
    productosContainer.innerHTML += productoHTML;
});


//INICIAR SESIÓN
let usuarioLogueado = "";

function iniciarSesion(event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value; 

    usuarioLogueado = nombre; 
    document.getElementById('mensajeLogin').textContent = "Bienvenido " + usuarioLogueado;

    document.getElementById('loginForm').reset();
}


//AGREGAR AL CARRITO
let carrito = [];

function agregarAlCarrito(productId) {
    if (usuarioLogueado) { 
        const productoSeleccionado = productos.find(producto => producto.id === productId);
        carrito.push(productoSeleccionado);
        mostrarCarrito();
    } else { 
        alert("Para agregar este producto a su carrito de compras primero debe iniciar sesión");
    }
}

function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = '';

    carrito.forEach(producto => {
        carritoContainer.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
    });
}


//COMPRAR (MOSTRAR TOTAL)
function comprar() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
        return;
    }

    let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

    document.getElementById('total').textContent = "El total es: $" + total;
}

