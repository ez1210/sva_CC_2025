let btn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  btn = select('#my-button');
  btn.mouseClicked(onBtnClicked);

}
  
function onBtnClicked() {
  fill(random(0, 255));
}

function draw() {
  //background(220);
  circle(100, 100, 100);
  rect(100, 100, 100);
  circle(40,40, 40);
  rect(200, 100, 100);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
