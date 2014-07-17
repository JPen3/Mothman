var enemyObject = Object.create(spriteObject);

enemyObject.spriteType = 1;

enemyObject.SIZEX = 350;
enemyObject.SIZEY = 720;
enemyObject.ROWS = 1;
enemyObject.COLUMNS = 3;

enemyObject.sourceX = 0;
enemyObject.sourceY = 0;
enemyObject.sourceWidth = 350;
enemyObject.sourceHeight = 720;
enemyObject.width = 350;
enemyObject.height = 720;

enemyObject.startFrame = 0;
enemyObject.endFrame = 2;
enemyObject.currentFrame = 0;

enemyObject.forward = true;

enemyObject.centerX = enemyObject.x + (enemyObject.width / 2);
enemyObject.centerY = enemyObject.y + (enemyObject.height / 2);
enemyObject.halfWidth = enemyObject.width / 2;
enemyObject.halfHeight = (enemyObject.height / 2) - 38;

//The enemy's updateAnimation method
enemyObject.updateAnimation = function()
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