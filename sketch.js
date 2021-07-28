var runner,image
var path,pathimage
function preload(){
  //pre-load images
image=loadAnimation("Runner-1.png","Runner-2.png")
pathimage=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
runner=createSprite(100,100,100,100)
runner.addAnimation("runner",image)
path=createSprite(100,100,200,200)
path.addImage(pathimage)
}

function draw() {
  background(0);
if(path.y > 400){
  path.y = height/2
}
  drawSprites()
}
