$(document).ready(function(){

    var hvalue = "";

    $("#direccion").on("submit", function (e) {   
        if($('#chkbxDireccion').is(':checked')){
            if( $("#txtind").val().length < 1 ){
                alert("El texto esta vacio");
                e.preventDefault();
            } else {
                hvalue = $('#txtdir').val();
                $('.direccion_div').val(hvalue);
            }
        } else {
            if($("#txtind").val().length < 1 ){
               alert("El texto esta vacio");
               e.preventDefault();
            } else {
                hvalue = $('.direccion_div').text();
            }
        }

        $(this).append("<input type='hidden' name='dir' value=' " + hvalue + " '/>");
    });
});