var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('tBackground', 'assets/tBackground.png');
    this.load.image('mj', 'assets/mummyjackal.png');
    this.load.image('tiles', 'assets/tilesets/tset.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/t.json');
    this.load.multiatlas('Demi.Walk.Anubis.R', 'Assets/animatedsprites/Demi.Walk.Anubis.R/Demi.Walk.Anubis.R.json', 'Demi.Walk.Anubis.R');
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
}

function create() {
    mj = this.add.image(0, 0, 'mj').setOrigin(0, 0)
    mj.setScale(0.2, 0.2);
}

function update() {
}