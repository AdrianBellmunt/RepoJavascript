
//Ejercicio1

/* alert("Introduce 5 numeros");
//Creamos las variables

var contador = 0;

var cantidadnum = 0;

//Creamos un bucle for para recorer hasta el 5 

for ( i = 0; i < 5; i++) {

//pedimos los numeros y en la variable cantidadnum sumamos los numeros introducidos

    var numero=parseInt(prompt("Introduce un numero:", ""));
    cantidadnum +=numero;

//Utilizamos un if para que la variable contador sume en 1 si es mayor o igual a 100

    if(numero>=100){
        contador++;
    }
    
}

//Mostramos el resultado

alert(cantidadnum);
alert(contador); */



/* //Ejercicio 2

alert("Ejercicio2")

var numeros=[7,8,2,9,10];
var suma=0;

for (i = 0; i < numeros.length; i++) {
    
    if (numeros[i]>=8) {

        suma+=numeros[i];
        
    }
}
alert(suma); */

/* //Ejercicio 3

alert("Ejercicio 3");

mes=prompt("Introduce un mes", "");

if (mes=="Enero"||mes=="Febrero"||mes=="Diciembre") {

    alert("Invierno")
    
}else if (mes=="Marzo"||mes=="Abril"||mes=="Mayo") {
    alert("Primavera");
    
}else if (mes=="Junio"||mes=="Julio"||mes=="Agosto") {
    alert("Verano")
    
}else if (mes=="Septiembre"||mes=="Octubre"||mes=="Noviembre") {
    alert("Otoño");
    
}else{

    alert("No es ningun mes")
}

 */

/* //Ejercicio 4

alert("Ejercicio 4");

var numero=parseInt(prompt("Introduce un numero:", ""));

if(numero%2==0){
    alert("es par");
}else{
    alert("es impar");
} */

/* //Ejercicio 5

alert("Ejercicio 5");

var precio=parseInt(prompt("Introduce un precio:", ""));

var iva = precio * 0.21;

var total = iva + precio;

alert("El iva es:"+ iva.toFixed(2));
alert("Precio total:"+total.toFixed(2)); */

//Ejercicio 6

alert("Ejercicio 6")

var frase = prompt("Introduce una frase:","")


document.write(" Longitud  "+ frase.length);

document.write(" Mayusculas "+ frase.toUpperCase);

document.write(" Minuscula "+ frase.toLowerCase);
