//Create the player sprite and center it
//var player = Object.create(spriteObject);
var player = Object.create(playerObject);
player.x = 243;
player.y = 168;
sprites.push(player);

//Load the images
var bg = new Image();
bg.addEventListener("load", loadHandler, false);
bg.src = "../images/background.png";
assetsToLoad.push(bg);

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "../images/mothman.png";
assetsToLoad.push(image);

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
	
	gameState = PLAYING;
	
}

function playGame()
{
	player.update();

	//Render the sprite
	render();
}

function render()
{ 
  //Clear the previous animation frame
  spriteCtx.clearRect(0, 0, canvas1.width, canvas1.height);
  
  //Loop through all the sprites and use 
  //their properties to display them
  if(sprites.length !== 0)
  {
    for(var i = 0; i < sprites.length; i++)
    {
      var sprite = sprites[i];
      spriteCtx.drawImage
      (
        image, 
        sprite.sourceX, sprite.sourceY, 
        sprite.sourceWidth, sprite.sourceHeight,
        Math.floor(sprite.x), Math.floor(sprite.y), 
        sprite.width, sprite.height
      ); 
    }
  }
}