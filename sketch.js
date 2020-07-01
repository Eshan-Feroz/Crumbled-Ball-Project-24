const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bin1, bin2, bin3;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

	bin1 = new Dustbin(870, 380, 250, 20);
    bin2 = new Dustbin(750, 350, 20, 125);
	bin3 = new Dustbin(1000, 350, 20, 125);
	
	ball = new Paper(150, 370, 50);
    
	
}

function draw(){
    background(0);
    Engine.update(engine);

    bin1.display();
	bin2.display();
	bin3.display();
	ground.display();
	ball.display();
	keypressed();
    
}
function keypressed(){
	if(keyCode = UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: -85});
	}
}