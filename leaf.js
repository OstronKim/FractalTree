function Leaf() {}

Leaf.prototype.display = function () {
  stroke(0, 255, 100, 100);
  strokeWeight(2);
  for (let i = 0; i < 8; i++) {
    line(0, 0, 3, 4);
    if (i % 2 == 0) {
      rotate((i * PI) / 4);
    } else {
      rotate(-((i * PI) / 4));
    }
  }
};
