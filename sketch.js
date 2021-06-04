
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, stone;
var world,boy, slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

  function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = new ground(600,670,1200,20)
 
  tree = new Tree(800,670,500,700)
  boy = new Boy(360,650,240,500)
  mango1 = new mango(700,200,80,80)
  mango2 = new mango(750,210,80,80)
  mango3 = new mango(870,90,80,80)
  mango4 = new mango(850,200,80,80)
  mango5 = new mango(900,250,80,80)
  mango6 = new mango(936,276,80,80)
  mango7 = new mango(650,160,80,80)
  mango8 = new mango(700,86,80,80)
  mango8 = new mango(800,68,80,80)
//mango9 = new mango(436,276,80,80)
//mango10 = new mango(436,276,80,80)
//mango11 = new mango(436,276,80,80)
  mango12 = new mango(660,286,80,80)

  stone = new Stone(148,236,80,80)
  
  slingshot = new Slingshot(stone.body,{x:114,y:435});

 	Engine.run(engine);
  
}

function draw() {

	rectMode(CENTER);
	background("yellow");
	text("x:"+mouseX+"y:"+mouseY,50,50);
	
   
	ground.display();
   
	tree.display();
	boy.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	//mango9.display();
	//mango10.display();
	//mango11.display();
	mango12.display();
	
	stone.display();
	slingshot.display();
  
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	//detectCollision(stone,mango9);
  // detectCollision(stone,mango10);
   // detectCollision(stone,mango11);
	detectCollision(stone,mango12);
	drawSprites();
	
	
  }
  
  function keyPressed(){
	if(keyCode === 32){
	 // Matter.Body.setPosition(stone.body,{x:235,y:420})
	  slingshot.attach(stone.body);
	}
  }
  
  
  function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	 stoneBodyPosition=lstone.body.position
   
	 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	 if(distance<=lmango.width/2+lstone.width/2){
	   Matter.Body.setStatic(lmango.body,false);
	 }
   }
  
  function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
  
	function mouseReleased(){
		slingshot.fly();
	}
  
