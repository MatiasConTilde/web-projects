var colors = [];
var colorIndex = 0;

var circles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	switch (location.search.substring(1).toLowerCase()) {
		case 'bi':
			colors = ['#D70270', '#734F96', '#0038A8'];
			break;
		case 'pan':
			colors = ['#FF218C', '#FFD800', '#21B1FF'];
			break;
		case 'poly':
			colors = ['#F61CB9', '#07D569', '#1C92F6'];
			break;
		case 'a':
			colors = ['#000000', '#A3A3A3', '#FFFFFF', '#800080'];
			break;
		case 'trans':
			colors = ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8'];
			break;
		case 'queer':
			colors = ['#B57EDC', '#FFFFFF', '#4A8123'];
			break;
		default:
			colors = ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787'];
	}

	circles.push(new Circle(createVector(width / 2, height / 2), colorIndex));
}

function draw() {
	for (var i = 0; i < circles.length; i++) {
		if (circles[i].radius > (width + height)) {
			circles.splice(i, 1);
			continue;
		}
		circles[i].update();
		circles[i].draw();
	}
}

function mousePressed() {
	colorIndex++;
	colorIndex %= colors.length;
	circles.push(new Circle(createVector(mouseX, mouseY), colorIndex));
}

var Circle = function(pos, colorIndex) {
	this.pos = pos;
	this.radius = 1;
	this.colorIndex = colorIndex;

	this.update = function() {
		this.radius *= 1.1;
	}

	this.draw = function() {
		fill(colors[colorIndex]);
		ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
	}
}

/* Para Miguel */
