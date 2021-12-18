var fixesRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixesRect = createSprite(200,200,80,30);
  fixesRect.shapeColor = "green";
  fixesRect.debug= true;
  movingRect = createSprite(400, 200, 30, 80);
  movingRect.shapeColor = "green";
  movingRect.debug= true;
}

function draw() {
  background(0,0,0);

  console.log(movingRect.x - fixesRect.x)

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixesRect.x < fixesRect.width/2 + movingRect.width/2 
    && fixesRect.x - movingRect.x < fixesRect.width/2 + movingRect.width/2
    && movingRect.y - fixesRect.y < fixesRect.height/2 + movingRect.height/2
    && fixesRect.y - movingRect.y < fixesRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixesRect.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    fixesRect.shapeColor = "green";
  }
  

  drawSprites();
}