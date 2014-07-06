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

var currLevel = 0;

//An array to store the sprites
var sprites = [];
var assetsToLoad = [];
var assetsLoaded = 0;