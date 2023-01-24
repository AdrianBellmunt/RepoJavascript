$(document).ready(function() {
    $("#parar").click(function(){				
        mover(0,0)
      });

      $("#iniciar").click(function(){				
       mover(20,10)
      });

      function mover(x,y) {

        $("#cubo").animate({top:""+y+"%", left:""+x+"%"},{duration:3000});
        
      }

});