class Paper{

    constructor(x,y,radius){
        var options={
            "isStatic" : false,
            "restitution" : 0.3,
            "friction" : 0.5,
            "density" : 1.2

           }
           this.image = loadImage("paper.png"); 
           this.radius = radius;
  this.body = Bodies.circle(x,y,radius,options);
     
     World.add(world, this.body);
   
   }

display()
{
//var crcl = this.body.position;
fill("green");
image(this.image, this.body.position.x,this.body.position.y , 70, 70 );
}
}
