let resolution = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // let stepX = width / resolution;
  // let stepY = height / resolution;
  // background(255);
  // rectMode(CENTER);
  // rect(width / 2, height / 2, 20);
  // rect(width / 2 + 20, height / 2, 20);
  // rect(width / 2 - 20, height / 2, 20);
  //   for (let x = 0; x <= width  +stepX; x+=stepX) {
  //     for (let y = 0; y <= height; y+=stepX) {
  //       fill(map(x, 0, width, 0, 255));
  //       let moveX = 0
  //       if(abs(mouseX - x) < 0){
  //         moveX = 15;
  //       }
  //       // ellipse(x + moveX,y, stepX);
  //       push();
  //       translate(x,y);
  //       rotate(x);
  //       rect(0,0, stepX);
  //       pop();
  //       // switch (round(random(0,2))) {
  //       //   case 0:
  //       //     ellipse(x,y, stepX);
  //       //     break;
  //       //   case 1:
  //       //     rect(x,y, stepX);
  //       //     break;
  //       //   case 2:
  //       //     triangle(x,y, x+10,y+10, x-10,y-10);
  //       //     break;
  //       //   default:
  //       //     break;
  //       // }

  //   }
  // }
  //rectMode(CENTER);
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      rect(x, y, 10);
    }
  }
}
