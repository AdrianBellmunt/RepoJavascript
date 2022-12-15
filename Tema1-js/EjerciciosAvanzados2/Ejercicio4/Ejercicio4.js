

var numaleatorio = Math.round(Math.random()*10);
var numero
numero = prompt("Ingrese un numero del 1 al 10 : ");


if (numero>=0&&numero<=10) {

    if (numero==numaleatorio) {

        alert("Felicidades, el numero es igual")
        
    }else{

        alert("El numero no es igual")
    }

}else{

    alert("Introduce un numero del 1 al 10");
}