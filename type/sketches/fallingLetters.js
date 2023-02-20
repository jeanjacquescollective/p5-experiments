// Define the variable to store the graphics
let graphics;
let newGraphics;
let font;
let tilesX = 10;
let tilesY = 10;
let canvasSize = 800;
let tileW = canvasSize / tilesX;
let tileH = canvasSize / tilesY;
let x;
let y;
let word = "Hello";
let letters;
let lettersArray = [];
function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  background(0);
  fill(255);
  textFont('Helvetica', 50);
  textAlign(CENTER, CENTER);
  x = random(0, canvasSize);
  y = 25;
  letters = word.split('');
  letters.forEach((element, index) => {
    lettersArray.push(new Letter(element, random(canvasSize/letters.length*index,canvasSize-canvasSize/letters.length*(letters.length-index)), random(0,canvasSize), index));
  });
}

function draw() {
  // background(0);
  background(0,0,0,.99999999999);
  fallingLetters();
}

function disturbingLetters() {
  for (let index = 0; index < 10; index++) {
    x = mouseX + random(-100, 100);
    y = mouseY + random(-100, 100);
    text('an disturbing text', x, y);
  }
}

function fallingLetter() {
  text('a', x, y);
  fill(255 - (y / canvasSize) * 255);
  y += 5;
  if (y >= canvasSize) {
    y = 0;
    x = random(0, canvasSize);
  }
}

function fallingLetters() {
  textSize(mouseX);
  lettersArray.forEach((element, index) => {
    element.update();
    element.display();
  });
}

class Letter {
  constructor(letter, x, y, index) {
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.index = index;
    this.fcolor = color(255);
  }

  update() {
    //this.x++;
    this.y++;
    if (this.y >= canvasSize) {
      this.y = 0;
      this.x = random(0, canvasSize);
      // random(canvasSize/letters.length*(letters.length-this.index),canvasSize-canvasSize/letters.length*(letters.length-this.index));
    }
  }
  display() {
    fill(random(255), random(255), random(255))
    // fill(this.fcolor);
    noStroke();
    text(this.letter, this.x, this.y);
  }

  // in Word class
  reset() {
    this.tx = this.origx;
    this.ty = this.origy;
  }
}
