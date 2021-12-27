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

let snowflakes = [];

let testrs;

function setup() {
  createCanvas(windowWidth, windowHeight);

  createGUI();

  //Some setup variables
  startLength = 150;
  nrBranches = 2;
  maxWindFreq = 30000;
  randWind = 0;
  rs = random(0, 10000);
  noiseSeed(1000);

  testrs = rs;

  sliderInputs();
}

function wind() {
  if (!windEnabled) {
    return;
  }

  let time = millis();
  randomSeed(rs);

  let offset = noise(time / (maxWindFreq - windFreq)) - 0.5;
  randWind = 10 * windMag * abs(offset) * offset;
  rs = random(0, 10000); //Change random seed for next iteration

  sliderInputs();
  setTimeout(wind, 10);

  noStroke();
}

function draw() {
  background(0);

  fill(240);
  noStroke();
  testrs = random(1000);
  randomSeed(millis());
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < 5; i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  let depth = 1;
  stroke(255);
  translate(width / 2, height - 50);
  branch(depth, startLength, seed);

  //noLoop();
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

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
  this.width = 400;

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}
