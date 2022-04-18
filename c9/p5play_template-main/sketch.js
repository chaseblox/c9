var box;

function setup() {
  createCanvas(600,600);

  box=createSprite(300,300,50,50);
  
}

function draw() 
{
  background("blue");

  if (keyDown(UP_ARROW)) {
    box.y=box.y-3;
  }
  if(keyDown(DOWN_ARROW)){
    box.y=box.y+5;
  }
  if(keyDown(RIGHT_ARROW)){
    box.x=box.x+3;
  }
  if(keyDown(LEFT_ARROW)){
    box.x=box.x-3;
  }
  drawSprites();

}




