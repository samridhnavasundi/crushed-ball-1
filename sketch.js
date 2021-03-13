
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,590,1200,15)
	box1=new Box(950,574,250,15)
	box2=new Box(825,532,15,100)
	box3=new Box(1075,532,15,100)
	ball=new Ball(75,500,30,30)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();


 
}

function keyPressed(){
	if(keyCode===32) {
		Matter.Body.applyForce(ball.body,ball.body.position,{
			x:50,y:-50
		})
	}
}


