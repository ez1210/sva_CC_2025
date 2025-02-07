class Vehicle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.friction = 0.998;
    }

    applyForce(force) {
        this.acc.add(force);
        //this.acc의 복제본을 만든다. 만약 copy()가 없다면 this.acc는 update의 this.acc와 중첩되어 mult(0)이 적용된다.

    }


    

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(this.friction);
        this.acc.mult(0);
        //힘을 계속 줄 수 없으니까 한번만 loop돌고 끝내게 mult(0)
    }

    bounce() {
        if (this.pos.y > height) {
            this.pos.y = height;
            this.vel.y *= -1;
        }
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
    }


    display() {
        circle(this.pos.x, this.pos.y, 50);
    }
}