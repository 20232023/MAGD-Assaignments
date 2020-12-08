function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(200);
  for (var i = 30; i < width + 10; i += 60) {
    var gray = int(random(0,102));
    var scalar = random(0.25,1.0);
    shape(i,100,gray,scalar);
  }
}
function shape(x,y,g,s) {
  push();
  translate(x,y);
  scale(s); //It makes it smaller or larger.
  stroke(g);
  strokeWeight(70);
  line(0,-35,0,-65);
  noStroke();
  fill(255-g);
  ellipse(-17.5,-65,35,35); //This is a shape.
  ellipse(17.5,-65,35,35);
  arc(0,-65,70,70,0,PI); //This is what it says it is. Which means an arc.
  fill(g);
  ellipse(-14,-65,8,8);
  ellipse(14,-65,8,8);
  quad(0,-58,4,-51,0,-44,-4,-51); //This is a more complicated shape.
  pop();
}