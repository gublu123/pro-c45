class mango{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1
			}
			this.body=Bodies.rectangle(x, y, 80, 80, options)
			this.width = 80;
			this.height = 80;
		this.image=loadImage("images/mango.png")
		
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;
		var angle = this.body.angle;
		push()
		translate(pos.x, pos.y);
		// rectMode(CENTER);
		rotate(angle)
		imageMode(CENTER);
		image(this.image, 0,0,this.width, this.height)
		pop()
 }
}