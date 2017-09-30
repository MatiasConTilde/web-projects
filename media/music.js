let music1 = document.getElementById('music1');
let music2 = document.getElementById('music2');
music1.addEventListener('ended', function() {
  music2.play();
});
