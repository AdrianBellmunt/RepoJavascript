window.onload = function(){
    var input = document.getElementById("texto");
    input.addEventListener("keypress", comprobar);
  }
  
  function comprobar(evento){
    if(isNaN(evento.key)){
      evento.preventDefault();
    }else{
    }
  }