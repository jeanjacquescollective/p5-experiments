let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('assets/dog.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  // for (let index = 0; index < 100; index++) {
    let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x * (width / img.width), y * (height / img.height), pointillize, pointillize);
  // }
  
}

function keyPressed() {
  if(key == "s"){
    save("image"+ Date.now().valueOf() + ".png");
  }
}
