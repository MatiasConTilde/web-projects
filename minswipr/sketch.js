var cols, rows, w, h;
var grid;

function setup() {
  size(600, 600);
  // pixelDensity(2);

  cols = 20;
  rows = 20;
  w = width/cols;
  h = height/rows;

  grid = new Cell[cols][rows];
  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      if (random(1) < 0.1) grid[x][y] = new Mine(x, y);
      else grid[x][y] = new Clear(x, y);
    }
  }

  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      grid[x][y].checkMines();
    }
  }
}

function draw() {
  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      grid[x][y].display();
    }
  }
}

function mousePressed() {
  grid[mouseX/w][mouseY/h].click(mouseButton);
}

function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.near = 0;
  this.clicked = false;
  this.bkg = colors[0];
  this.colors = {color(255), color(0, 0, 255), color(0, 153, 0), color(255, 0, 0), color(0, 0, 153), color(204, 0, 0), color(0), color(204)};

  function display() {
    fill(bkg);
    rect(x*w, y*h, w, h);

    if (clicked && near != 0) {
      textFont(font);
      textAlign(CENTER, CENTER);
      textSize(16);
      fill(colors[near]);
      text(near, x*w+w/2, y*h+h/2);
    }
  }

  function checkMines() {
  }

  function isMine() {
    return false;
  }

  function click(var btn) {
    if (btn == RIGHT) {
      if (bkg == colors[0])      bkg = colors[5];
      else if (bkg == colors[5]) bkg = colors[0];
    }
  }
}

function Clear(x, y) extends Cell {
  super(x, y);

  function checkMines() {
    for (var i = max(x-1, 0); i <= min(x+1, cols-1); i++) {
      for (var j = max(y-1, 0); j <= min(y+1, rows-1); j++) {
        if (grid[i][j].isMine()) near++;
      }
    }
  }

  function click(btn) {
    super.click(btn);
    if (btn == LEFT) {
      clicked = true;
      bkg = colors[7];
      if (near == 0) {
        for (var i = max(x-1, 0); i <= min(x+1, cols-1); i++) {
          for (var j = max(y-1, 0); j <= min(y+1, rows-1); j++) {
            if (!grid[i][j].clicked) grid[i][j].click(LEFT);
          }
        }
      }
    }
  }
}

function Mine extends Cell {
  Mine(_x, _y) {
    super(_x, _y);
  }

  var isMine() {
    return true;
  }

  function click(btn) {
    super.click(btn);
    if (btn == LEFT && bkg != colors[5]) exit();
  }
}
