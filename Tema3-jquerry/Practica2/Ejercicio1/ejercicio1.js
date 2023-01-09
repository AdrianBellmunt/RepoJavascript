$(document).ready(function(){
$("#boton").click(mostrar);
})

function mostrar() {

    $.ajax({
    type: "GET",
    url: "./ejercicio1.txt",
    success: function (data) {
        $('#caja').text(data)
    },
    });
}