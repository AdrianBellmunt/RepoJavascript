$(document).ready(function() {
    $("#ejemplo_fade").hover(function(){
        $(this).find("img").fadeOut();
    }, function() {
        $(this).find("img").fadeIn();
    });
});
