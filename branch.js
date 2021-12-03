function branch(depth, len, rseed) {
  randomSeed(rseed);

  if (depth > maxDepth) {
    let leaf = new Leaf();
    leaf.display();
    return;
  }

  let rot = [];
  let scaleFactor = 0.65;
  //let rLen = len * (1 + (2 * noise(rand4()) - 1) * randLen) + branchSize;
  let rLen = len * (1 + noise(rand4()) - 0.5) + branchSize;
  //console.log(1 + noise(rand4() - 0.5));
  push();
  strokeWeight(
    branchSize / 40 + 10 * Math.pow((maxDepth - depth + 1) / maxDepth, 2)
  );
  if (maxDepth == depth) {
    strokeWeight(
      branchSize / 40 + 3 * Math.pow((maxDepth - depth + 2) / maxDepth, 2)
    );
  }
  line(0, 0, 0, -rLen);

  push();
  translate(0, -rLen);

  rot[0] = branchRot * (1 + rand2()) + randWind;
  rot[1] = -branchRot * (1 - rand2()) + randWind;
  rot[2] = branchRot / (2 + rand2()) + randWind;

  for (let i = 0; i < nrBranches; i++) {
    let randSeed = random(1000);
    if (random() < branchProb) {
      push();
      rotate(rot[i]);
      branch(depth + 1, len * scaleFactor, randSeed);
      pop();
    }
    // let randSeed = random(1000);
    // push();
    // rotate(rot[i]);
    // branch(depth + 1, len * scaleFactor, randSeed);
    // pop();
  }

  pop();
  pop();
}
