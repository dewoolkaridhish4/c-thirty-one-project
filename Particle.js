class Particle{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }
        this.r=r

        this.body=bodies.circle(x,y,this.r,option);
        this.color=color(random(0,225),random(0,225),random(0,225));
        World.add(world, this.body);

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}