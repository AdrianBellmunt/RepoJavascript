function cambiarletra(evento){
    //var evento = this.event || window.event;
    switch(evento.type) {
        case "mouseover":
            this.style.fontSize = "16pt";
            break;
        case "mouseout":
            this.style.fontSize = "12pt";
            break;
    }
}
window.onload =  function(){
    document.getElementById("contenido").onmouseover = cambiarletra;
    document.getElementById("contenido").onmouseout = cambiarletra;
}