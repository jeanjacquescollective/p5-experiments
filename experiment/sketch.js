function setup() {
  // creates a canvas with the full width and full height of the window 
  createCanvas(windowWidth, windowHeight);
}

// function draw() {
//   // background(220);

//   // create a random RGB-color and make it fill the objects
//   fill(random(0,255), random(0,255), random(0,255));

//   // assign the center of the screen to xPosition and yPosition
//   const xPosition = windowWidth/2;
//   const yPosition = windowHeight/2;



//   // do something a thousand times
//   for (let index = 0; index < 1000; index++) {

//     // create a random RGB-color and make it fill the objects
//     fill(random(0,255), random(0,255), random(0,255));

//     // draw a rectangle on the center of the screen but we add some random value to it
//     rect(xPosition + random(-windowWidth/2, windowWidth/2), yPosition + random(-windowHeight/2, windowHeight/2), 5);
//   }

//     // drawing an ellipse on the center of the screen with a with of 25
//     ellipse(xPosition,yPosition,25);
 
// }

let addX = 0;

function draw(){
  // draw an ellipse on addX position with random Y-coordinate, width 50 pixels
  ellipse(addX, windowHeight/2 + sin(frameCount) * 25, 5);
  addX = addX + 5;
  if(addX > windowWidth){
    addX = 0;
  }
}