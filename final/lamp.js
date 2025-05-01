class Lamp {
  constructor(x, y, wishText) {
    this.x = x;
    this.y = y;
    this.wishText = wishText;
    this.speed = random(1.5, 2.5);
    this.angle = 0;
    this.angleSpeed = random(0.01, 0.03);
  }

  update() {
    if (this.y > height / 3) {
      this.y -= this.speed;
      this.angle += this.angleSpeed;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(sin(this.angle) * 0.1);
    imageMode(CENTER);
    image(lampImage, 0, 0, 500, 800);
    pop();

    fill(50);
    noStroke();
    textSize(12);
    textAlign(CENTER);
    text(this.wishText, this.x, this.y +200);
  }
}
