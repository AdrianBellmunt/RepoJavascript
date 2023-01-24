$(document).ready(function() {
    $("#saludo").click(function(e){				
        $("#mensaje").css("opacity", 1);
      });

      $("#despedida").click(function(e){				
        $("#mensaje").css("opacity", 0.3);
      });

});