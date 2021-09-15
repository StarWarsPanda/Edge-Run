const level1 = [200,50,750,50,750,350,200,350];
let keys = [false,false,false,false];

let x = 480;
let y = 240;

function setup()
{
  createCanvas(960,480);
  background(0);
}

function draw()
{
  if (keys[0])
  {
    x--;
  }
  if (keys[1])
  {
    x++;
  }
  if (keys[2])
  {
    y--;
  }
  if (keys[3])
  {
    y++;
  }
  background(0);
  push();
  stroke(255);
  strokeWeight(2);
  strokeCap(SQUARE);
  strokeJoin(MITER);
  noFill();
  beginShape();
  for (let i = 0;i < level1.length;i+=2)
    {
      vertex(level1[i],level1[i+1]);
    }
  vertex(level1[0],level1[1]-1);
  endShape();
  pop();
  push();
  noStroke();
  rect(x,y,50,50);
  pop();
}

function keyPressed()
{
  if (keyCode == LEFT_ARROW)
  {
    keys[0] = true;
  }
  if (keyCode == RIGHT_ARROW)
  {
    keys[1] = true;
  }
  if (keyCode == UP_ARROW)
  {
    keys[2] = true;
  }
  if (keyCode == DOWN_ARROW)
  {
    keys[3] = true;
  }
}

function keyReleased()
{
  if (keyCode == LEFT_ARROW)
  {
    keys[0] = false;
  }
  if (keyCode == RIGHT_ARROW)
  {
    keys[1] = false;
  }
  if (keyCode == UP_ARROW)
  {
    keys[2] = false;
  }
  if (keyCode == DOWN_ARROW)
  {
    keys[3] = false;
  }
}
