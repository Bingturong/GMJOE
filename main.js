var gameScene = new Phaser.Scene('Game');
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
        }
    },
};
var game = new Phaser.Game(config);
gameScene.preload = function () {
    this.load.image('tbackground', 'assets/tbackground.png');

};

gameScene.create = function () {
    this.add.sprite(0, 0, 'tbackground');
    bg.setOrigin(0, 0);

}