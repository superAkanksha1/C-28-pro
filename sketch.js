
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingshot;
var mango1, mango2, mango3;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(950,200,30);
	mango3=new mango(1050,250,30);
	mango4=new mango(1200,200,30);
	mango5=new mango(860,250,30);

	stoneObj = new Stone(230,420,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	slingshot = new SlingShot(stoneObj.body,{x:230 , y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();

  stoneObj.display();
  slingshot.display();    

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  
}


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
 function detectCollision(lstone, lmango){
	 mangoBodyPosition = lmango.body.position
	 StoneBodyPosition = lstone.body.position

	 var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	 if(distance<=lmango.r+lstone.r)
	 {
		 Matter.Body.setStatic(lmango.body, false)
	 }

 }
