var numeros = [];
var suma = 0;
var mayoresDe100 = 0;
for (var i = 0; i < 5; i++) {
    var numero = parseInt(prompt("Introduce el n\u00FAmero ".concat(i + 1, ":")));
    numeros.push(numero);
    suma += numero;
    if (numero > 100) {
        mayoresDe100++;
    }
}
console.log("La suma de los 5 n\u00FAmeros es ".concat(suma));
console.log("".concat(mayoresDe100, " de los n\u00FAmeros introducidos son mayores de 100"));
