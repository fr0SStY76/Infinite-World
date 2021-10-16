//Debug Mode
var dbug = 'off';
//Variables
var p1;
var o1, o2, o3, o4, o5;

//Image Variables
var g1, g2, g3, g4, g5;
var pi, pj;

function preload(){
  g1 = loadImage("ground.png");
  g2 = loadImage("ground.png");
  g3 = loadImage("ground.png");
  g4 = loadImage("ground.png");
  g5 = loadImage("ground.png");

  pi = loadImage("playerIdle.png");
  pj = loadImage("playerjump.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //Sprites
  p1 = createSprite(500, 400, 100, 100);

  p1.addImage(pi)

  o1 = createSprite(500, 900, 600, 200);

  o2 = createSprite(-500, 800, 600, 200);
  o3 = createSprite(1500, 600, 600, 200);
  o4 = createSprite(3500, 800, 600, 200);
  o5 = createSprite(4500, 900, 600, 200);

  o1.addImage(g1);
  o2.addImage(g2);
  o3.addImage(g3);
  o4.addImage(g4);
  o5.addImage(g5);
  objectStartSize(g1);
  objectStartSize(g2);
  objectStartSize(g3);
  objectStartSize(g4);
  objectStartSize(g5);

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw(){
  background("lightblue");
  drawSprites();
  //Camera
  camera.position.y = p1.y;
  camera.position.x = p1.x;
  //Movement
  if (keyDown("a")){
    p1.x += -15;
    p1.mirrorX(-1);
  }
  if (keyDown("d")){
    p1.x += 15;
    p1.mirrorX(1);
  }
  if (keyDown("w") && (p1.collide(o1) || p1.collide(o2) || p1.collide(o3) || p1.collide(o4) || p1.collide(o5))){
    p1.velocityY = -20;
  }
  if (keyDown("w")){
    p1.addImage(pj);
  }else{
    p1.addImage(pi);
  }
  p1.velocityY += 0.8;

  //Collision
  p1.collide(o1);
  p1.collide(o2);
  p1.collide(o3);
  p1.collide(o4);
  p1.collide(o5);
  if (p1.y > 1000){
    p1.y = 100;
  }
  if (p1.velocityY > 0.4){
    p1.velocityY += 0.4;
  }

  objectGoto(o1, g1, Math.round(random(1250, 1500)), Math.round(random(200, 800)));
  objectGoto(o2, g2, Math.round(random(1250, 1500)), Math.round(random(200, 800)));
  objectGoto(o3, g3, Math.round(random(1250, 1500)), Math.round(random(200, 800)));
  objectGoto(o4, g4, Math.round(random(1250, 1500)), Math.round(random(200, 800)));
  objectGoto(o5, g5, Math.round(random(1250, 1500)), Math.round(random(200, 800)));

  if (dbug === 'on'){
    p1.debug = true;
    o1.debug = true;
    o2.debug = true;
    o3.debug = true;
    o4.debug = true;
    o5.debug = true;
  }else{
    p1.debug = false;
    o1.debug = false;
    o2.debug = false;
    o3.debug = false;
    o4.debug = false;
    o5.debug = false;
  }
}





//Libraries
function objectGoto(object, objectImg, positionX, positionY){
  if (object.x < p1.x + -1500){
    object.x = p1.x + positionX;
    object.y = positionY
    objectImg.width = Math.round(random(400, 600));
    objectImg.height = objectImg.width/2;
  }
}

function objectStartSize(objectImg){
  objectImg.width = Math.round(random(400, 600));
  objectImg.height = objectImg.width/2;
}