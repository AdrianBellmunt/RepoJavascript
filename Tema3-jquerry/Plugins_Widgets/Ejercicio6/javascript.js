$(document).ready(function(){
    $("#accordion").accordion();
  });
  
  $(document).ready(function() {
    $("#btn").click((function () {
        $("#clock").desaparece();
        
    }));

    $("#btn2").click((function () {
        $("#clock").mostrar();
        
    }));
});


  jQuery.fn.desaparece = function() {
    this.each(function(){
       elem = $(this);
       elem.css("display", "none");
    });   
    return this;
 }; 
 
 jQuery.fn.mostrar = function() {
    this.each(function(){
       elem = $(this);
       elem.css("display", "block");
    });   
    return this;
 }; 

  setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    $("#clock").html(hours + ":" + minutes + ":" + seconds);
  }, 1000);
  