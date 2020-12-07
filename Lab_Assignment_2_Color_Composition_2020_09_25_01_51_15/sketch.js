function setup() {
  createCanvas(400, 400);
  background(50);
}

function draw() {
  noStroke();
  colorMode(RGB, 100);
  for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
  stroke(i, j, 0);
  point(i, j);
  }
  }
  noStroke();
  colorMode(HSB, 50);
  for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
  stroke(i, j, 100);
  point(i, j);
  }
  }
  triangle(350, 350, 300, 300, 300, 350);
  quad(138, 131, 186, 120, 169, 163, 130, 176);
  beginShape();
  vertex(30, 220);
  vertex(85, 220);
  vertex(85, 275);
  vertex(30, 275);
  endShape(CLOSE);
}