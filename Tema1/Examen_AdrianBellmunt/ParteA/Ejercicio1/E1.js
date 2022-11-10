window.onload = function () {
    document.formulario.clave.focus();
}


function validar() {
    var campo = document.getElementById("clave").value;
    if (campo=="" || !(/^[A-Z]\d{3}$/.test(campo))){
        alert("Clave incorrecta");
       
    }else{
        alert("Enviado, clave correcta");
    }
}

function focus() {
    document.formulario.clave.focus();
}