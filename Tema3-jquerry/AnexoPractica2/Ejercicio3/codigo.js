$(document).ready(function() {
        $.ajax({
            url: './contenido.js',
            type: 'GET',
        })
        .done(function (data) {
            mensaje();
        })
    
        .fail(function (xhr, status, error) {
            $("#contenido").html("Error, código: " + xhr.status);
        })
    });
    