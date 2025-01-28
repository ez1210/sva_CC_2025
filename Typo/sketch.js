let font;
let points;

function preload() {
  font = loadFont('AzorathMedium.otf');
}

function setup() {
  createCanvas(800, 800);
  points = font.textToPoints('PATH', 200, 400, 300, { sampleFactor: 0.1 });
  noLoop(); // 한 번만 그리기
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  for (let i = 0; i < 6; i++) {
    rotate(TWO_PI / 6);
    drawConnections(points);
  }
}

function drawConnections(pts) {
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      stroke(0, 20);
      strokeWeight(0.5);
      line(pts[i].x - width / 2, pts[i].y - height / 2, pts[j].x - width / 2, pts[j].y - height / 2);
    }
  }
}

