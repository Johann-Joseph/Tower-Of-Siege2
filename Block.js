class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visablity=255
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<4){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
          World.remove(world,this.body)
          push();
          this.visablity= this.visablity-5;
          tint(255,this.visablity);
          pop();
        }
      }
}
