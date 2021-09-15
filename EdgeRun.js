const level1 = [200,50,750,50,750,350,200,350];

function setup()
{
  createCanvas(960,480);
  background(0);
}

function draw()
{
  stroke(255);
  for (let i = 0;i < level1.length - 2;i+=2)
    {
      line(level1[i],level1[i+1],level1[i+2],level1[i+3]);
    }
  line (level1[level1.length-2],level1[level1.length-1],level1[0],level1[1]);
}
