window.onload= function(){
var boton= document.getElementsByTagName("input");

for (let i = 0; i < boton.length; i++) {
    if (boton[i].type=="button") {
        boton[i].addEventListener("click",mensaje);
    }
    
}
}

function mensaje(){
    alert("Has pulsado sobre un botón");
}
