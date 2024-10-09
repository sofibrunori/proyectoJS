//GALERIA DE PRODUCTOS

//function Producto (id, imagen, nombre, precio) {
 //   this.id = 1++
 //   this.imagen = imagen
 //   this.nombre = nombre
  //  this.precio = precio.parseInt()
//}

//const producto1 = new Producto (id,"Cuadro Vogue",15000)
//const producto2 = new Producto (id,"Cuadro Vogue",15000)
//const producto3 = new Producto (id,"Cuadro Vogue",15000)
//const producto4 = new Producto (id,"Cuadro Vogue",15000)
//const producto5 = new Producto (id,"Cuadro Vogue",15000)
//const producto6 = new Producto (id,"Cuadro Vogue",15000)
//const producto7 = new Producto (id,"Cuadro Vogue",15000)
//const producto8 = new Producto (id,"Cuadro Vogue",15000)
//const producto9 = new Producto (id,"Cuadro Vogue",15000)


get
const Productos = [
    {
        id: 1,
        nombre: "Cuadro",
        precio: 1000,
        desc: "Cuadro de a x b",
        img: "../MULTIMEDIA/cuadro-vogue.jpg",
    },
    {
        id: 2,
        nombre: "Cuadro",
        precio: 1000,
        desc: "Cuadro de a x b",
        img: "https://pin.it/259Jwd728",
    },
    {
        id: 3,
        nombre: "Cuadro",
        precio: 1000,
        desc: "Cuadro de a x b",
        img: "https://pin.it/259Jwd728",
    },
    {
        id: 4,
        nombre: "Cuadro",
        precio: 1000,
        desc: "Cuadro de a x b",
        img: "https://pin.it/259Jwd728",
    },
    {
        id: 5,
        nombre: "Cuadro",
        precio: 1000,
        desc: "Cuadro de a x b",
        img: "https://pin.it/259Jwd728",
    },
    {
        id: 6,
        nombre: "Cuadro",
        precio: 1000,
        desc: "Cuadro de a x b",
        img: "https://pin.it/259Jwd728",
    },
]

const contProductos = document.getElementById("cont-productos")

Productos.forEach((elm) => {

    const div = document.createElement("div")
    div.classList.add("producto")

    div.innerHTML = `
    <img src="${elm.img}">
    <hr>
    <h3>${elm.nombre}</h3>
    <p>${elm.precio}</p>
    <p>Precio: $${elm.precio}</p>
    <button>Comprar</button>
    `
    contProductos.appendChild(div)
})  

contProductos()


//INICIO DE SESION

//const inputNombre = document.getElementById("nombre de usuario")
//const inputContrasena = document.getElementById("contraseña")

//inputNombre.addEventListener("change", () => {
 //   const valor = inputNombre.value

   // if (valor.length < 3) {
   //     inputNombre.classList.add("invalido")
   //} else {
   //     inputNombre.classList.remove("invalido")
 //   })

//const form = document.getElementsByClassName("inicio-de-sesion-container")
//const usuarios = []

//form.addEventListener("submit", (e) => {

  //  e.preventDefault()

  //  const nombre = inputNombre.value
  //  const contrasena = inputContrasena.value

  //  const usuario = {
 //       nombre: nombre,
 //       contrasena: contrasena
  //  }

 //   usuarios.push(usuario)
 //   console.log(usuarios);

 //   form.reset()
//})


let usuario = "";
let contrasena = "";

document.getElementById("iniciar-sesion").addEventListener("click", function() {

  const nombreUsuario = document.getElementById("nombre-de-usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  usuario = nombreUsuario;
  contrasena = contrasena;

  document.getElementById("mensaje").textContent = "Bienvenido" + usuario;
  console.log("Nombre de usuario:", usuario);
  console.log("Contraseña:", contrasena); 
});

//AGREGAR AL CARRTIO


//COMPRAR
