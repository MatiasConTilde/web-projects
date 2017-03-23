var music1 = document.getElementById("music1");
var music2 = document.getElementById("music2");
music1.addEventListener("ended", function() {
  music2.play();
});
