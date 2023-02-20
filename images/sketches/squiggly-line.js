let img;
let smallPoint, largePoint;
let canvas;
function preload() {
  img = loadImage('assets/dog.jpg');
}

function setup() {
  canvas = createCanvas(img.width, img.height);
  //imageMode(CENTER);
  let newCanvasX = (windowWidth - img.width) /2;
  let newCanvasY = (windowHeight - img.height) /2;
  canvas.position(newCanvasX, newCanvasY);
  for (let col = 0; col < img.width; col+=5) {
    for (let row = 0; row < img.height; row+=5) {
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
      noFill();
      strokeWeight(random(3));
      stroke(color(c));
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * random(90),
      random(10), random(15), cos(yPos) * sin(xPos) * random(140), cos(xPos)* sin(xPos) * 50);
      pop();
    }
  }
}

function draw() {

}

function keyPressed() {
  if(key == "s"){
    save("image"+ Date.now().valueOf() + ".png");
  }
}
