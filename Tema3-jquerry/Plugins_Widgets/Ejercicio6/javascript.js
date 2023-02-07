$(document).ready(function(){
    $("#accordion").accordion();
  });
  
 

  setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    $("#clock").html(hours + ":" + minutes + ":" + seconds);
  }, 1000);
  