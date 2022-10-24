
window.onload = function () {
  document.getElementById("contenido").addEventListener('mouseover',formato,false);
}

function formato() {
 var cambio = document.getElementById("contenido").getElementsByTagName("p")[0];
 cambio.style.fontSize="16pt";
}