var calculate;
var p;

function setup() {
  //createCanvas(600, 600);
  noCanvas();

  calculate.mousePressed(calc);

  p = createP("");
}

function draw() {
  //background(random(255));
}

function calc() {
  p.remove();
  p = createP(0.5 * density.value() * velocity.value() * velocity.value() * area.value() * coefficient.value());
}
