class Bob {
    constructor(x,y,radius){

        var options= {
            restitution:1,
            density:0.8,
            friction:0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius
        World.add(world, this.body);

    }

    display(){
        push ()
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        circle(pos.x, pos.y, this.radius*2);
        pop ()
      }

}