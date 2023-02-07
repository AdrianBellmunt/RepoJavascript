

jQuery.fn.color = function() {
    this.each(function(){
       elem = $(this);
       elem.animate({ color: "red" }, "slow");
    });   
    return this;
 }; 