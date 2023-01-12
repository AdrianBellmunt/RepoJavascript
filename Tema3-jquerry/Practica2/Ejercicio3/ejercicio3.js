$(document).ready(function() {
    $("#boton").click(mostrarfichero);
    });

function mostrarfichero() {
    $.get("fichero.xml", function (xml) {
        $(xml).find("blog").each(function () {
           var name = $(this).attr('name');
           var description = $(this).attr('description');
           var url = $(this).attr('url');
           var contenido = name + " " + description + " " + url + "";
           $("#contenido").html(contenido);
        });
    });
}
