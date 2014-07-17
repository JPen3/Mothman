var playerObject = Object.create(spriteObject);

playerObject.SIZEX = 64;
playerObject.SIZEY = 64;
playerObject.ROWS = 1;
playerObject.COLUMNS = 3;

playerObject.sourceX = 0;
playerObject.sourceY = 0;
playerObject.sourceWidth = 64;
playerObject.sourceHeight = 64;
playerObject.width = 64;
playerObject.height = 64;

playerObject.startFrame = 0;
playerObject.endFrame = 2;
playerObject.currentFrame = 0;


playerObject.forward = true;
playerObject.spriteType = 0;

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

//The player's updateAnimation method
playerObject.updateAnimation = function()
{
    this.sourceX = Math.floor(this.currentFrame % this.COLUMNS) * this.SIZEX;
    //this.sourceY = Math.floor(this.currentFrame / this.ROWS) * this.SIZEY;
	  
	//If the last frame has been reached, set forward to false
	if(this.currentFrame === this.endFrame)
    {
     	this.forward = false;
	  	this.currentFrame = this.startFrame;
    }
    
    //If the first frame has been reached, set forward to true
    if(this.currentFrame === this.startFrame)
    {
      	this.forward = true;
    }
    
    //Add 1 to currentFrame if forward is true, subtract 1 if it's false
	if(this.forward)
	{
		this.currentFrame++;
	}
	else
	{
		this.currentFrame--;
	}
};

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
		if(this.y < 0)
		{
			this.vy = 0;
		}
		else
		{
			this.vy = -5;
		}
	}
	//Down
	if(moveDown && !moveUp)
	{
		if(this.y > canvas1.height - this.height)
		{
			this.vy = 0;
		}
		else
		{
			this.vy = 5;
		}
	}
	//Left
	if(moveLeft && !moveRight)
	{
		if(this.x < 0)
		{
			this.vx = 0;
		}
		else
		{
			this.vx = -5;
		}
	}
	//Right
	if(moveRight && !moveLeft)
	{
		if(this.x > canvas1.width - this.width)
		{
			this.vx = 0;
		}
		else
		{
			this.vx = 5;
		}
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

	//Move the alien and set its screen boundaries
	//this.x = Math.max(64, Math.min(this.x + this.vx, gameWorld.width - this.width - 64)); 
	//this.y = Math.max(64, Math.min(this.y + this.vy, gameWorld.height - this.height - 64));
	
	//Move the player
	this.x += this.vx;
	this.y += this.vy;
	
	/*//Screen wrapping
	if(this.x + this.width < 0)
	{
		this.x = canvas1.width;
	}
	if(this.y < 0)
	{
		this.y = 0;
	}
	if(this.x > canvas1.width)
	{
		this.x = 0 - this.width;
	}
	if(this.y + this.height > canvas1.height)
	{
		this.y = canvas1.height - this.height;
	}*/
};