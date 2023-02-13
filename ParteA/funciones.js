$(document).ready(function(){

$("#img1").mouseenter(function(e){				
    $("#img1").fadeOut(2000);		
  });
  $("#img1").mouseleave(function(e){				
    $("#img1").fadeIn(2000);		
  });

});


jQuery.fn.color = function() {
  this.each(function(){
     elem = $(this);
     elem.animate({ backgroundColor: "red" }, 300);
  });   
  return this;
}; 

$(document).ready(function() {
    $("#btn").click((function () {
        $("#contenedor").color();
        
    }));
});


$('#bid').animate({
    backgroundColor : "gray",
    color : "white"
    })