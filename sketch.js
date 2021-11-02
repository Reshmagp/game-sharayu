var bg, bgImg
var player, playerImg

function preload(){
bgImg = loadImage("assets/TREE.jpg")
//playerImg =  loadImage ('assets/')
//
//balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
//background image
bg = createSprite(windowWidth/2,windowHeight/2);
bg.addImage(bgImg);
bg.scale = 2.5;
bg.velocityX= -20;




}

function draw() {
  background("black")
  
        
  if (bg.x <500){
    bg.x =1400
  }
   
        drawSprites();
        
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}