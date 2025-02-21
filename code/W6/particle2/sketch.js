let particleSystem;
let img;

function preload() {
    img = loadImage("../assets/cc.jpeg");
}

function setup() {
    createCanvas(400, 400);
    particleSystem = new ParticleSystem(img);
}

function draw() {
    background(0);
    particleSystem.loop();
    if(mouseIsPressed) {
        particleSystem.addParticles(mouseX, mouseY, 2);
    }
}

