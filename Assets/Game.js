MinerTrouble.Game = function (game) {
    this.coin;
    this.player;
    this.totalcoins;
    this.coinsCollected;
    this.gameover;
    this.overmessage;
    this.score;
    this.music;
    this.ouch;
    this.health;
    this.healthPoints;
    this.cursor;
    this.facing;
};

MinerTrouble.Game.prototype = {
    create: function () {
        this.gameover = false;
        this.totalcoins = 100;
        this.totalmonsters = 5;
        this.coinsCollected = 0;
        this.healthPoints = 1000;
        this.facing = 'left';
        
        this.buildWorld();
    },
    
    updateGame: function () {
        if(this.gameover != false){
            this.score.setText('Coins Collected: Dead!');
        }else{
            this.score.setText('Coins Collected: ' + this.coinsCollected);
        }
    },
    
    buildWorld: function (){
        this.add.image(-20, 0, 'level');
        this.buildMiner();
        this.buildCoins();
        this.score = this.add.bitmapText(5, 20, 'eightbitwonder', 'Coins Collected: ' + this.coinsCollected, 15);
        this.health = this.add.bitmapText(5, 40, 'eightbitwonder', 'Health: ' + this.healthPoints, 15);
    },
    
    buildMonsters: function () {
        
    },
    
    buildMiner: function () {
        this.player = this.add.sprite(65, 130, 'miner');
        
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
    
        this.camera.follow(this.player);
        
        this.cursor = this.input.keyboard.createCursorKeys();
        
    },
    
    buildCoins: function () {
        for(this.i = 0; this.i <= 100; this.i++)
        {
            this.x = Math.floor(Math.random() * (1400 - 65 + 1)) + 65;
            this.y = Math.floor(Math.random() * (90 - 650 + 1)) + 650;
            this.coin = this.add.sprite(this.x, this.y, 'coin');
        }
    },
    
    monsterCollision: function () {
        
    },
    
    coinCollision: function () {
        
    },
    
    checkHealth: function () {
        if(this.healthPoints <= 0){
            this.gameover = true;
            this.health.setText('Health: 0');
            this.overmessage = this.add.bitmapText(this.world.centerX-180, this.world.centerY-40, 'eightbitwonder', 'GAME OVER\n\n' + this.coinsCollected, 42);
            this.overmessage.align = "center";
            this.overmessage.inputEnabled = true;
            this.overmessage.events.onInputDown.addOnce(this.quitGame, this);
        }else{
            this.health.setText('Health: ' + this.healthPoints);
        }
    },
    
    quitGame: function (pointer) {
        this.state.start('StartMenu');
    },
    
    update: function () {
        this.physics.arcade.collide(this.player);

        this.player.body.velocity.x = 0;

        if (this.cursor.left.isDown)
        {
            this.player.body.velocity.x = -150;
        }
        else if (this.cursor.right.isDown)
        {
            this.player.body.velocity.x = 150;
        }
        else if (this.cursor.down.isDown)
        {
            this.player.body.velocity.y = 150;
        }
        else if (this.cursor.up.isDown)
        {
            this.player.body.velocity.y = -150;
        }
        else
        {
            if (this.facing != 'idle')
            {
                this.player.animations.stop();
            }
            if (this.facing == 'left')
            {
                this.player.frame = 2;
            }
            else if(this.facing == 'up')
            {
                this.player.frame = 7;
            }
            else if(this.facing == 'down')
            {
                this.player.frame = 1; 
            }
            else if(this.facing == 'right'){
                this.player.frame = 3
            }
            else
            {
                this.player.frame = 1;
            }
            this.facing = 'idle';
            this.player.body.velocity.y = 0;
        }
    }
};