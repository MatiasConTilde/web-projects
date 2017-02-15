var count;
var  y, v;
var music;
//var bkg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  count = width*1.25;
  y = [];
  v = [];

  for (var i = 0; i < count; i++) {
    y[i] = random(height);
    v[i] = random(1, 3);
  }

  music = loadSound("music.mp3", function(){
    music.play();
  });
  //bkg = loadImage("background.jpg");
}

function draw() {
  background(0, 0, 255);
  //image(bkg, 0, 0, width, height);
  fill(255);
  for (var i = 0; i < count; i++) {
    ellipse(width/count/2+i*width/count+sin(y[i]/50.0+i/10.0)*v[i], y[i], v[i]+1, v[i]+1.25);
    y[i] += v[i];
    y[i] %= height;
  }
  textSize(32);
  textAlign(RIGHT);
  text("© Matías con tilde 2016", width-25, height-25);
}
