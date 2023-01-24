$(document).ready(function() {
 
    $("#ocultar").click(function(e){				
        $("#imagen").fadeOut(2000);		
      });
      $("#mostrar").click(function(e){				
        $("#imagen").fadeIn(2000);		
      });
      $("#animate").click(function() {
        $("#imagen").animate({
        height: "20px",
        width: "10px",
        }, 1000);
        $("#imagen").animate({
        height: "50px",
        width: "200px"
        }, 1000);
        });

    
        $("#hide").click(function(e){				
            $("#imagen").hide();		
          });
});
