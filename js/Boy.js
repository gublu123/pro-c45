class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/boy.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // rectMode(CENTER);
      fill("brown");
      imageMode(CENTER);
      image(this.image, 190, 575, this.width, this.height);
    //  rect(pos.x, pos.y, this.width, this.height);
    }
  }