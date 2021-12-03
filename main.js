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

let randWind = 0;

//Sliders
let maxDepthSlider;
let rotSlider;
let sizeSlider;
let randLenSlider;

//Sliderlabels
let maxDepthLabel;
let rotLabel;
let sizeLabel;
let randLenLabel;

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

  sizeSlider = createSlider(-20, 20, 3, 1);
  sizeSlider.position(10, 60);
  sizeLabel = createSpan("Size factor: " + sizeSlider.value());
  sizeLabel.position(150, 60);

  randLenSlider = createSlider(0, 1, 1, 0.01);
  randLenSlider.position(10, 80);
  randLenLabel = createSpan("Random length factor: " + randLenSlider.value());
  randLenLabel.position(150, 80);

  //Buttons
  windButton = createButton("Enable wind");
  windButton.position(30, 200);
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
  randLenSlider.input(sliderInputs);

  startLength = 100;
  nrBranches = 2;
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
  randLen = randLenSlider.value();

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
  return random(-50, 50);
}
