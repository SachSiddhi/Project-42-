var issImg,sbgImg,sc1Img,sc2Img,sc3Img,sc4Img;
var iss,spacecraft;
var hasDocked = "false";

function preload(){
  issImg = loadImage("images/iss.png");
  sbgImg = loadImage("images/spacebg.jpg");
  sc1Img = loadImage("images/spacecraft1.png");
  sc2Img = loadImage("images/spacecraft2.png");
  sc3Img = loadImage("images/spacecraft3.png");
  sc4Img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  iss = createSprite(450,125);
  iss.addImage(issImg);
  iss.scale = 0.5;
  iss.setCollider("rectangle",0,0,100,50)

  spacecraft = createSprite(400,350);
  spacecraft.addImage(sc1Img);
  spacecraft.scale = 0.2;

}

function draw() {
  background(sbgImg);  

  if(!hasDocked){
    //Write code to set random x positon for the spaceCraft 
    spacecraft.x = Math.round(random(100,700));
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(sc3Img);
    spacecraft.x = spacecraft.x -5;
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(sc4Img);
    spacecraft.x = spacecraft.x +5;
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(sc2Img);
  }

  if(keyDown(UP_ARROW)){
    spacecraft.addImage(sc1Img);
    spacecraft.y = spacecraft.y -5;
  }

  if(spacecraft.isTouching(iss)){
    //hasDocked = true;
    fill("red")
    textSize(20);
    text("Docking Successful!",350,325);
  }

  drawSprites();
}

