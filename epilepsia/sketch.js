function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  var color = random(360);
  background(color, 100, 100, 0.75);

  for(var i = 0; i < random(50); i++){
    fill(random(360), 100, 100);
    var x = random(10, 200), y = random(10, 200);
    rect(random(width-x), random(height-y), x, y);
    if(random(1) < 0.01) text("EPILEPSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", random(width/2), random(height));
  }

  fill(color%180, 100, 100);
  textSize(64);
  textAlign(LEFT, TOP);
  text("EPILEPSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 100+random(-5, 5), 84+random(-5, 5));
  textSize(8);
  text("contento?", width-100+random(-5, 5), height-50+random(-5, 5));
}
