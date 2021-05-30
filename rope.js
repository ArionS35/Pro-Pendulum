class Rope{

    constructor(a,b,z){

        var options={
        bodyA:a,
        bodyB:b,
        pointB:{x:z,y:0},
        length:255,
        //stiffness:1

        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
        this.pointB=z;
    }

    display(){
        push ()
        strokeWeight(3);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,
            this.rope.bodyB.position.x +this.pointB, this.rope.bodyB.position.y);
        pop ()
    }
}