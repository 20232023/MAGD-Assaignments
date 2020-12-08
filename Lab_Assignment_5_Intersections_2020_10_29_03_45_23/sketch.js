let button;
function setup() {
  createCanvas(400, 400);
  background(0);
  button = createButton('Rectangle');
  button.position(10, 30);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);
}