window.onload = function () {
    document.getElementById("p1").addEventListener('mouseover',formato,false);
    document.getElementById("p2").addEventListener('mouseover',formato,false);
    document.getElementById("p3").addEventListener('mouseover',formato,false);
    document.getElementById("p1").addEventListener('mouseleave',restablecer,false);
    document.getElementById("p2").addEventListener('mouseleave',restablecer,false);
    document.getElementById("p3").addEventListener('mouseleave',restablecer,false);
  }

 
  function formato() {
    var cambio = document.getElementById("p1").getElementsByTagName("a")[0];
    cambio.style.fontSize="20pt";
    var cambio2 = document.getElementById("p2").getElementsByTagName("a")[0];
    cambio2.style.fontSize="20pt"
    var cambio3 = document.getElementById("p3").getElementsByTagName("a")[0];
    cambio3.style.fontSize="20pt"
   }
   
   function restablecer() {
    var cambio = document.getElementById("p1").getElementsByTagName("a")[0];
    cambio.style.fontSize="12pt";
    var cambio2 = document.getElementById("p2").getElementsByTagName("a")[0];
    cambio2.style.fontSize="12pt"
    var cambio3 = document.getElementById("p3").getElementsByTagName("a")[0];
    cambio3.style.fontSize="12pt"
    }