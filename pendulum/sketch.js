function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let index = 0; index < 10000; index++) {
    // stroke(random(0,255), random(0,255),random(0,255))
    ellipse(windowWidth/2+sin(index/200)*500 +cos(index/150)*100 +sin(index/145)*145, windowHeight/2 + cos(index/74)*100, 5);
  }
  for (let index = 0; index < 100000; index++) {
    // stroke(random(0,255), random(0,255),random(0,255))
    ellipse(windowWidth/2+sin(index/200)*500 , windowHeight/2 + cos(index/740)*300, 5);
  }
  for (let index = 0; index < 10000; index++) {
    // stroke(random(0,255), random(0,255),random(0,255))
    ellipse(windowWidth/2+sin(index/100)*60 +cos(index/150)*10 +sin(index/145)*145, windowHeight/2 + cos(index/74)*100, 5);
  }
  // for (let index = 0; index < 10000; index++) {
  //   // stroke(random(0,255), random(0,255),random(0,255))
  //   ellipse(windowWidth/2+sin(index/20)*50 +cos(index/150)*10 +sin(index/145)*145, windowHeight/2 + cos(index/74)*100, 5);
  // }
  stroke(0,255,0)
  for (let index = 0; index < 10000; index++) {
    // stroke(random(0,255), random(0,255),random(0,255))
    ellipse(windowWidth/2+sin(index/200)*500 +cos(index/150)*100 +sin(index/145)*145, windowHeight/2 + cos(index/74)*100, 5);
  }
}

function draw() {
  // background(220);
  // ellipse(windowWidth/2+sin(millis()/1000)*50 +sin(millis()/1000)*145, windowHeight/2 + cos(millis()/784)*100, 5);
}
