function branch(depth, len) {
  let rot = [PI / 4, -PI / 4];
  let scaleFactor = 0.67;
  if (depth > maxDepth) {
    return;
  }

  push();
  line(0, 0, 0, -len);

  push();
  translate(0, -len);

  for (let i = 0; i < nrBranches; i++) {
    push();
    rotate(rot[i]);
    branch(depth + 1, len * scaleFactor);
    pop();
  }

  pop();
  pop();
}
