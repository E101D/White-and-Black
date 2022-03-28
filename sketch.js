var black, blackImg;
var white, whiteImg;

var form;
var gameState = "start";
var game;
var obstacleblack,obstacleBlackPositions;
var obstaclewhite,obstacleWhitePositions;


function preload(){
  blackImg = loadAnimation("./Assets/Black1.png","./Assets/Black2.png");
  whiteImg = loadAnimation("./Assets/White1.png","./Assets/White2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  black = createSprite(400,200,50,50);
  black.addAnimation("black", blackImg);
  black.scale = 0.75;

  white = createSprite(400,100,50,50);
  white.addAnimation("white", whiteImg);
  white.scale = 0.75;

  game = new Game();
  game.start();
}

function draw() {
  background("black");  
  
  if(gameState === "play"){
    game.play();
  }
}