var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 80);
 fixedRect.shapeColor="green"
 movingRect= createSprite(600, 200, 80, 50);
 movingRect.shapeColor="blue"
}

function draw() {
  background(230, 14, 79);  
  drawSprites();
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  touch();
  
  
}

function touch() {
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }
}