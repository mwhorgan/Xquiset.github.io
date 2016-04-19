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
        this.buildMonsters();
        this.buildMiner();
        this.buildCoins();
        this.score = this.add.bitmapText(10, 30, 'eightbitwonder', 'Score: ' + this.coinsCollected, 20);
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
            this.assignBunnyMovement(b);
        }
    },
    
    buildMiner: function () {
        
    },
    
    buildCoins: function () {
        this.coinGroup = this.add.group();
        this.coinGroup.enableBody = true;
        for (var i=0; this.totalcoins; i++){
            var b = this.coinGroup.create(this.rnd.integerInRange(-10, this.world.width-50), this.rnd.integerInRange(this.world.height1-180, this.world.height-60), 'coin', 'Coin0000');
            b.anchor.setTo(0.5, 0.5);
        }
    },
    
    assignMonsterMovement: function (){
        
    },
    
    assignMinerMovement: function () {
        
    },
    
    startMonster: function () {
        b.animations.stop('Rest');
        b.animations.play('Walk', 24, true);
    },
    
    stopMonster: function () {
        b.animations.stop('Walk');
        b.animations.play('Rest', 24, true);
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