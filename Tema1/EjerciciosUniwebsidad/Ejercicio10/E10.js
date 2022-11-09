//Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".


window.onload= function texto()

{

var palabra=prompt("Escribe una palabra")

//pasamos a minuscula x=frase principal

var x=palabra.toLowerCase();

//convertimos en array

var y=x.split("");

//eliminamos espacios en blanco

var z="";

for (var i=0;i<y.length;i++){

if (y[i]!=""){

z=y[i];

}

}

var n=z.split("");

var m=z.split("").reverse();

for (var i=0;i<n.length;i++){

if(n[i]==m[i]){

alert("Esto es un palíndromo")

return (true);

}

else{

alert("Esto no es un palíndromo")

return(false);

}

}

}