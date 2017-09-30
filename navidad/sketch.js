let count;
let y, v;
let music;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  count = width * 1.25;
  y = [];
  v = [];

  for (let i = 0; i < count; i++) {
    y[i] = random(height);
    v[i] = random(1, 3);
  }

  music = loadSound('music.mp3', function() {
    music.play();
  });
}

function draw() {
  background(0, 0, 255);
  fill(255);

  for (let i = 0; i < count; i++) {
    ellipse(width / count / 2 + i * width / count + sin(y[i] / 50.0 + i / 10.0) * v[i], y[i], v[i] + 1, v[i] + 1.25);
    y[i] += v[i];
    y[i] %= height;
  }
}
