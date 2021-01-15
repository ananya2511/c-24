class Pig{
constructor(x,y){
  var options={
      restitution:0.5,
      density:0.2,
      friction:0.1
  }  
  this.body=Bodies.rectangle(x,y,20,20,options)
  this.width=20;
  this.height=20;
  World.add(world,this.body)
}
display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS)
    rotate(this.body.angle)
    rectMode(CENTER)
    fill("blue")
    stroke("green")
    strokeWeight(4)
    rect(0,0,this.width,this.height)
    pop()
}

}