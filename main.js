var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: "game",

    physics: {
        default: 'arcade',
        arcade: {
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
        scale: {
        mode: Phaser.Scale.FIT,
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('tBackground', 'assets/tBackground.png');
    this.load.image('mj', 'assets/mummyjackal.png');
    this.load.image('tile70', 'assets/tile70.png');
    this.load.tilemapTiledJSON('map', 'assets/x4.json');
    this.load.multiatlas('Demi.Walk.Anubis.R', 'Assets/animatedsprites/Demi.Walk.Anubis.R/Demi.Walk.Anubis.R.json', 'Demi.Walk.Anubis.R');
}

function create() {
    mj = this.add.image(400, 500, 'mj')
    mj.setScale(0.2, 0.2);
}

function update() {
}