let engine;
let bottleBoundary;
let ball;

function setup() {
    createCanvas(800, 800);
    engine = Matter.Engine.create();
    world = engine.world;

    let ground = Matter.Bodies.rectangle(
        width/2, height, width * 1.25, 25, {isStatic: true}
    );
    Matter.Composite.add(engine.world, ground);

    // 유리병 경계 정의
    const bottle = [
        Matter.Bodies.rectangle(30, 600, 200, 20, {isStatic: true}),
        Matter.Bodies.rectangle(30, 600, 20, 200, {isStatic: true}),
        Matter.Bodies.rectangle(230, 400, 20, 200, {isStatic: true}),
        Matter.Bodies.rectangle(30, 400, 200, 20, {isStatic: true})
    ]

    bottle.forEach(body => {
        body.render = { fillStyle: 'transparent', strokeStyle: '#0000ff', lineWidth: 3 }
    }
    );


    ball = Matter.Bodies.circle(400, 150, 20, {
        restitution: 0.6,
        friction: 0.05,
        density: 0.01
    });


    Matter.World.add(world, [...bottle, ball]);

    let mouse = Matter.Mouse.create(canvas.elt);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: { visible: false }
        }
    });
    Matter.World.add(world, mouseConstraint);


    mouseConstraint.mouse.element.addEventListener('mousedown', () => {
        if (Matter.Vertices.contains(bottle.vertices, mouseConstraint.mouse.position)) {
            Matter.Body.setStatic(bottle, false);
        }
    });

    mouseConstraint.mouse.element.addEventListener('mouseup', () => {
        Matter.Body.setStatic(bottle, true);
    });
}

function draw() {
    background(240);
    Matter.Engine.update(engine);
    bottle.forEach(body => drawVertices(body.vertices));
    drawCircle(ball.position, ball.circleRadius);
}

function drawVertices(vertices) {
    beginShape();
    for (let v of vertices) {
        vertex(v.x, v.y);
    }
    endShape(CLOSE);
}

function drawCircle(position, radius) {
    ellipse(position.x, position.y, radius * 2);
}
