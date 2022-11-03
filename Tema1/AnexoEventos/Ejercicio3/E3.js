

window.onload=function(){

    var boton = document.getElementById("contenedor");
    var contenedor = document.getElementById("boton");

    contenedor.addEventListener("click",semantica);
    boton.addEventListener("click",texto);

}

function semantica(event) {
    with(this.parentNode.style){
        height = Math.round(Math.random() * screen.height) + 'px';
        width = Math.round(Math.random() * screen.width) + 'px';
        }
        event.stopPropagation();
}

function texto(event) {

    alert('x: '.concat(event.clientX - this.offsetLeft, '\ny: ', event.clientY - this.offsetTop));
    
}

    