window.onload = function () {
    document.getElementById("contenido").addEventListener('mouseover',formato,false);
    document.getElementById("contenido").addEventListener('mouseleave',restablecer,false);
  }
  
  function formato() {
   var cambio = document.getElementById("contenido").getElementsByTagName("p")[0];
   cambio.style.fontSize="16pt";
  }
  
  function restablecer() {
    var cambio = document.getElementById("contenido").getElementsByTagName("p")[0];
    cambio.style.fontSize="12pt";
   }