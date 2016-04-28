MinerTrouble.Game = function (game) {
    this.coin;
    this.miner;
    this.coinGroup;
    this.monsterGroup;
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
        
        this.buildWorld();
    },
    
    updateSeconds: function () {
        this.secondsElapsed++;
        
        if(this.gameover != false){
            this.score.setText('');
        }else{
            this.score.setText('Score: ' + this.coinsCollected);
        }
    },
    
    buildWorld: function (){
        this.add.image(0, 0, 'level');
        this.buildMiner();
        this.score = this.add.bitmapText(10, 30, 'eightbitwonder', 'Score: ' + this.coinsCollected, 20);
        this.timer.start();
    },
    
    buildMonsters: function () {
       
    },
    
    buildMiner: function () {
        miner = this.add.sprite(40, 100, 'miner');
        miner.animations.add('Walk');
        miner.animations.play('Walk', 50, true);
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
        
    }
};