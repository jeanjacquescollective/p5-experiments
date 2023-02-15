
// setup gets executed once
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draw gets executed every frame
function draw() {
  let radius = map(mouseX, 0, width, 10, height);
  let circleResolution = map(mouseY, 0, height, 2, 80);
  // strokeWeight(mouseY /5)
  let angle = TWO_PI / circleResolution;
  // background(255);
  // move to center of the screen
  translate(width/2, height/2);
  
  for(let i = 0; i <= circleResolution; i++){
    // this is just the formula
    let x = cos( angle * i) * radius;
    let y = sin( angle * i) * radius;
    line(0,0, x, y);
  }
 
}

// change canvas size on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
