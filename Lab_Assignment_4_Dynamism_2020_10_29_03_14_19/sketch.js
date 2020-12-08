function setup() {
  createCanvas(400, 400);
}
let value = 0;
function draw() {
  fill(value);
  rect(100, 100, 100, 100);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
function draw() {
  background(220, 220, 220);
  fill(0);
  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }
  print(mouseIsPressed);
}
function draw() {
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(25, 25, 50, 50);
}
let value1 = 1;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

let value2 = 200;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}