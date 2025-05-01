let lamps = [];
let particles = [];
let textInput;
let inputButton;
let viewButton;
let mode = 'input';
let lampImage;

function preload() {
  lampImage = loadImage('./pic/lamp.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textInput = createInput();
  textInput.id('wishInput');
  textInput.position(width / 2 - 100, height / 2 + 200);

  inputButton = createButton('make a wish');
  inputButton.id('inputButton');
  inputButton.position(width / 2 - 60, height / 2 + 300);
  inputButton.mousePressed(handleWish);

  viewButton = createButton('see all wishes');
  viewButton.id('viewButton');
  viewButton.position(width / 2 - 65, height / 2 + 400);
  viewButton.mousePressed(() => mode = 'view');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 20, 40);

  if (mode === 'input') {
    inputMode();
    inputButton.show();
    viewButton.show();

  } else if (mode === 'view') {
    viewMode();
    inputButton.hide();
    viewButton.hide();
    textInput.hide();
  }

 
}

function inputMode() {
  background(20, 20, 40);
  imageMode(CENTER);

  let scaleFactor = min(windowWidth / 1920, windowHeight / 1080);
  let lampWidth = 900 * scaleFactor;
  let lampHeight = 1300 * scaleFactor;
  image(lampImage, width / 2, height / 2 - 100, lampWidth, lampHeight);
}

function viewMode() {
  for (let lamp of lamps) {
    lamp.update();
    lamp.display();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isFinished()) {
      particles.splice(i, 1);  // Remove finished particles
    }
  }
}

function handleWish() {
  const wishText = textInput.value();

  if (wishText.trim() !== "") {
    const x = random(100, width - 100);
    const y = height + 60;
    let newLamp = new Lamp(x, y, wishText);
    lamps.push(newLamp);
    textInput.value('');

    // 폭죽 파티클 생성
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(x, y));
    }
  }
  

}
