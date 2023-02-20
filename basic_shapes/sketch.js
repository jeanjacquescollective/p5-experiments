let squareSize = 15;
// setup gets executed once
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  // noStroke();
  frameRate(5);
}

// draw gets executed every frame
function draw() {
  background('blue');
  squareSize = map(mouseX, 0, width, 10, 30);
  for(let x = 0; x < width; x = x + squareSize)
  {
    stroke(random(0,255), random(0,255), random(0,255));
    for(let y = 0; y < height; y = y + squareSize * 1)
    {
      if(round(random(0,1)) == 1){
        fill(random(0,255), random(0,255), random(0,255));
        circle(x, y, squareSize)
      }
      else{
        noFill();
        rect(x, y + sin(x)*50, squareSize * random(.5,1));
      }
    }
  }
}

// change canvas size on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
