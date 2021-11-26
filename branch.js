function branch(depth, len, rseed) {
  randomSeed(rseed);

  if (depth > maxDepth) {
    let leaf = new Leaf();
    leaf.display();
    return;
  }

  let rot = [];
  let scaleFactor = 0.75;

  push();
  strokeWeight(8 * Math.pow((maxDepth - depth + 1) / maxDepth, 2));
  line(0, 0, 0, -len);

  push();
  translate(0, -len);

  rot[0] = rotSlider.value() * (1 + rand2());
  rot[1] = -rotSlider.value() * (1 - rand2());
  rot[2] = rotSlider.value() / 2 + rand2();

  for (let i = 0; i < nrBranches; i++) {
    let randSeed = random(1000);
    push();
    rotate(rot[i]);
    branch(depth + 1, len * scaleFactor, randSeed);
    pop();
  }

  pop();
  pop();
}
