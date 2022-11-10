//Introducir una cadena. Decir la longitud de la cadena. Pasarla a mayúsculas y a minúsculas. Mostrar cada palabra de la cadena por separado primero normal y después al revés.

var frase = prompt("Introduce una frase: ","");

document.write("Minusculas:"+  frase.toLowerCase());
document.write(" Longitud  "+ frase.length);
document.write(" -MAYUSCULAS: "+ frase.toUpperCase());

var cadena =frase.split(" ");

document.write("<br> Cadena normal: <br>")

for (i in cadena){

    document.write(cadena[i]+"<br>");

}

document.write("<br> Cadena invertida: <br>")

for (var i = cadena.length-1; i >= 0; i--) {

    document.write(cadena[i]+"<br>");
    
}
