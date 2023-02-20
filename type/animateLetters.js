// Define the variable to store the graphics
let graphics;
let newGraphics;
let font;
let tilesX = 10;
let tilesY = 10;
let canvasSize = 800;
let tileW = canvasSize / tilesX;
let tileH = canvasSize / tilesY;

function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  graphics = createGraphics(canvasSize, canvasSize, P2D);
  // graphicsraphics 
  graphics.background(0);
  graphics.fill(255);
  graphics.textFont('Helvetica', 600);
  graphics.textAlign(CENTER, CENTER);
  graphics.push();
  graphics.translate(width/2, height/2-25);
  graphics.text("a", 0, 0);
  graphics.pop();
}



function draw() {
  tilesX = round(mouseX/50);
  tilesY = tilesX;
  let tileW = canvasSize / tilesX;
  let tileH = canvasSize / tilesY;
  background(0);
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let wave = round((sin(frameCount * 0.05 + ( x * y ) * 0.05) * 200));
      // let wave = round((sin(frameCount * 0.05 + ( x * y ) * 0.07) * sin(frameCount/100)*100));

      // SOURCE
      let sx = x*tileW + wave;
      let sy = y*tileH;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;
        
      // copy(graphics, sx, sy, sw, sh, dx, dy, dw, dh);
      drawingContext.drawImage(graphics.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

function keyTyped() {
  graphics.background(0);
  graphics.fill(255);
  graphics.textFont('Helvetica', 600);
  graphics.textAlign(CENTER, CENTER);
  graphics.push();
  graphics.translate(width/2, height/2-25);
  graphics.text(key, 0, 0);
  graphics.pop();
  
  return false;
}