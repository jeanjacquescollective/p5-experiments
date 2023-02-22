let word = "Jannexbvxvcbvcbvcbvcbvcbs";
let letters;
let lettersWithPosition = [];
// executed once
function setup() {
  createCanvas(windowWidth, windowHeight);
  letters = word.split('');
  letters.forEach((letter) => {
    // pick a random x position
    let x = random(0, width);
    // pick a random y position
    let y = random(0, height);
    // create a new Letter
    let newLetter = new Letter(letter,x ,y );
    // add a new Letter 
    lettersWithPosition.push(newLetter);
  });
}

// executed each frame
function draw() {
  textSize(map(mouseX,0,width, 10,60));
  background(255,255,255,15);
  lettersWithPosition.forEach((letter) => {
    // console.log(letter.x)
    letter.update();
  });
}

class Letter {
  constructor(character, x, y){
    this.character = character;
    this.x = x;
    this.y = y;
    this.speedY = 1;
  }

  update(){
    // this.x++;
    this.y += this.speedY;
    // if(this.x > width){
    //   this.x = random(0, width);
    // }
    if(this.y > height){
      this.speedY *= -1;
    }
    else{
      this.speedY += 0.01;
    }
    this.display();
  }

  display(){
    noFill();
    stroke(random(0,255), random(0,255), random(0,255))
    text(this.character, this.x, this.y);
  }
}
