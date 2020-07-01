class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x = x;
        this.y = y;

        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

       // circleMode(CENTER);
        fill("yellow");
        circle(this.x, this.y, 50);
             
    }
    
    
}
