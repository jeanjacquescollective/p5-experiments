let videoFile;

function setup(){
    createCanvas(320,240);
    videoFile = createCapture(VIDEO);
    videoFile.size(320,240);
    videoFile.hide();
    noStroke();
}

function draw(){
    background(255);
    videoFile.loadPixels();
    let stepSize = round(map(mouseX,0,windowWidth,5,60));

    for(let y = 0; y < height; y+= stepSize){
        for(let x = 0; x < width; x+= stepSize){
            const i = y * width + x;
            const darkness = (255 - videoFile.pixels[i * 4]) / 255;
            fill(videoFile.pixels[i*4+0], videoFile.pixels[i*4+1], videoFile.pixels[i*4+2], 230)
            const radius = stepSize * darkness ;
            ellipse(x,y,radius,radius)
        }
    }


}