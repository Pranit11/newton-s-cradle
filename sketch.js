
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,650,1200,20);
ground1 = new Ground(600,100,1200,20);
bob1 = new bob(200,500,20,20);
bob2 = new bob(300,500,20,20);
bob3 = new bob(400,500,20,20);
bob4 = new bob(500,500,20,20);
bob5 = new bob(600,500,20,20);

	//Engine.run(engine);
  
}


function draw() {
  background("pink");
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  ground1.display()
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



