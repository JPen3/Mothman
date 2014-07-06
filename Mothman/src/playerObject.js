var playerObject = Object.create(spriteObject);

//Arrow key codes
var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

//Directions
var moveUp = false;
var moveDown = false;
var moveRight = false;
var moveLeft = false;


playerObject.keydownHandler = function(event)
{
  switch(event.keyCode)
  {
    case UP:
      moveUp = true;
      break;
	  
    case DOWN:
      moveDown = true;
      break;
	    
    case LEFT:
      moveLeft = true;
      break;  
	    
    case RIGHT:
      moveRight = true;
      break; 
  }
};

playerObject.keyupHandler = function(event)
{
  switch(event.keyCode)
  {
    case UP:
      moveUp = false;
      break;
	  
    case DOWN:
      moveDown = false;
      break;
	    
    case LEFT:
      moveLeft = false;
      break;  
	    
    case RIGHT:
      moveRight = false;
      break; 
  }
};

playerObject.update = function()
{
	//Up
	if(moveUp && !moveDown)
	{
		this.vy = -5;
	}
	//Down
	if(moveDown && !moveUp)
	{
		this.vy = 5;
	}
	//Left
	if(moveLeft && !moveRight)
	{
		this.vx = -5;
	}
	//Right
	if(moveRight && !moveLeft)
	{
		this.vx = 5;
	}

	//Set the player's velocity to zero if none of the keys are being pressed
	if(!moveUp && !moveDown)
	{
		this.vy = 0;
	}
	if(!moveLeft && !moveRight)
	{
		this.vx = 0;
	}

	//Move the player 
	this.x += this.vx;
	this.y += this.vy;
};