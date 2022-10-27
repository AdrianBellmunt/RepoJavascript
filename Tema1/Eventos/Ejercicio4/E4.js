
function cambiarletra(evento){
    //var evento = this.event || window.event;
    switch(evento.type) {
        case "mouseover":
            this.style.fontSize = "20pt";
            break;
        case "mouseout":
            this.style.fontSize = "10pt";
            break;
    }
}
window.onload =  function(){
    var contenido = document.getElementById("contenido");
    contenido.addEventListener("mouseover",cambiarletra);
    contenido.addEventListener("mouseout", cambiarletra);
}