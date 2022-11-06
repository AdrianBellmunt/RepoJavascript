window.onload = function () {
    document.formulario.nombre.focus();
}


function aficiones() {
    var x = document.getElementById("aficion").value;
    document.getElementById("texto").innerHTML = "El valor del índice seleccionado es " + x;
    document.getElementById("texto2").innerHTML = "La longitud de la lista es 3";
  }

  function myFunction() {
    document.getElementById("Observaciones").maxLength = "150";
    }