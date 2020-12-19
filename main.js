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
    this.load.image('tBackground', 'Assets/tBackground.png');
    this.load.image('tiles', 'assets/tilesets/tset.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/t.json');
    this.load.multiatlas('Demi.Walk.Anubis.R', 'Assets/animatedsprites/Demi.Walk.Anubis.R/Demi.Walk.Anubis.R.json', 'Demi.Walk.Anubis.R');
}

function create() {
    this.add.image(0, 0, 'tBackground').setOrigin(0, 0)
    const map = this.make.tilemap({ key: 'map' });
    const ts = map.addTilesetImage('t', 'tiles');
    const platforms = map.createStaticLayer('Walls', ts, 0, 200)
    platforms.setCollisionByExclusion(-1, true);

}

function update() {
}