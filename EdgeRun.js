var s = 4;

function setup() {
  createCanvas(1280, 960);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  strokeWeight(6);
  rect((width/2) - 50 * s,(height/2) - 37.5 * s,100 * s,75 * s);
}