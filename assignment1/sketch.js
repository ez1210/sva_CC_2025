let letters = [];
let textToShow = "HI THIS IS EUGENE WEB PORTFOLIO WELCOME I HAVE ARCHIVED FOLLOWING PIECES P5JS KALEIDOSCOPE WEAVING POINTS";
let index = 0;
let font;
let letterSpacing = 20;
let prevMouseX, prevMouseY;
let distanceAccumulated = 0;

function preload() {
  font = loadFont('./weavingpointsVF.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(32);
  fill(0);
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function draw() {
  background(255, 20);
  for (let i = 0; i < letters.length; i++) {
    let l = letters[i];
    text(l.char, l.x, l.y);
  }
}

function mouseDragged() {
  let d = dist(prevMouseX, prevMouseY, mouseX, mouseY);
  distanceAccumulated += d;


  if (distanceAccumulated >= letterSpacing) {
    let c = textToShow[index];
    letters.push({ x: mouseX, y: mouseY, char: c });
    
    index = (index + 1) % textToShow.length;


    distanceAccumulated = 0;
  }

  prevMouseX = mouseX;
  prevMouseY = mouseY;


  if (letters.length > 100) {
    letters.shift();
  }
}
