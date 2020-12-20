var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: null,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
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
    this.add.image(0, 0, 'tBackground').setOrigin(0, 0)
    mj = this.add.image(400, 300, 'mj')
    mj.setScale(0.2, 0.2);
    anu = this.add.sprite(0, 400, 'Demi.Walk.Anubis.R', '0001.png');
    anu.setScale(0.2, 0.2);
    var frameNames = this.anims.generateFrameNames('cityscene', {
        start: 1, end: 21, zeroPad: 4,
        prefix: 'capguy/walk/', suffix: '.png'
    });

    const map = this.make.tilemap({ key: 'map' });
    const ts = map.addTilesetImage('t', 'tiles');
    const platforms = map.createStaticLayer('Walls', ts, 0, 200)
    platforms.setCollisionByExclusion(-1, true);

}

function update() {
}