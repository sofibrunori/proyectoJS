const productos = "../productos.json"

fetch(productos)
 then (response => response.json())
 then (data => console.log(data))