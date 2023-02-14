function calcularPrecioConIVA(precio, iva) {
    var precioConIVA = precio * (1 + iva);
    return Math.round(precioConIVA * 100) / 100;
}
var precio = parseFloat(prompt("Introduce el precio del artículo:"));
var iva = 0.21; // Suponiendo un IVA del 21%
var precioConIVA = calcularPrecioConIVA(precio, iva);
console.log("El precio del art\u00EDculo es ".concat(precio, "\u20AC"));
console.log("El precio con IVA incluido es ".concat(precioConIVA, "\u20AC"));
