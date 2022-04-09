
let circleX = 55;
let circleY = 100;
let circleZ = 45;
let squareX = 100;
let squareY = 100;
let squareZ = 65;


function setup() {
  createCanvas(1000, 800);
  
}

 function mousePressed() {
    circleX = 0;
    circleY = 0;
    circleZ = 0;
    squareX = 0;
    squareY = 0;
    squareZ = 0;
    
}


function draw() {
  background(34, 43, 46);
  
  noStroke();
  fill(196, 154, 63);
  circle(circleX, 150, 100);
  fill(176, 115, 104)
  circle(circleY, 100, 90);
  fill(87, 65, 41)
  circle(circleZ, 200, 80);
  fill(98, 148, 93)
  square(squareX, 210, 100);
  fill(118, 184, 207)
  square(squareY, 40, 105, 10);
  fill(137, 125, 173)
  square(squareZ, 320, 105, 5);
 
  
  
  
  circleX = circleX +2;
  circleY = circleY +1;
  circleZ = circleZ +3;
  squareX = squareX +1;
  squareY = squareY +3;
  squareZ = squareZ +2.5;
 
  
}