var trex, trex_running, trex_collided;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  //CREAR SPRITE DEL t-rex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //agregar tamaño y posición al t-rex
  trex.scale = 0.5;
  trex.x = 50
  
  //crear sprite suelo.
 
}

function draw() {
  background(220);
  
 
  
  
  
  //Hacer saltar al t-rex con la tecla espaciadora.
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //evitar que el trex caiga
  
  drawSprites();
}
