class Leaf {
  display() {
    stroke(leafcolor[0], leafcolor[1], leafcolor[2], 150);
    strokeWeight(1 + (leafSize - 2) * 0.1);
    for (let i = 0; i < 8; i++) {
      line(0, 0, leafSize, leafSize + 1);
      if (i % 2 == 0) {
        rotate((i * PI) / 4);
      } else {
        rotate(-((i * PI) / 4));
      }
    }
  }
}
