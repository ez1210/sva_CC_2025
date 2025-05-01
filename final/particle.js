class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // Random velocity for the explosion effect
      this.vx = random(-2, 2);
      this.vy = random(-2, 2);
      this.alpha = 255;  // Fully visible at the start
      this.size = random(5, 10);  // Particle size
      this.color = color(random(255), random(255), random(255));  // Random color for a colorful burst
    }
  
    // Update position and fade out
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 4;  // Fade out over time
    }
  
    // Display the particle
    display() {
      noStroke();
      fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);  // Apply color with alpha for fading effect
      ellipse(this.x, this.y, this.size);
    }
  
    // Check if the particle has finished (faded out)
    isFinished() {
      return this.alpha <= 0;
    }
  }
  