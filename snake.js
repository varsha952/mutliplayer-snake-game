class Player {
    constructor()
     {
        this.index = null;
        //this.position.x = 0;
        //this.position.y = 0;
        this.distance=0;
        this.distanceY=0;
        this.name = null;
        this.score =0;
        this.randomX = 100;
        this.randomY = 300;
        this.randomFruit = 2;

    }

    getCount() 
    {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            distanceY : this.distanceY,
            score:this.score
        });
    }

    randomUpdate()
    {
        

    }

    randomRead()
    {

    }


    static getPlayerInfo() 
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
