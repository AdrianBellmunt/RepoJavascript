//1. Introducir 5 números. Calcular la suma de todos ellos. Decir cuántos de ellos son mayores de 100.

var num1 = parseInt(prompt("Introduce un numero:",""));

var num2 = parseInt(prompt("Introduce un numero:",""));

var num3 = parseInt(prompt("Introduce un numero:",""));
var num4 = parseInt(prompt("Introduce un numero:",""));
var num5 = parseInt(prompt("Introduce un numero:",""));

var suma = num1 +num2 + num3 + num4 +num5;

var contador = 0;

if (num1>100) {
    contador++;
}

if (num2>100) {
    contador++;
}
if (num3>100) {
    contador++;
}
if (num4>100) {
    contador++;
}
if (num5>100) {
    contador++;
}

alert("Numeros mayores de 100: " +contador);
alert("Suma:"+suma);