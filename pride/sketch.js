var colors = [];
var colorIndex = 0;
var radius = 1;
var mouse;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	colors = [
		color(255, 0, 0),
		color(255, 128, 0),
		color(255, 255, 0),
		color(0, 128, 0),
		color(0, 0, 255),
		color(160, 0, 192)
	];

	mouse = createVector(width / 2, height / 2);

}

function draw() {
	fill(colors[colorIndex % colors.length]);
	radius *= 1.25;
	ellipse(mouse.x, mouse.y, radius, radius);
}

function mousePressed() {
	if (radius > sqrt(sq(width) + sq(height))) {
		mouse = createVector(mouseX, mouseY);
		radius = 1;
		colorIndex++;
	}
}

/* Para Miguel */
