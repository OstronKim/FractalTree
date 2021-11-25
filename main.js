let tree = [];
let leaves = [];
let counter = 0;
let maxDepth;
let startLength;
let nrBranches;

let maxDepthSlider;
let generate;

function setup() {
  let cnv = createCanvas(900, 600);
  //cnv.position(200, 20);

  maxDepthSlider = createSlider(0, 10, 5);
  maxDepthSlider.position(width / 2, height + 20);

  generate = createButton("generate");
  generate.position(width / 2 - 80, height + 20);
  generate.mousePressed(grow);

  startLength = 100;
  nrBranches = 2;
}

function grow() {}

function draw() {
  background(0);

  maxDepth = maxDepthSlider.value();
  let depth = 1;
  stroke(255);
  translate(width / 2, height);
  branch(depth, startLength);
}
