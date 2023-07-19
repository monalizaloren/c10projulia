var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
 
}

function setup() {

  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adicione dimensão e posição ao trex
 
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
}

function draw() {
  background(220);
  
  ground.velocityX = -2
  console.log(ground.x)
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //pular quando a tecla espaço for pressionada

  trex.velocityY = trex.velocityY + 0.8
  
 
 //impedir que o trex caia
  
  drawSprites();
}
