$(document).ready(function() {
    $.getJSON("https://restcountries.com/v3.1/region/europe", function(data) {
        var paises = data;
        for (var i = 0; i < paises.length; i++) {
            $("#lista-paises").append("<li>" + paises[i].name.common + "</li>");
        }
    });
});