window.onload = function () {
    document.getElementById("form").onchange = cambiarcolor;
}

function cambiarcolor() {
    for (let index = 0; index <= document.getElementsByName('color').length; index++) {
        var opcion = document.getElementsByName('color')[index]
        if(opcion.checked == true) {
            document.getElementById('parrafo').style.backgroundColor = opcion.value
        }        
    }
}
