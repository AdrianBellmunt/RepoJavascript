$(document).ready(function() {
    $('#contenido').html('<img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" alt="loading_ajax">');

        $.ajax({
            url: './fichero.php',
            type: 'GET',
        })
        .done(function (data) {
            setTimeout(function () {
                $("#contenido").fadeIn(1000).html(data);
            }, 2000)
        })
    
        .fail(function (xhr, status, error) {
            $("#contenido").html(xhr.status);
        })
    });
    