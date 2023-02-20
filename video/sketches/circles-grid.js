let videoFile;

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  // videoFile = createVideo('assets/SampleVideo_1280x720_1mb.mp4');
  videoFile = createCapture(VIDEO);
  videoFile.size(320, 240);
  videoFile.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  videoFile.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - videoFile.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      fill(videoFile.pixels[i * 4 + 0], videoFile.pixels[i * 4 + 1], videoFile.pixels[i * 4 + 2]);
      ellipse(x, y, radius, radius);
    }
  }
}

function mousePressed() {
  videoFile.loop(); // set the video to loop and start playing
}
