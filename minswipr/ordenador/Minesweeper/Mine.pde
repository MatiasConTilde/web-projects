class Mine extends Cell {
  Mine(int _x, int _y) {
    super(_x, _y);
  }

  boolean isMine() {
    return true;
  }

  void click(int btn) {
    super.click(btn);
    if (btn == LEFT && bkg != colors[5]) exit();
  }
}