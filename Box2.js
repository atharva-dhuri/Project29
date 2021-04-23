class Bx  {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 2
        }

        x= x;
        y= y;
        width = 30;
        height = 35;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, width, height);
        pop();
    }
}