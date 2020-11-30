var fixedrect,movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4;


function setup() {
  createCanvas(1000,1000);
  fixedrect=createSprite(600, 400, 50, 80);
  movingrect=createSprite(800,400,80,30);
  fixedrect.shapeColor="red";
  movingrect.shapeColor="yellow";

  movingrect.debug=true;
 fixedrect.debug=true;

 gameobject1=createSprite(100,100,50,50);
 gameobject1.shapeColor="lightblue";
 gameobject2=createSprite(200,100,50,50);
 gameobject2.shapeColor="lightgreen";
 gameobject3=createSprite(200,500,50,50);
 gameobject3.shapeColor="pink";
 gameobject4=createSprite(600,500,50,50);
 gameobject4.shapeColor="purple";



gameobject4.velocityX=-5;
gameobject3.velocityX=+5;


}

function draw() {
  background(0);  

movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

console.log(movingrect.x-fixedrect.x);

if (istouching(movingrect,gameobject2)){

  movingrect.shapeColor="blue";
  gameobject2.shapeColor="blue"; 


}
else {
  gameobject2.shapeColor="lightgreen";
  movingrect.shapeColor="yellow";
}
  
bounceoff(gameobject3,gameobject4);
  drawSprites();
}
