class Game
{
    constructor()
    {

    }
    getState()
     {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) 
        {
            gameState = data.val();
        })

    }

    update(state)
     {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() 
    {
            if (gameState === 0)
             {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists())
                 {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
               
            }

    player1 = createSprite(200,500,50,50);
    player1.shapeColor="red";

    player2 = createSprite(800,540,50,50);
    player2.shapeColor="purple";
    //player1.addImage("player1",player_img);
    
  
    //player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    play()
    {
        
                form.hide();

                Player.getPlayerInfo();

                 image(back_img, 0, 0, 1000, 800);

                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 //console.log(allPlayers);


                 players[1].x=100;
                

                 for(var plr in allPlayers)
                 {
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500-allPlayers[plr].distanceY;
                    
                     players[index -1].x = x;
                     players[index - 1].y = y;
                     
                     if(index === player.index)
                     {
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                    //console.log("you pressed right")
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update(  );
                }
                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    //console.log("UP ARROW ")
                    player.distanceY += 10
                    player.update();
                   // console.log("you pressed right")
                }
                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    //console.log("DOWN ARROW ")
                    player.distanceY -= 10
                    player.update();
                }
                var num=200;
                if (frameCount % 200 === 0) 
                 {
                     fruits = createSprite(200, 300, 100, 100);
                     //fruits.velocityY = 6;
                     //var rand = Math.round(random(1,5));
                     var rand = 2;
                     console.log(rand);
                     switch(rand)
                     {
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }




            }




            end()
            {
              // console.log("Game Ended");
            }

    
    







}