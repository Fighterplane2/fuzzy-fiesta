let img;
let xPos;
let xSpeed = 5;
let yPos;
let ySpeed = 3;
let imgWidth = 100;
let canvasWidth = 1000;
let imgHeight = 75;
let canvasHeight = 700;

function preload(){
  img = loadImage('./images/dvd.png');
}

function setup(){
  createCanvas(500, 300);
  xPos = random(0, canvasWidth-imgWidth);
  yPos = random(0, canvasHeight-imgHeight);
}

function draw(){
  background(255, 100, 60);
  image(img, xPos, yPos, 100, 75);
  xPos += xSpeed;
  if (xPos > 500-100|| xPos < 0){
    xSpeed = xSpeed * -1;
  }
  yPos += ySpeed;
  if (yPos > 300-75|| yPos < 0){
    ySpeed = ySpeed * -1;
  }
}