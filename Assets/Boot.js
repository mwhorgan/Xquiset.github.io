var MinerTrouble = {};

MinerTrouble.Boot = function (game) {};
MinerTrouble.Boot.prototype = {
    
    preload: function () {
        this.load.image('preloaderBar', 'Images/Title Logo/loader_bar.png');
        this.load.image('titleimage', 'Images/Title Logo/image.png');
    },
    
    create: function () {
        this.inputmaxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
<<<<<<< HEAD
        this.scale.minWidth = 1473;
=======
        this.scale.minWidth = 1423;
>>>>>>> origin/master
        this.scale.minHeight = 775;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);
        
        this.input.addPointer();
        this.stage.backgroundColor = '#000000';
        
        this.state.start('Preloader');
        
    }
}