class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.launcher1 = Constraint.create(options);
        World.add(world,launcher1);

    }

    fly(){
       this.launcher1.bodyA=null;
    }

    display(){
    if (Ball1.bodyA){
        var pointA = this.launcher1.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    }
}