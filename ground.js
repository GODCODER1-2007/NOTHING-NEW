class Ground
{

    constructor(x,y,width,height) 
    {
        var options = {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width 
        this.height = height
        World.add(world,this.body)
    }
    display(){var pos = this.body.position
 
   
    rectMode(CENTER)
    fill("purple") //sus sus sus sus
    rect(pos.x,pos.y,this.width,this.height)
   
}
}