class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = random(-2, 2);
      this.vy = random(-2, 2);
      this.alpha = 255;
      this.size = random(5, 10);  // Particle size
      this.color = color(random(255), random(255), random(255));  // Random color for a colorful burst
    }
  

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 4;
    }
  

    display() {
      noStroke();
      fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);  // Apply color with alpha for fading effect
      ellipse(this.x, this.y, this.size);
    }
  
  }
  