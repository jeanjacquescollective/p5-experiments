const words = []; // store word objects
function setup() {
  const canvas = createCanvas(800, 400);
  canvas.parent('canvasForHTML');
  background(0);
  const sentence = 'This page is so ineractive  fgsdfgdfg sdfsdfds';
  text(sentence, 20, 20);
  const wordArray = sentence.split(' ');

  textSize(48);

  // track word position
  let x = 20;
  let y = 60;
  // iterate over each word
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i]; // get current word
    const wordWidth = textWidth(word); // get current word width
    const wordObject = new Word(word, x, y, i);
    words.push(wordObject);
    x = x + wordWidth + textWidth(' '); // update x by word width + space character
    // look ahead the next word - will it fit in the space? if not, line break
    const nextWordWidth = textWidth(wordArray[i + 1]) || 0;
    if (x > width - nextWordWidth) {
      y += 50; // line height, sort of
      x = 20; // reset x position
    }
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i]; // retrive word object
    word.display();
  }
}

function draw() {
  background(0, 0, 0, 0.99999);
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    const word = words[i]; // retrieve word object
    word.update();
    word.display();
  }
}

function mousePressed() {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    word.spread();
  }
}

function keyPressed() {
  if (key === 'r') {
    for (let word of words) word.spread();
  } else if (key === ' ') {
    for (let word of words) word.reset();
  }
}

class Word {
  constructor(word, x, y, idx) {
    this.word = word;
    this.x = x;
    this.y = y;
    // target position is the same as current position at start
    this.tx = this.x;
    this.ty = this.y;

    this.origx = this.x;
    this.origy = this.y;
    this.idx = idx;
    this.fcolor = color(255);
  }

  spread() {
    this.tx = random(width);
    this.ty = random(height);
  }

  update() {
    // move towards the target by 10% each time
    this.x = lerp(this.x, this.tx, 0.1);
    this.y = lerp(this.y, this.ty, 0.1);
  }
  display() {
    // fill(random(255), random(255), random(255))
    fill(this.fcolor);
    noStroke();
    text(this.word, this.x, this.y);
  }

  // in Word class
  reset() {
    this.tx = this.origx;
    this.ty = this.origy;
  }
}
