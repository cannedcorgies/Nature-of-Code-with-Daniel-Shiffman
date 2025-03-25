// ===== CLASSES =====
class Walker {
  constructor() {

    // position
    this.x = windowWidth/2;
    this.y = windowHeight/2;

  }

  // draw the object
  show() {
    
    stroke(0);
    circle(this.x, this.y, size);

  }

  // randomly choose movement direction (right, left, down, up)
  step() {

    let xRandom = random(1);
    let yRandom = random(1);

    if (xRandom < xRightProb) {
      this.x += speed;
    } else {
      this.x -= speed;
    }
    
    if (yRandom < yDownProb) {
      this.y += speed;
    } else {
      this.y -= speed;
    }

  }

  // change object every frame
  update() {

    this.show();
    this.step();

  }

}

// ===== VARIABLES =====
let speed = 3; // veiny when low, ghostly when high!
let size = 1;
let xRightProb = 0.7;   // chance of right
let yDownProb = 0.7;
let walker;

// ===== PROGRRAM =====
function setup() {

  let canvas1 = createCanvas(windowWidth, windowWidth);
  canvas1.parent('myContainer1');
  walker = new Walker();
  background(255);
  start();

}

function start() {

  this.x = windowWidth/2;
  this.y = windowHeight/2;

}

function draw() {

  walker.update();
  if (xRightProb > 1) { xRightProb = 1; }
  if (yDownProb > 1) { yDownProb = 1; }

}
