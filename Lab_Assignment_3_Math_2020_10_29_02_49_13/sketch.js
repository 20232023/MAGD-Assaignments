function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(244, 248, 252);
  line(0, mouseY, 100, mouseY);
}
function draw() {
  background(220);
  float(3.4);
  let x = 10;
  print('The value of x is ' / x);
  let y = 30;
  print('The value of y is ' * y);
  float(5.9);
}
function draw() {
  background(244, 248, 252);
  line(mouseX, 0, mouseX, 100);
}
function setup() {
  frameRate(10);
}

function draw() {
  background(244, 248, 252);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}
function draw() {
  background(255, 255, 255);
  fill(0);
  if (mouseY === pmouseY && mouseX === pmouseX) {
    rect(20, 20, 60, 60);
  }

  print(pmouseY + ' -> ' + mouseY);
}
function setup() {
  noStroke();
}

function draw() {
  background(204);
  let x1 = map(mouseX, 0, width, 25, 75);
  ellipse(x1, 25, 25, 25);
  let x2 = map(mouseX, 0, width, 0, 100, true);
  ellipse(x2, 75, 25, 25);
}
function setup() {
  let numArray = [2, 1, 5, 4, 8, 9];
  fill(0);
  noStroke();
  text('Array Elements', 0, 10);
  let spacing = 15;
  let elemsY = 25;
  for (let i = 0; i < numArray.length; i++) {
    text(numArray[i], i * spacing, elemsY);
  }
  let maxX = 33;
  let maxY = 80;
  textSize(32);
  text(min(numArray), maxX, maxY);
}
function setup() {
  let numArray = [2, 1, 5, 4, 8, 9];
  fill(0);
  noStroke();
  text('Array Elements', 0, 10);
  let spacing = 15;
  let elemsY = 25;
  for (let i = 0; i < numArray.length; i++) {
    text(numArray[i], i * spacing, elemsY);
  }
  let maxX = 33;
  let maxY = 80;
  textSize(32);
  text(max(numArray), maxX, maxY);
}