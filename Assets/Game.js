MinerTrouble.Game = function (game) {
    this.coin;
    this.player;
    this.totalcoins;
    this.totalmonsters;
    this.coinsCollected;
    this.gameover;
    this.overmessage;
    this.secondsElapsed;
    this.score;
    this.timer;
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
        this.secondsElapsed = 0;
        this.timer = this.time.create(false);
        this.timer.loop(1000, this.updateSeconds, this);
        this.totalcoins = 100;
        this.totalmonsters = 5;
        this.coinsCollected = 0;
        this.healthPoints = 1000;
        this.facing = 'left';
        
        this.buildWorld();
    },
    
    updateSeconds: function () {
        this.secondsElapsed++;
        
        if(this.gameover != false){
            this.score.setText('');
        }else{
            this.score.setText('Coins Collected: ' + this.coinsCollected);
        }
    },
    
    buildWorld: function (){
        this.add.image(0, 70, 'level');
        this.buildMiner();
        this.buildCoins();
        this.score = this.add.bitmapText(5, 20, 'eightbitwonder', 'Coins Collected: ' + this.coinsCollected, 15);
        this.health = this.add.bitmapText(5, 40, 'eightbitwonder', 'Health: ' + this.healthPoints, 15);
        this.timer.start();
    },
    
    buildMonsters: function () {
        this.monsterGroup = this.add.group();
        this.monsterGroup.enableBody = true;
        for (var i=0; i<this.totalmonsters; i++){
            var b = this.monsterGroup.create(this.rnd.integerInRange(-10, this.world.widt-50), this.rnd.integerInRange(this.world.height-180, this.world.height-60), 'monster', 'Monster0000');
            b.anchor.setTo(0.5, 0.5);
            b.body.moves = true;
            b.animations.add('Rest', this.game.math.numberArray(1,58));
            b.animations.add('Walk', this.game.math.numberArray(68,107));
            b.animations.play('Rest', 24, true);
            this.assignMonsterMovement(b);
        }
    },
    
    buildMiner: function () {
        this.player = this.add.sprite(65, 130, 'miner');
        
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
    
        this.camera.follow(this.player);
        
        this.cursor = this.input.keyboard.createCursorKeys();
        
    },
    
    buildCoins: function () {
        
    },
    
    resetCoin: function(r) {
    
    },
    
    respawnCoin: function () {
        
    },
    
    monsterCollision: function () {
        
    },
    
    coinCollision: function () {
        
    },
    
    checkHealth: function () {
        if(this.health <= 0){
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

            if (this.facing != 'left')
            {
                this.player.animations.play('left');
                this.facing = 'left';
            }
        }
        else if (this.cursor.right.isDown)
        {
            this.player.body.velocity.x = 150;

            if (this.facing != 'right')
            {
                this.player.animations.play('right');
                this.facing = 'right';
            }
        }
        else if (this.cursor.down.isDown)
        {
            this.player.body.velocity.y = 150;
            
            if (this.facing != 'up')
            {
                this.player.animations.play('up');
                this.facing = 'up';
            }
        }
        else if (this.cursor.up.isDown)
        {
            this.player.body.velocity.y = -150;
            
            if(this.facing != 'down')
            {
                this.player.animations.play('down');
                this.facing = 'down';
            }
        }
        else
        {
            if (this.facing != 'idle')
            {
                this.player.animations.stop();
            }
            if (this.facing == 'left')
            {
                this.player.frame = 3;
            }
            else if(this.facing == 'up')
            {
                this.player.frame = 7;
            }
            else if(this.facing == 'down')
            {
                this.player.frame = 1;
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