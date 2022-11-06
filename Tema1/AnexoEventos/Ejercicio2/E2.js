
window.onload = function(){
    var enlace = document.getElementById("enlace");
    enlace.addEventListener("click", EvitarEjecucion);
  }
      
  function EvitarEjecucion(event){
      event.preventDefault();
  }