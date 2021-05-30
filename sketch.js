
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(800,500,500,20);
	roof1 = new Roof(800,50,700,20);
	bob1 = new Bob(600,150,30);
	bob2 = new Bob(660,150,30);
	bob3 = new Bob(720,150,30);
	bob4 = new Bob(780,150,30);
	bob5 = new Bob(840,150,30);
	rope1 = new Rope(bob1.body,roof1.body,-100);
	rope2 = new Rope(bob2.body,roof1.body,-50);
	rope3 = new Rope(bob3.body,roof1.body,0);
	rope4 = new Rope(bob4.body,roof1.body,50);
	rope5 = new Rope(bob5.body,roof1.body,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground1.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:95,y:-95})
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-95,y:95})
	}
}



