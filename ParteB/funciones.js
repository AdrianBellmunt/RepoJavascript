$(document).ready(function(){
    $("#oferta").click(function() {
        if ($(this).is(":checked")) {
        $("#contenido").show(mostrar); 
        } else {
        $("#contenido").hide(); 
        }
        });
        });

        $(document).ready(function(){
        $("#contenido").animate({'borderWidth':"20px"},1000);
        $("#contenido").animate({'font-size':"25pt"});
        });


    function mostrar() {

        $.ajax({
        type: "GET",
        url: "./fichero.txt",
        success: function (data) {
            $('#contenido').text(data)
        },
        
        });
    }

$(document).ready(function() {
    $("#Marruecos").click(function() {
    if ($(this).is(":checked")) {
    $("#resultado").show(); 
    var valorMarruecos = parseInt($("#Marruecos").val());
    var resultadoMarruecos = valorMarruecos
    $("#resultado").val(resultadoMarruecos);
    } else {
    $("#resultado").hide(); 
    }
    });
    });

    $(document).ready(function() {
        $("#India").click(function() {
        if ($(this).is(":checked")) {
        $("#resultado").show(); 
        var valorMarruecos = parseInt($("#India").val());
        var resultadoMarruecos = valorMarruecos
        $("#resultado").val(resultadoMarruecos);
        } else {
        $("#resultado").hide(); 
        }
        });
    });
