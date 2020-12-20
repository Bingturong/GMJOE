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
    this.load.image('tile70', 'assets/tile70.png');
    this.load.tilemapTiledJSON('map', 'assets/x4.json');
    this.load.multiatlas('Demi.Walk.Anubis.R', 'Assets/animatedsprites/Demi.Walk.Anubis.R/Demi.Walk.Anubis.R.json', 'Demi.Walk.Anubis.R');
}

function create() {
    mj = this.add.image(400, 500, 'mj')
    mj.setScale(0.2, 0.2);
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tile.70', 'tile70');
    const platforms = map.createStaticLayer('layer1', tileset, 0, 200);
    platforms.setCollisionByExclusion(-1, true);
}

function update() {
}