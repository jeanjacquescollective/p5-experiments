
// setup gets executed once
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draw gets executed every frame
function draw() {
  // background(255);
  if(mouseIsPressed){
    noFill();
  let radius = map(mouseX, 0, width, 10, height);
  let circleResolution = round(map(mouseY, 0, height, 3, 80));
  // strokeWeight(mouseY /5)
  let angle = TWO_PI / circleResolution;
  
  // move to center of the screen
  translate(width/2, height/2);
  beginShape();
  for(let i = 0; i <= circleResolution; i++){
    // this is just the formula
    let x = cos( angle * i) * radius;
    let y = sin( angle * i) * radius;
    // stroke(255,0,0);
    // stroke(random(0,255), random(0,255), random(0,255));
    vertex(x, y);
  }
  endShape();
  }
}

// change canvas size on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyReleased() {
  if(key == 'r') {
    stroke(255,0,0);
  }
  if(key == 'b') {
    stroke(0,0,0);
  }
  if(key == 's') {
    saveCanvas('lovely_flower', 'png');
  }
}
