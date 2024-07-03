var map;
function preload() {
  map = loadImage("/images/mars.png");
}

function setup() { 
  createCanvas(600, 600, WEBGL);
} 

function draw() { 
    background(220);
    orbitControl();
    noStroke();
    push();
    translate(0, 0);
    texture(map);
//   ellipsoid(map.width, map.height, map.depth);
    ellipsoid();
    pop();
}