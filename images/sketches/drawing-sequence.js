let points = [];
let EPSILON = 0.001;//0.001
let density = 10;

//Angle Bridage
let mult


function preload(){//https://pbs.twimg.com/media/FBC4kAEXMAIlDLY.png
	//img = loadImage('https://pbs.twimg.com/media/FBC4jIIVgAYMa4m.png');//
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg');
  //img = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/ac/Bach_face.jpg');10*4
}


function setup() {
    //blendMode(ADD);
	createCanvas(1000, 1000);
	img.resize(canvas.width/1.1/1.8, canvas.height/1.1/1.8);//　divive like /2 if retina or..
  pg = createGraphics(1000, 1000);
  pg.image(img, 0, 0);
  pg.filter(BLUR, 10);//when larger more smoother.
  img = pg;
  image(img, 0, 0);
	background(10);//10
	angleMode(DEGREES)
	noiseDetail(1)
	
	let space = width /density;
	for (let x=0; x<width; x+= space){
		for (let y=0; y<height; y+= space){
            let particle = new Object();
			particle.pos = createVector(x + random(-10,10), y + random(-10,10));
            particle.vel = createVector(random(-3, 3), random(-3, 3));
            particle.speed = random(-1, 1)>0?2:-2;//better result if move different direction.
            particle.size = random(1, 5);
            //particle.col = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
            particle.col = color(img.get(particle.pos.x, particle.pos.y));
			points.push(particle);
		}
	}
	
	mult = random(0.002, 0.01)

}

function curl(x, y){//vortex based on image gradient.
  //Find rate of change in X direction
  let n1 = brightness(color(img.get(x + 1, y)));
  let n2 = brightness(color(img.get(x - 1, y)));
  //n1 += noise(x*mult + EPSILON, y*mult);
  //n2 += noise(x*mult - EPSILON, y*mult);

  //Average to find approximate derivative
  let a = (n1 - n2)/(2 * EPSILON);

  //Find rate of change in Y direction
  n1 = brightness(color(img.get(x, y + 1)));
  n2 = brightness(color(img.get(x, y - 1)));
  //n1 += noise(x*mult, y + EPSILON*mult); 
  //n2 += noise(x*mult, y - EPSILON*mult); 

  //Average to find approximate derivative
  let b = (n1 - n2)/(2 * EPSILON);

  return new createVector(b, -a);
}

function draw() {
  fill(0, 4);
  rect(0, 0, width, height);
	noStroke()
	//fill(255)
	
	for(let i=0; i<points.length; i++){
		
        let p = points[i];
		let c = color(img.get(p.pos.x, p.pos.y));
		
		let r = red(c);   //map(points[i].x, 0, width, r1, r2)
		let g = green(c); //map(points[i].y, 0, height, g1, g2)
		let b = blue(c);  //map(points[i].y, 0, width, b1, b2)
		let a = map(dist(width /2, height /2, p.pos.x, p.pos.y), 0, 380, 255, 0)
		//let alpha = (sin(i/318)*255)+100
        
        let pc = p.col;
        let pr = red(pc)/255.0;
        let pg = green(pc)/255.0;
        let pb = blue(pc)/255.0;
        let pa = alpha(pc)/255.0;
        
		
		//fill(fc);
		
        //curl noise version
        let cvec = curl(p.pos.x,p.pos.y);
        let cvecMag = cvec.mag();
        let vec = cvec.normalize();
      if(!mouseIsPressed){
        p.color = color(r,g,b, a*pa);
        p.col = c;
        if(cvecMag > 500){
          p.vel = (vec)
        }
        //perin noise version
        else{
        let angle = map(noise(p.pos.x * mult, p.pos.y * mult),0,1, 0, 720)
        p.vel = (createVector(cos(angle)*p.speed, sin(angle)*p.speed))
        }
      }
        p.pos.add(p.vel);
		
		if (dist(width/2, height/2, p.pos.x, p.pos.y) < 800){ 
          //let radius = pow(1-brightness(c)/255.0 ,10)*10;
          fill(p.col);
			ellipse(p.pos.x, p.pos.y, p.size*brightness(c)/255.0*4);
		}
      if(random(1000)<1){
       // p.pos = createVector(random(width), random(height));
      }
	}
}

function mouseClicked(){
	//saveCanvas('flow','png')
}