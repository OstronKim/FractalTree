let leaves = [];
let counter = 0;
let seed = 80;
let maxDepth;
let startLength;
let nrBranches;

//Sliders
let maxDepthSlider;
let rotSlider;

//Sliderlabels
let maxDepthLabel;
let rotLabel;

//Buttons
let generate;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //sliders (Lägg i nån funktion?, typ createSLiders())
  maxDepthSlider = createSlider(0, 12, 9);
  maxDepthSlider.position(10, 20);
  //Labels i draw function antagligen
  maxDepthLabel = createSpan("Max depth: " + maxDepthSlider.value());
  maxDepthLabel.position(150, 20);

  rotSlider = createSlider(PI / 30, PI / 3, PI / 6, PI / 2 / 50);
  rotSlider.position(10, 40);
  rotLabel = createSpan("Branch angle: " + rotSlider.value().toFixed(3));
  rotLabel.position(150, 40);

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
  translate(width / 2, height - 50);
  branch(depth, startLength, seed);
}

function rand1() {
  return random(0.8, 1.2);
}
//Random float point between -1,1
function rand2() {
  return random(2) - 1;
}
