let img;
let mic;

function preload(){
    img = loadImage('assets/tulip.jpg')
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    image(img, 0,0, windowWidth, windowHeight);
    mic = new p5.AudioIn();
    mic.start();
}

function draw(){
    let x1 = random(0, width);
    let y1 = random(0, height);
    // let y1 = 0;
    let x2 = x1 + random(-10,10);
    let y2 = y1 + random(-10,10);
    // let y2 = y1  ;

    let w = 150;
    let h = 50;
    //let h = height;
    let partOfImage = get(x1,y1,w,h);
    console.log(mic.getLevel())
    // partOfImage.filter(THRESHOLD, map(mic.getLevel(),0,.2,0,1))
    set(x2,y2, partOfImage)
}

function keyReleased(){
    if(key == 's') {
        saveCanvas(`artwork-${Date.now()}.png`)
    }
    if(keyCode == DELETE){
        clear();
        image(img, 0,0, windowWidth, windowHeight);
    }
}