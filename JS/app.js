//PRODUCTOS
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

productos.forEach(producto => {
    let productoHTML = `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button id="agregar-carrito" class="btn" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
    `;
    productosContainer.innerHTML += productoHTML;
});

