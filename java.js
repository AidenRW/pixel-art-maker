function makePixels() {
  var container = "";
  for (var i = 0; i < 1107; i++) {
    container += '<div class="pixel"></div>';
  }
  return (container);
}

let color = "black";

document.addEventListener('DOMContentLoaded', function() {
  function paintColor(event) {
    $(event.target).css("background-color", color)
    $(event.target).css("border-color", color)
    $(event.target).css("opacity", 1)
  }
  $(".pixel").click(paintColor);
})
