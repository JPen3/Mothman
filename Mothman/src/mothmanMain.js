//Create the player sprite and center it
//var player = Object.create(spriteObject);
var player = Object.create(playerObject);
player.x = canvas1.width/2;
player.y = canvas1.height/2;
sprites.push(player);

var enemy = Object.create(enemyObject);
enemy.x = 0;
enemy.y = 0;
sprites.push(enemy);

//Load the images
var bg = new Image();
bg.addEventListener("load", loadHandler, false);
bg.src = "../images/background.png";
assetsToLoad.push(bg);

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "../images/mothman.png";
assetsToLoad.push(image);

var owl = new Image();
owl.addEventListener("load", loadHandler, false);
owl.src = "../images/owlman.png";
assetsToLoad.push(owl);

var levels = [
	{"background":bg}
];

//Keyboard listeners for player (Doctor Doctor)
window.addEventListener("keydown", player.keydownHandler, false);
window.addEventListener("keyup", player.keyupHandler, false);

function loadHandler()
{ 
    assetsLoaded++;
  	if(assetsLoaded === assetsToLoad.length)
  	{
    	gameState = BUILD_MAP;
		update();
  	}
}

//Start the game animation loop
update();

function update()
{ 
  //The animation loop
  requestAnimationFrame(update, canvas1);
  
  //Change what the game is doing based on the game state
  switch(gameState)
  {
    case LOADING:
      console.log("loading...");
      break;
      
    case BUILD_MAP:
      buildLevel();
      gameState = PLAYING;
      break;
    
    case PLAYING:
      playGame();
      break;
      
    case LEVEL_COMPLETE:
      levelComplete();
      break;
    
    case OVER:
      endGame();
      break;
  }
  
  //Render the game
  render();
}

function buildLevel()
{	
	backgroundCtx.clearRect(0, 0, canvas0.width, canvas0.height);
	spriteCtx.clearRect(0, 0, canvas1.width, canvas1.height);
		
	backgroundCtx.drawImage(levels[currLevel].background, 0, 0);
	//spriteCtx.drawImage(levels[currLevel].background, 0, 0);
	
	gameState = PLAYING;
	
}

function playGame()
{
	player.update();
	moveBackground();

	/*//Scroll the camera
	if(player.x < camera.leftInnerBoundary())
	{
		camera.x = Math.floor(player.x - (camera.width / 4));
	}
	if(player.y < camera.topInnerBoundary())
	{
		camera.y = Math.floor(player.y - (camera.height / 4));
	}
	if(player.x + player.width > camera.rightInnerBoundary())
	{
		camera.x = Math.floor(player.x + player.width - (camera.width / 4 * 3));
	}
	if(player.y + player.height > camera.bottomInnerBoundary())
	{
		camera.y = Math.floor(player.y + player.height - (camera.height / 4 * 3));
	}

	//The camera's gameWorld boundaries
	if(camera.x < gameWorld.x)
	{
		camera.x = gameWorld.x;
	}
	if(camera.y < gameWorld.y)
	{
		camera.y = gameWorld.y;
	}
	if(camera.x + camera.width > gameWorld.x + gameWorld.width)
	{
		camera.x = gameWorld.x + gameWorld.width - camera.width;
	}
	if(camera.y + camera.height > gameWorld.height)
	{
		camera.y = gameWorld.height - camera.height;
	}*/
	
	//Render the sprite
	render();
}

var bgDrawX1 = 0;
var bgDrawX2 = 1280;

function moveBackground()
{
	bgDrawX1 -= 5;
	bgDrawX2 -= 5;
	if (bgDrawX1 <= -1280)
	{
		bgDrawX1 = 1280;
	}
	else if (bgDrawX2 <= -1280)
	{
		bgDrawX2 = 1280;
	}
	drawBg();
}

function drawBg()
{
	backgroundCtx.clearRect(0, 0, canvas0.width, canvas0.height);
	backgroundCtx.drawImage(bg, 0, 0, 1280, canvas0.height, bgDrawX1, 0, 1280, canvas0.height);
	backgroundCtx.drawImage(bg, 0, 0, 1280, canvas0.height, bgDrawX2, 0, 1280, canvas0.height);
}


function render()
{ 
  //Clear the previous animation frame
  spriteCtx.clearRect(0, 0, canvas1.width, canvas1.height);
  
  spriteCtx.save();
  //spriteCtx.translate(-camera.x, -camera.y);
  
  //Loop through all the sprites and use 
  //their properties to display them
  if(sprites.length !== 0)
  {
    for(var i = 0; i < sprites.length; i++)
    {
      var sprite = sprites[i];
	  if(sprite.spriteType == 0)
	  {
		  spriteCtx.drawImage
		  (
			image, 
			sprite.sourceX, sprite.sourceY, 
			sprite.sourceWidth, sprite.sourceHeight,
			Math.floor(sprite.x), Math.floor(sprite.y), 
			sprite.width, sprite.height
		  ); 
	  }
	  if(sprite.spriteType == 1)
	  {
		  spriteCtx.drawImage
		  (
			owl, 
			sprite.sourceX, sprite.sourceY, 
			sprite.sourceWidth, sprite.sourceHeight,
			Math.floor(sprite.x), Math.floor(sprite.y), 
			sprite.width, sprite.height
		  ); 
	  }
    }
  }
  spriteCtx.restore();
}