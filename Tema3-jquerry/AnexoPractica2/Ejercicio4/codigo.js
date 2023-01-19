$(document).ready(function() {
    $("#formulario").submit(verificarUsuario);
});

function verificarUsuario(e) {
    e.preventDefault();
    var formData = $("#formulario").serialize();
    $.get("comprobar.php", formData)
    .done(function(data) {
        if (data == "usuario correcto") {
            alert("usuario correcto");
        } else {
            alert("usuario incorrecto");
        }
    })
    .fail(function(xhr, status, error) {
        alert("Error: " + xhr.status);
    });
}
