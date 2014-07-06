var enemyObject = Object.create(spriteObject);

enemyObject.spriteType = 1;

enemyObject.SIZEX = 256;
enemyObject.SIZEY = 256;
enemyObject.ROWS = 4;
enemyObject.COLUMNS = 4;

enemyObject.sourceX = 0;
enemyObject.sourceY = 0;
enemyObject.sourceWidth = 200;
enemyObject.sourceHeight = 720;
enemyObject.width = 200;
enemyObject.height = 720;

enemyObject.centerX = enemyObject.x + (enemyObject.width / 2);
enemyObject.centerY = enemyObject.y + (enemyObject.height / 2);
enemyObject.halfWidth = enemyObject.width / 2;
enemyObject.halfHeight = (enemyObject.height / 2) - 38;
