//Background layer
var canvas0 = document.querySelector("#layer0");
var backgroundCtx = canvas0.getContext("2d");

//Sprite layer
var canvas1 = document.querySelector("#layer1");
var spriteCtx = canvas1.getContext("2d");

//Game states
var LOADING = 0;
var BUILD_MAP = 1;
var PLAYING = 2;
var OVER = 3;
var LEVEL_COMPLETE = 4;
var gameState = LOADING;

var levelPlay = false;
var currLevel = 0;

//An array to store the sprites
var sprites = [];
var assetsToLoad = [];
var assetsLoaded = 0;

/*//--- The gameWorld object
var gameWorld = 
{
  x: 0,
  y: 0,
  width: canvas0.width,
  height: canvas0.height,
};

//--- The camera object
var camera = 
{
  x: 0,
  y: 0,
  width: canvas1.width,
  height: canvas1.height,
  
  //The camera's inner scroll boundaries
  rightInnerBoundary: function()
  {
    return this.x + (this.width / 2) + (this.width / 4);
  },
  leftInnerBoundary: function()
  {
    return this.x + (this.width / 2) - (this.width / 4);
  },
  topInnerBoundary: function()
  {
    return this.y + (this.height / 2) - (this.height / 4);
  },
  bottomInnerBoundary: function()
  {
    return this.y + (this.height / 2) + (this.height / 4);
  }
};

//Center the camera over the gameWorld
camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2;
camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;*/