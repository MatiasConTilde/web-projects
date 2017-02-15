class Clear extends Cell {
  Clear(int _x, int _y) {
    super(_x, _y);
  }

  void checkMines() {
    for (int i = max(x-1, 0); i <= min(x+1, cols-1); i++) {
      for (int j = max(y-1, 0); j <= min(y+1, rows-1); j++) {
        if (grid[i][j].isMine()) near++;
      }
    }
  }

  void click(int btn) {
    super.click(btn);
    if (btn == LEFT) {
      clicked = true;
      bkg = colors[7];
      if (near == 0) {
        for (int i = max(x-1, 0); i <= min(x+1, cols-1); i++) {
          for (int j = max(y-1, 0); j <= min(y+1, rows-1); j++) {
            if (!grid[i][j].clicked) grid[i][j].click(LEFT);
          }
        }
      }
    }
  }
}