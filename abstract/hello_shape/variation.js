function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  // background(255);
  if (mouseIsPressed && mouseButton == LEFT) {
    translate(width / 2, height / 2);
    let circleResolution = round(map(mouseY, 0, height, 3, 10), 0);
    let radius = mouseX - width / 2 + 0.5;
    let angle = TWO_PI / circleResolution;

    strokeWeight(100 / 200);
    beginShape();
    for (let i = 0; i <= circleResolution; i++) {
      let x = sin(angle * i) * radius;
      let y = cos(angle * i) * radius;
      vertex(x, y);
    }
    endShape();
  }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'r' || key == 'R') stroke(255,0,0);
  if (key == 'g' || key == 'G') stroke(0,255,0);
  if (key == 'b' || key == 'B') stroke(0,0,255);
}
