//Almacena en un array los números 7,8,2,9,10. Calcular la suma de los números mayores de 8.

var suma =0;

numeros=[7,8,2,9,10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]>8) {

        suma+=numeros[i];
        
    }
}

alert("Suma de los numeros mayores de 8 es : " + suma);