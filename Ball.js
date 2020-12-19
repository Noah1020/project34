class Ball {
    constructor(x, y, radius){
        var options = {
        restitution : 0.8,
        frictionAir : 0.005,
        density : 0.04
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = radius;
        this.height = radius;
        World.add(world,this.body);
        
    
    
    }
    
    
        display(){
           var  pos = this.body.position;
           var angle = this.body.angle;
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           ellipseMode(RADIUS);
            fill(255);
            ellipse(0, 0, this.width, this.height);
            pop();
            
        }





}