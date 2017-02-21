int cols, rows, w, h;
Cell[][] grid;
PFont font;

void setup() {
  size(600, 600);
  // pixelDensity(2);

  cols = 20; 
  rows = 20;
  w = width/cols;
  h = height/rows;

  grid = new Cell[cols][rows];
  for (int x = 0; x < cols; x++) {
    for (int y = 0; y < rows; y++) {
      if (random(1) < 0.1) grid[x][y] = new Mine(x, y);
      else grid[x][y] = new Clear(x, y);
    }
  }

  for (int x = 0; x < cols; x++) {
    for (int y = 0; y < rows; y++) {
      grid[x][y].checkMines();
    }
  }

  font = loadFont("font.vlw");
}

void draw() {
  for (int x = 0; x < cols; x++) {
    for (int y = 0; y < rows; y++) {
      grid[x][y].display();
    }
  }
}

void mousePressed() {
  grid[mouseX/w][mouseY/h].click(mouseButton);
}