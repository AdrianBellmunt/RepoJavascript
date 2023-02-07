
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