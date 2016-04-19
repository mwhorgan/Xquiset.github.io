var MinerTrouble = {};

MinerTrouble.Boot = function (game) {};
MinerTrouble.Boot.prototype = {
    
    preload: function () {
        this.load.image('prealoaderBar', 'Images/Title Logo/loader_bar.png');
        this.load.image('titleimage', 'Images/Title Logo/image.png');
    },
    
    create: function () {
        this.inputmaxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 1360;
        this.scale.minHeight = 768;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);
        
        this.input.addPointer();
        this.stage.backgroundColor = '#7F392A';
        
        this.state.start('Preloader');
        
    }
}