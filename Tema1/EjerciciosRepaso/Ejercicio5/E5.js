//Introducir el precio de un articulo. Calcular el iva y el precio total(con el iva incluido) que debe salir redondeado a dos decimales.

var precio = parseInt(prompt("Introduce un precio: "+""));

var iva = precio * 0.21;

var preciofinal = precio + iva;

alert("Precio final: " + preciofinal.toFixed(2));