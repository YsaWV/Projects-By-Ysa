let particles =[];
let a = 255;
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight)
// }

function setup() {
  //create(windowWidth, windowHeight);
  //background(a);
  let canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.position(0,0);
  //canvas.parent('sketch');
  canvas.style('z-index','-1');
  //background(120);
  frameRate(15);
  
}

function draw() {
  //dim = width / 2;
  dim = width;
 background(255);
  //colorMode(HSB, 360, 100, 100);
  //noStroke();
  //ellipseMode(RADIUS);
  //drawGradient(windowWidth/2, windowHeight/2 );
  
  //  for (let x = 0; x <= width; x += 110) {
  //   drawGradient(x, 200 );
  // }
  
  let p= new Particle();
  particles.push(p);
  for (let i=0; i<particles.length; i++){
    particles[i].update();
    particles[i].show();
    
    //p.x = mouseX;
    //p.y = mouseY;
    //p.x1=mouseX +800;
    //p.x2 =mouseX;
    //p.y1 =mouseY +500;
    
  }
 //noLoop();
  //frameRate(20);
  
}

class Particle {
  constructor(){
    this.x = windowWidth-500;
    this.y = windowHeight/2;
    this.x1 =windowWidth;
    //this.x2 =windowWidth;
    this.y1 = windowHeight;
    this.vx = random (-1,2);
    this.vy = random(-3,-1);
    this.alpha = 227;
    
    
  }
  update(){
    this.x += this.vx;
    this.x1 += this.vx;
    //this.x2 += this.vx;
    this.y += this.vy;
    this.y1 += this.vy;
    this.alpha -=0.5;
    
  }
  
  show(){
    stroke(200);
    noFill();
    arc(this.x, this.y, 50, 50, 0, HALF_PI);
    
    
    stroke(200);
    fill(255,145,180,this.alpha);
    
    ellipse(this.x,this.y, 50, 60);
    
    fill(255, 250, 84,this.alpha);
    //square(this.x1, this.y, 5);
    //translate(width / 2, height / 2);
    //rotate(PI / 3.0);
    //square(this.x1, this.y, 5);
    rotate(PI / 3.0);
    star(this.x1, this.y1, 30, 70, 7);

    
    
  }
  
  
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx/3, sy/3);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx/3, sy/3);
  }
  endShape(CLOSE);
}
  
  

