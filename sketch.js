var database;
var game, form, player;
var gameState =0;
var playerCount =0;
var player1, player2;
var players;
var allPlayers;
var back_img
var form_img
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;


function preload(){
back_img = loadImage("back_img.png")
form_img = loadImage("snakeimg.jpg")
fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();

}

function setup()
{
 createCanvas(1000,800);
 //createSprite(400, 200, 50, 50);
 database = firebase.database()
 //console.log(database)

game = new Game();
game.getState();
game.start();


}

function draw() 
{
 background(form_img);  

 if (playerCount === 2) {
  game.update(1);
}
if (gameState === 1) {
  clear(); 
  game.play();
}
if (gameState === 2) {
 
  game.end();
}

 //drawSprites();
}