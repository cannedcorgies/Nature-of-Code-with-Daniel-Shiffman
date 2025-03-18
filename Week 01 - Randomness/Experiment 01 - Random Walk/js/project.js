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
    point(this.x, this.y);

  }

  // randomly choose movement direction (right, left, down, up)
  step() {

    let choice = floor(random(4));

    if (choice === 0) { this.x += speed; }       // right
    else if (choice === 1) { this.x -= speed; }  // left
    else if (choice ===2) { this.y += speed; }   // down
    else { this.y -= speed; }                    // up

  }

  // change object every frame
  update() {

    this.show();
    this.step();

  }

}

// ===== VARIABLES =====
let speed = 10;
let walker;

// ===== PROGRRAM =====
function setup() {

  let canvas1 = createCanvas(windowWidth, windowWidth);
  canvas1.parent('myContainer1');
  walker = new Walker();
  background(255);

}

function draw() {

  walker.update();

}
