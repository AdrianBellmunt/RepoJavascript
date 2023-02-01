$(document).ready(function() {
    $("#cube").click(function() {
      $(this)
        .animate({ width: "2000px" }, 1000)
        .queue(function(next) {
          $(this).css({ backgroundColor: "red" });
          next();
        })
        .delay(1000)
        .animate({ height: "2000px" }, 1000);
    });
  });
  