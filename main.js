var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
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
    this.load.image('ground', 'Assets/platform.png');
    this.load.multiatlas('Demi.Walk.Anubis.R', 'Assets/animatedsprites/Demi.Walk.Anubis.R/Demi.Walk.Anubis.R.json', 'Demi.Walk.Anubis.R');
}

function create() {
    this.add.image(0, 0, 'tBackground').setOrigin(0, 0)
    platforms = this.physics.add.staticGroup()
    platforms.create(0, 600, 'ground')
    platforms.create(0, 0, 'ground');
    platforms.create(800, 0, 'wall');
    platforms.create(0, 0, 'wall');
}

function update() {
}