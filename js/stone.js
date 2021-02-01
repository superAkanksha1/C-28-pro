class Stone{
    constructor(x, y, r) {
        var options = {
            'isStatic': false,
            'restitution':0,
            'friction':1.0,
            'density':1.2,
            'stifness': 0.1
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("images/stone.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);

      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}
  