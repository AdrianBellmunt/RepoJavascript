//Ejercicio 1

function Operaciones($precio) {

    var iva = $precio*0.21;

    var total = iva + $precio;

    alert("Iva: "+iva);
    alert("Precio Total: "+total);
    
}

var precio=parseInt(prompt("Introduce un precio:", ""));

Operaciones(precio); 