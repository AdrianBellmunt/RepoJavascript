

$(document).ready(function () {
    $("#boton").click(function () {
        $.post("archivo.php",{nombre:"Adrian"} ,function (data) {
            $("#contenedor").html(data);
        });
    });
});