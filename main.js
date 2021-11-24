let tree = [];
let leaves = [];
let counter = 0;
let maxDepth;

let maxDepthSlider;
let generate;

function setup() {
  let cnv = createCanvas(900, 600);
  //cnv.position(200, 20);

  maxDepthSlider = createSlider(0, 7, 5);
  maxDepthSlider.position(width / 2, height + 20);

  generate = createButton("generate");
  generate.position(width / 2 - 80, height + 20);
  generate.mousePressed(grow);

  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 100);
  let root = new Branch(a, b);

  tree[0] = root;
}

function grow() {
  if (counter != maxDepth) {
    for (let i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
      }
      tree[i].finished = true;
    }
    counter++;

    if (counter == 5) {
      for (let i = 0; i < tree.length; i++) {
        if (!tree.finished) {
          let leaf = tree[i].end.copy();
          leaves.push(leaf);
        }
      }
    }
  }
}

function draw() {
  background(0);

  maxDepth = maxDepthSlider.value();

  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (let i = 0; i < leaves.length; i++) {
    fill(0, 255, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(1, 2);
    leaves[i].x += random(-1, 1);
  }
}
