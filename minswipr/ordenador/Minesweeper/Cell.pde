class Cell {
  int x, y;
  int near;
  boolean clicked;
  color bkg;
  color[] colors = {color(255), color(0, 0, 255), color(0, 153, 0), color(255, 0, 0), color(0, 0, 153), color(204, 0, 0), color(0), color(204)};

  Cell(int _x, int _y) {
    x = _x;
    y = _y;
    near = 0;
    clicked = false;
    bkg = colors[0];
  }

  void display() {
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

  void checkMines() {
  }

  boolean isMine() {
    return false;
  }

  void click(int btn) {
    if (btn == RIGHT) {
      if (bkg == colors[0])      bkg = colors[5];
      else if (bkg == colors[5]) bkg = colors[0];
    }
  }
}