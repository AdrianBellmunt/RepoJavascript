$(document).ready(function() {
  $("#startBtn").click(function() {
    $("#cube").css("animation-play-state", "running");
  });

  $("#stopBtn").click(function() {
    $("#cube").css("animation-play-state", "paused");
  });
});
