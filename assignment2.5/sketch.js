let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let balls = []; 
let ground;

function setup() {
  createCanvas(500, 500);
  

  engine = Engine.create();
  world = engine.world;
  

  for (let i = 0; i < 15; i++) { 
    let ball = Bodies.circle(random(100, 500), random(0, 100), 20, {
      restitution: 1.0
    });
    World.add(world, ball);
    balls.push(ball);  
  }
  
 
  ground = Bodies.rectangle(250, height - 10, width, 20, {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  background(220);
  
  Engine.update(engine);
  
  
  fill(150);
  noStroke();
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ellipse(ball.position.x, ball.position.y, 40);
  }
  

  fill(70);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);
}
