var velocity,
    area,
    density,
    coefficient,
    calculate;
var p;

function setup() {
  //createCanvas(600, 600);
  noCanvas();

  velocity = createSlider(1, 100, 10, 1);
  area = createSlider(1, 100, 10, 1);
  density = createSlider(1, 100, 10, 1);
  coefficient = createSlider(1, 100, 10, 1);
  calculate = createButton('calculate');
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
