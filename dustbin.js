class DustBin {
    constructor(x,y,width,height){
        var options = {
            'isStctic' : true   
        }

        this.bodyb = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodyb);
        this.body1 = Bodies.rectangle((x-(width/2)),(y-height*2));
        World.add(world,this.body1);
        this.body1 = Bodies.rectangle((x-(width/2)),(y-height*2));
        World.add(world,this.body1);

        
        




        } 
        display(){
            fill("white");
           rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width)
           rect((this.bodyb.position.x-(this.bodyb.width/2)),(this.bodyb.position.y)
           rect((this.bodyb.position.x+(this.bodyb.width/2)),(this.bodyb.position.y)
       }
}