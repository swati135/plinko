class Plinko{
    constructor(x,y){
        
        var options={
            isStatic:true,
        
        }

        this.body = Bodies.circle(x,y,10,options);
        this.r=10;
        this.color= color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        fill('white');
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}