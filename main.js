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
    this.load.image('tBackground', 'assets/tBackground.png');

};

gameScene.create = function () {
    this.add.sprite(0, 0, 'tBackground');
    bg.setOrigin(0, 0);

}