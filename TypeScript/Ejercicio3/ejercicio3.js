//Declaración de variables
var num1;
var num2;
var resultado;
//Función para calcular la suma de los números
function sumarNumeros() {
    //Obtener los valores de los campos de texto y asignarlos a las variables declaradas anteriormente 
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Calcular la suma de los números y asignar el resultado a la variable resultado 
    resultado = num1 + num2;
    //Crear un elemento <p> para mostrar el resultado 
    var elementoResultado = document.createElement("p");
    //Asignar el valor del resultado al elemento creado anteriormente 
    elementoResultado.innerText = "El resultado es " + resultado;
    //Agregar el elemento creado al documento HTML 
    document.body.appendChild(elementoResultado);
}
