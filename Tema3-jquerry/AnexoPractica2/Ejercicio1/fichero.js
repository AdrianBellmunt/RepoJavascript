$(document).ready(function() {
$('#boton').click(mostrarFichero);
});

function mostrarFichero() {
    $.ajax({
        url: './fichero.txt',
        type: 'GET',
    })
    .done(function (data) {
        $("#contenido").html(data);
    })

    .fail(function () {
        $("#contenido").html("Not found.");
    })
}