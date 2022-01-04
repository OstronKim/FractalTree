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

let windFreq, windMag;
let randWind;
let maxWindFreq;

//Booleans
let windEnabled = false;

let theShader;
let shaderGraphics;

function preload() {
  theShader = loadShader("snowShader.vert", "snowShader.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Create the shader graphics "canvas"
  shaderGraphics = createGraphics(width, height, WEBGL);

  createGUI();

  //Some setup variables
  startLength = 150;
  nrBranches = 2;
  maxWindFreq = 30000;
  randWind = 0;
  rs = random(0, 10000);
  noiseSeed(1000);

  sliderInputs();
}

function wind() {
  if (!windEnabled) {
    return;
  }

  let time = millis();
  randomSeed(rs);

  let offset = noise(time / (maxWindFreq - windFreq)) - 0.5;
  randWind = windMag * abs(offset) * offset;
  rs = random(0, 10000); //Change random seed for next iteration

  sliderInputs();
  setTimeout(wind, 10);
}

function draw() {
  background(0);

  //Activate the shader
  shaderGraphics.shader(theShader);

  //Send resolution of canvas to shader
  theShader.setUniform("u_resolution", [width, height]);
  //we draw the shader on a geometry object
  shaderGraphics.rect(0, 0, width, height);
  image(shaderGraphics, 0, 0, width, height);

  let depth = 1;
  stroke(255);
  translate(width / 2, height - 50);
  branch(depth, startLength, seed);

  noLoop();
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
  windFreq = windFreqSlider.value();
  windMag = windMagSlider.value();

  //Update labels
  maxDepthLabel.html("Max depth: " + maxDepth);
  rotLabel.html("Branch angle: " + branchRot.toFixed(3));
  sizeLabel.html("size factor: " + branchSize);
  branchProbLabel.html("Branch probability: " + branchProb);
  leafSizeLabel.html("Leaf size: " + leafSize);
  rLabel.html("Red: " + leafcolor[0]);
  gLabel.html("Green: " + leafcolor[1]);
  bLabel.html("Blue: " + leafcolor[2]);
  windFreqLabel.html("Wind frequency: " + windFreq);
  windMagLabel.html("Wind Magnitude: " + windMag);

  loop();
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
