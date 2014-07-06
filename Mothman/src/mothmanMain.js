//The canvas
var canvas1 = document.querySelector("#layer1"); 
var spriteCtx = canvas1.getContext("2d");

var sprites = [];
var assetsToLoad = [];
var assetsLoaded = 0;

//The player object (Doctor Doctor)
var player = Object.create(playerObject);
sprites.push(player);

//Load Doctor Doctor sprite sheet
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "../images/mothman.png";
assetsToLoad.push(image);

window.addEventListener("keydown", player.keydownHandler, false);
window.addEventListener("keyup", player.keyupHandler, false);

//Game states
var LOADING = 0;
var BUILD_MAP = 1;
var PLAYING = 2;
var OVER = 3;
var LEVEL_COMPLETE = 4;
var gameState = LOADING;

update();

function update()
{ 
  //The animation loop
  requestAnimationFrame(update, canvas);
  
  //Change what the game is doing based on the game state
  switch(gameState)
  {
    case LOADING:
      console.log("loading...");
      break;
      
    case BUILD_MAP:
      //buildMap(levelMaps[levelCounter]);
      //buildMap(levelGameObjects[levelCounter]);
      //createOtherSprites();
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

function loadHandler()
{ 
  	assetsLoaded++;
  	if(assetsLoaded === assetsToLoad.length)
  	{
    	gameState = BUILD;
  	}
  	updateAnimation();
}

function updateAnimation()
{ 
  	//Set a timer to call updateAnimation every 300 milliseconds
  	setTimeout(updateAnimation, 150);
  
  	//Update the player's animation frames
  	player.updateAnimation();
  
  	//Render the animation
  	render();
}

function playGame()
{
	player.update();
	render();
}

function render()
{ 
  //Render the gameWorld
  spriteCtx.clearRect(0, 0, canvas1.width, canvas1.height);
  
  //Position the gameWorld inside the camera
  spriteCtx.save();
  spriteCtx.translate(-camera.x, -camera.y);
  
  //Display the sprites on the gameWorld
  if(sprites.length !== 0)
  {
    for(var i = 0; i < sprites.length; i++)
    {
		var sprite = sprites[i];
	     
	    	//Save the current state of the drawing surfac before it's rotated
	     	spriteCtx.save();
	  
	     	//Rotate the canvas
    	 	spriteCtx.translate
    		(
    	  		Math.floor(sprite.x + sprite.getHalfWidth()), 
    	  		Math.floor(sprite.y + sprite.getHalfHeight())
    		);
		
	    	spriteCtx.rotate(sprite.rotation * Math.PI / 180);
    
	    	if(sprite.visible)
	    	{
				spriteCtx.drawImage
				(
					image, 
					sprite.sourceX, sprite.sourceY, 
					sprite.sourceWidth, sprite.sourceHeight,
					Math.floor(-sprite.getHalfWidth()), Math.floor(-sprite.getHalfHeight()),
					sprite.width, sprite.height
				);
			//Restore the drawing surface to its 
      		//state before it was rotated
      		spriteCtx.restore();
		}
	}
  }
  
  spriteCtx.restore();
}