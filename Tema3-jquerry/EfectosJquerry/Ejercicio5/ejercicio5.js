$(document).ready(function() {
    $("#contenedor").queue(function() {
      $(this).animate({ width: "550px" }, 3000);
      $("#img").animate({ width: "500px" }, 3000);
      $(this).queue(function() {
          $(this).css({ backgroundColor: "red" });
          $(this).dequeue();
        });
        setTimeout(() =>{ 
          $(this).animate({ height: "850px" }, 3000);
          $("#img").animate({ height: "800px" }, 3000);
          $(this).dequeue();
        }, 1000);
        
        // .delay(1000)
        // .animate({ height: "2000px" }, 1000);
    });
  });
  