let leaves = [];
let counter = 0;
let seed = 80;
let nrBranches;
let rs; //Global random seed

let startLength;
let maxDepth;
let branchRot;
let branchSize;
let randLen;
let branchProb;

let leafSize;
let leafcolor = []; //r,g,b

let randWind = 0;

//Sliders
let maxDepthSlider;
let rotSlider;
let sizeSlider;
let randLenSlider;
let branchProbSlider;

let leafSizeSlider;
let rSlider, gSlider, bSlider;

//Sliderlabels
let maxDepthLabel;
let rotLabel;
let sizeLabel;
let randLenLabel;
let branchProbLabel;

let leafSizeLabel;
let rLabel, gLabel, bLabel;

//Buttons
let windButton;

//Booleans
let windEnabled = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //sliders (Lägg i nån funktion?, typ createSLiders())
  maxDepthSlider = createSlider(0, 10, 9);
  maxDepthSlider.position(10, 20);
  //Labels i draw function antagligen
  maxDepthLabel = createSpan("Max depth: " + maxDepthSlider.value());
  maxDepthLabel.position(150, 20);

  rotSlider = createSlider(PI / 30, PI / 3, PI / 8, PI / 2 / 50);
  rotSlider.position(10, 40);
  rotLabel = createSpan("Branch angle: " + rotSlider.value().toFixed(3));
  rotLabel.position(150, 40);

  sizeSlider = createSlider(-10, 30, 10, 1);
  sizeSlider.position(10, 60);
  sizeLabel = createSpan("Size factor: " + sizeSlider.value());
  sizeLabel.position(150, 60);

  branchProbSlider = createSlider(0.87, 1, 1, 0.01);
  branchProbSlider.position(10, 80);
  sizeLabel = createSpan("Branch probability: " + branchProbSlider.value());
  sizeLabel.position(150, 80);

  leafSizeSlider = createSlider(1, 10, 6, 1);
  leafSizeSlider.position(10, 150);
  leafSizeLabel = createSpan("Leaf size: " + leafSizeSlider.value());
  leafSizeLabel.position(150, 150);

  rSlider = createSlider(0, 255, 0, 5);
  rSlider.position(10, 170);
  rLabel = createSpan("Red: " + rSlider.value());
  rLabel.position(150, 170);

  gSlider = createSlider(0, 255, 255, 5);
  gSlider.position(10, 190);
  gLabel = createSpan("Green: " + gSlider.value());
  gLabel.position(150, 190);

  bSlider = createSlider(0, 255, 100, 5);
  bSlider.position(10, 210);
  rLabel = createSpan("Blue: " + bSlider.value());
  rLabel.position(150, 210);

  // randLenSlider = createSlider(0, 1, 1, 0.01);
  // randLenSlider.position(10, 80);
  // randLenLabel = createSpan("Random length factor: " + randLenSlider.value());
  // randLenLabel.position(150, 80);

  //Buttons
  windButton = createButton("Enable wind");
  windButton.position(30, 300);
  windButton.mousePressed(function () {
    if (!windEnabled) {
      windButton.html("Disable wind");
      windEnabled = true;
      wind();
    } else {
      windButton.html("Enable wind");
      windEnabled = false;
    }
  });

  maxDepthSlider.input(sliderInputs);
  rotSlider.input(sliderInputs);
  sizeSlider.input(sliderInputs);
  branchProbSlider.input(sliderInputs);
  leafSizeSlider.input(sliderInputs);
  rSlider.input(sliderInputs);
  gSlider.input(sliderInputs);
  bSlider.input(sliderInputs);
  //randLenSlider.input(sliderInputs);

  startLength = 150;
  nrBranches = 2;
  branchProb = 0.99;
  rs = random(0, 10000);
  noiseSeed(1000); //1000

  sliderInputs();
}

function wind() {
  if (!windEnabled) {
    return;
  }

  let time = millis();
  randomSeed(rs);

  //let offset = noise(rand3()) - 0.5;

  //Ändra nummret tiden delas med för att justera vindintensiteten.
  //let offset = noise(time / 20000) - 0.5;
  let offset = noise(time / 10000) - 0.5;

  //Make the factor before a adjustable parameter. Cap wind at some value
  randWind = 2 * abs(offset) * offset;

  rs = random(0, 10000); //Change random seed for next iteration

  sliderInputs();

  setTimeout(wind, 10);
}

function sliderInputs() {
  maxDepth = maxDepthSlider.value();
  branchRot = rotSlider.value();
  branchSize = sizeSlider.value();
  branchProb = branchProbSlider.value();
  leafSize = leafSizeSlider.value();
  leafcolor[0] = rSlider.value();
  leafcolor[1] = gSlider.value();
  leafcolor[2] = bSlider.value();
  //randLen = randLenSlider.value();

  loop();
}

function draw() {
  background(0);

  let depth = 1;
  stroke(255);
  translate(width / 2, height - 50);
  branch(depth, startLength, seed);

  // if(windEnabled){
  //   loop();

  // } else {
  //   noLoop();
  // }
  // wind();

  noLoop();
}

function rand1() {
  return random(0.8, 1.2);
}
//Random float point between -1,1
function rand2() {
  return random(2) - 1;
}

// For noise()-function
//Steps of 0.005-0.03 work best for most applications, according to p5.js docs
function rand3() {
  return random(0.005, 0.03);
}

function rand4() {
  return random(0, 200);
}
