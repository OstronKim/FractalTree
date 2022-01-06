//Sliders
let maxDepthSlider;
let rotSlider;
let sizeSlider;
let randLenSlider;
let branchProbSlider;

let leafSizeSlider;
let rSlider, gSlider, bSlider;

let windFreqSlider;
let windMagSlider;

let snowAmountSlider;
let snowstormFactorSlider;

//Sliderlabels
let maxDepthLabel;
let rotLabel;
let sizeLabel;
let randLenLabel;
let branchProbLabel;

let leafSizeLabel;
let rLabel, gLabel, bLabel;

let windFreqLabel, windMagLabel;

let snowAmountLabel;
let snowstormFactorLabel;

//Buttons
let windButton;
let snowButton;

function createGUI() {
  maxDepthSlider = createSlider(0, 10, 9);
  maxDepthSlider.position(10, 20);

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
  branchProbLabel = createSpan(
    "Branch probability: " + branchProbSlider.value()
  );
  branchProbLabel.position(150, 80);

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
  bLabel = createSpan("Blue: " + bSlider.value());
  bLabel.position(150, 210);

  windFreqSlider = createSlider(5000, 25000, 10000, 500);
  windFreqSlider.position(10, 300);
  windFreqLabel = createSpan("Wind frequency: " + windFreqSlider.value());
  windFreqLabel.position(150, 300);

  windMagSlider = createSlider(1, 4, 2, 0.1);
  windMagSlider.position(10, 320);
  windMagLabel = createSpan("Wind Magnitude: " + windMagSlider.value());
  windMagLabel.position(150, 320);

  snowAmountSlider = createSlider(0, 800, 200, 1);
  snowAmountSlider.position(10, 400);
  snowAmountLabel = createSpan("Snow amount: " + snowAmountSlider.value());
  snowAmountLabel.position(150, 400);

  snowstormFactorSlider = createSlider(0, 1, 0, 0.1);
  snowstormFactorSlider.position(10, 420);
  snowstormFactorLabel = createSpan(
    "Snowstorm factor: " + snowstormFactorSlider.value()
  );
  snowstormFactorLabel.position(150, 420);

  //Buttons
  windButton = createButton("Enable wind");
  windButton.position(30, 500);
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

  snowButton = createButton("Disable snow");
  snowButton.position(30, 530);
  snowButton.mousePressed(function () {
    if (!snowEnabled) {
      snowButton.html("Disable snow");
      snowEnabled = true;
    } else {
      snowButton.html("Enable snow");
      snowEnabled = false;
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
  windFreqSlider.input(sliderInputs);
  windMagSlider.input(sliderInputs);
  snowAmountSlider.input(sliderInputs);
  snowstormFactorSlider.input(sliderInputs);
}
