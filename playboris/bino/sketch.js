var input, button;

function setup() {
  noCanvas();

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(run);
}

function run() {
  for (var i = 0; i < input.value(); i++) createP(a(i));
}

function a(n){
  if (n === 0) return 1;
  else return a(n-1)*(4-2/n);
}
